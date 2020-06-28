import Validator, { Rules, AnySource } from "../lib"
import { string, size, required, compareWith } from "../lib/rules"

const rules: Rules = {
  name: [[string], size(5)],
  password: [string, size(10)],
  comparePassword: [required, compareWith("password")],
}
const data: AnySource = {
  name: "134132412afds",
  password: "134132412afds",
  // "comparePassword":"134132412afds"
}

const v = new Validator(rules)
v.openGreedy().valid(data)

console.log(v.errors())
