### 方便自己验证表单数据
---
- **使用方法**

```js
import Validator, { Rules, AnySource } from "../lib"
import { string, size, required, compareWith } from "../lib/rules"

const rules: Rules = {
  name: [[string], size(5)],
  password: [string, size(10)],
  comparePassword: [required, compareWith("password")],
}
const data: AnySource = {
  name: "my name",
  password: "my_password1",
  comparePassword:"my_password2"
}

const v = new Validator(rules)
//openGreedy 开启贪婪模式的验证，单一字段完成所有验证才会停止，否则验证到一个错误就停止
v.openGreedy().valid(data)
console.log(v.errors())
```

- **todo**
1. 统一从配置文件读取验证规则
2. 字段插件式验证规则
