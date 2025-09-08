# 验证支付结果
::: tip 权限组 `VIP` 路径ID `30` 方法ID `04`
请求域：vip.youloge.com 请求头：`Signer:signer`

作用域：`drive`  方法名: `verify`

错误编号：`3004 00` 频率限制: `10` 
:::

> 验证支付`只有一次机会`，验证失败就需要重新申请`payment`下单支付


### 请求代码 
``` http
POST /drive HTTP/1.1
Host: vip.youloge.com
Lang: zh-CN
Content-Type: application/json
Signer: {{Signer}}
{
  "method": "verify",
  "params": {
    "code":"12345",
    "access":"accessaccess"
  }
}
```
### 响应代码
``` json
{
  "err": 200,
  "msg": "支付成功",
  "data": {
    "signertrue": "DcQlwu6o7hWu+JNyP******",
    "expire": 1692210923
  }
}
```
### 错误代码
``` json
{
  "err": 300400,
  "msg": "验证ID不合规"
}
```

::: details 其他错误码

| 错误err        |      描述msg      |  说明 |
| ------------- | :-----------: | ----: |
| 300400      | 验证ID不合规 | 说明ID不在Safe_Base32 中 |
| 300401      | 验证失败请重新支付 | 邮件支付码不正确 |
:::




> Safe_Base32: 安全验证码字符

- `ABCDEFGHJKLMNPQRSTUVWXYZ23456789` 32位字符

- 26个字符+10数字组合去除容易歧义的字符`I`、`O`、`0`、`1`组成的。 

- 接口最终会帮字母统一成大写字母处理,前端需要兼容小写`abcdefghjklmnpqrstuvwxyz`
