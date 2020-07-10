import {SyncHook} from 'tapable'
import Validator, { Rules, AnySource } from "../lib"


interface VdcHooks{
    beforeCreate: SyncHook
}

class Vdc<R extends Rules,D extends AnySource>{

    hooks:VdcHooks
    validator:Validator<R,D>

    constructor(){
        this.hooks.beforeCreate = new SyncHook()
        this.hooks.beforeCreate.tap("beforeCreate",this.init)
    }

    init(){
        this.validator = new Validator()
    }



}