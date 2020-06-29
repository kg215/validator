import Validator, { Rules, AnySource } from "../lib"
import { string, size, required, compareWith } from "../lib/rules"

const rules: Rules = {
  name:[[string,'name必须是字符串'], size(5)],
  password: [string, size(10)],
  comparePassword: [required, compareWith("password")],
}

const v = new Validator(rules)
//注册单个验证规则
v.register("somerule",[required,size(11)]);
//注册用户验证群
v.registerGroup({
  "user": ["name","password"]
});
//phone是内置规则
v.registerGroup("userPhone",["phone"]);

const data: AnySource = {
  name: "1",
  password: "134132412afds",
  comparePassword:"134132412afds"
};

v.group('user').pick("phone").valid(data);
console.log(v.errors());

v.group('userPhone').valid(data);
console.log(v.errors());


