import fromPairs from "lodash.frompairs";
import head from "lodash.head";
import flattenDepth from "lodash.flattenDepth";
import { ErrorHandler, ErrorMessage } from "errorhandler";
import { string, size } from "../lib/rules"
export interface AnySource<T = any> {
  [key: string]: T;
}
export interface Rules {
  [key: string]: any[];
}

type PickArgs = string[] | string[][]


const initRules:Rules = {
  phone:[string, size(11)],
}

export default class Validator<R extends Rules, D extends AnySource> {
  data: AnySource;
  message: AnySource;
  errorCenter: ErrorHandler;
  alias: AnySource<string> = {};
  rules: Rules = initRules;
  rulesField: AnySource;
  greedy: boolean = false;
  pickPool: Set<string> = new Set()
  groupRules: Map<string,string[]> = new Map()

  constructor(rules?: R, alias?: AnySource<string>) {
    this.errorCenter = new ErrorHandler();
    this.useRule(rules);
    this.useAlias(alias);
  }

  errorsMessage(key: string) {
    const errors = this.fieldSingleError(key);
    if (errors && errors.message) {
      return errors.message;
    }
    return "";
  }

  errors(key?: string) {
    if (key) {
      return this.fieldSingleError(key);
    }
    return this.errorCenter.get();
  }

  hasErrors() {
    return this.errorCenter.hasError();
  }

  fieldSingleError(key: string) {
    let errors = this.errorCenter.get(key);
    return head(errors as ArrayLike<ErrorMessage>);
  }

  openGreedy(greedy: boolean = true) {
    this.greedy = greedy;
    return this;
  }

  useRule<R extends Rules>(rules: R) {
    if (rules) {
      this.rules = { ...this.rules, ...rules };
      this.rulesField = fromPairs(
        Object.keys(this.rules).map((item) => [item])
      );
    }
    return this;
  }

  useAlias(alias: AnySource<string>) {
    if (alias) {
      this.alias = { ...this.alias, ...alias };
    }
    return this;
  }

  register(field:string,rule:any[]){
    this.useRule({[field]:rule});
    return this;
  }

  registerGroup(key:string | AnySource<string[]>,pickArgs?:PickArgs){

    if(typeof key === 'string' && pickArgs.length>0){
      this.groupRules.set(key,flattenDepth(pickArgs,1))
    }

    if(typeof key === 'object'){
        Object.keys(key).forEach(k=>this.groupRules.set(k,flattenDepth(key[k],1)))
    }

    return this
  }

  group(key:string){
    this.pickPool.clear()
    this.errorCenter.clear()
    this.pick(this.groupRules.get(key));
    return this;
  }

  pick(...fields:string[] | string[][]){
    flattenDepth(fields,1).map(item=>this.pickPool.add(item));
    return this;
  }

  valid(data: D, greedy?: boolean) {
    if(!data) return ;
    this.openGreedy(greedy);
    this.data = { ...this.rulesField, ...data };
    let dataKeys = Object.keys(this.data);
    if(this.pickPool.size>0){
      dataKeys = dataKeys.filter(key=>this.pickPool.has(key))
    }
    console.log(dataKeys);
    dataKeys.forEach((key: string) => {
      if (!this.alias[key]) this.alias[key] = key;
      if (this.rules.hasOwnProperty(key)) {
        const rule = this.rules[key];
        this.validate(rule, key);
      }
    });
    return this;
  }

  private validate(rule: any[], key: string) {
    const errors: ErrorMessage[] = [];
    for (let i = 0; i < rule.length; i++) {
      let msg = "",
        func = rule[i];
      if (Array.isArray(func)) {
        (func = rule[i][0]), (msg = rule[i][1]);
      }
      let res = func(this.data, key, this.alias)(msg);
      if (res) {
        errors.push({ message: res, index: i });
        if (!this.greedy) {
          break;
        }
      }
    }
    this.errorCenter.set(key, errors);
  }
}
