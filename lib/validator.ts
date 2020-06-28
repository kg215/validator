import head from "lodash/head";
import fromPairs from "lodash/fromPairs";

import { ErrorHandler, ErrorMessage } from "./errorhandler";

export interface AnySource<T = any> {
  [key: string]: T;
}

export interface Rules {
  [key: string]: any[];
}

export default class Validator<R extends Rules, D extends AnySource> {
  data: AnySource;
  message: AnySource;
  errorCenter: ErrorHandler;
  alias: AnySource<string> = {};
  rules: Rules = {};
  rulesField: AnySource = {};
  greedy: boolean = false;

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

  valid(data: D, greedy?: boolean) {
    this.openGreedy(greedy);
    this.data = { ...this.rulesField, ...data };
    Object.keys(this.data).forEach((key: string) => {
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
