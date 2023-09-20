# 验证登录邮件
::: tip 权限组 `API` 路径ID `20` 方法ID `02`
请求域：api.youloge.com 请求头：`Ukey:ukey`

作用域：`login`  方法名: `verify`

错误编号：`2002 00` 频率限制: `10` 
:::

> 每组`access`5分钟有效，最多验证3次
> 验证通过建议本地保存用户`profile`信息
> `profile`中的`secret`一般3-7天有效，开发者可以利用`secret`给多个项目授权

### 请求代码
``` http
POST /login HTTP/1.1
Host: api.youloge.com
Lang: zh-CN
Content-Type: application/json
ukey: {{Ukey}}
{
  "method": "verify",
  "params": {
    "code":"",
    "access": "DcQlwu6o7hWu+JNyP******"
  }
}
```
### 响应代码
- `signertrue 可以解密出 ticket`用户超级凭证：开发者可以授权名下任意`ukey账户使用`
``` json
{
  "err": 200,
  "msg": "验证成功",
  "data": {
    "uuid": "uuid",
    "mail":"123456@qq.com",
    "name":"Y_ADSJKI54",
    "avatar":"avatarURL",
    "created":"2023-08-17 03:17:05",
    "updated":"2023-08-17 03:17:05",
    "signertrue": "DcQlwu6o7hWu+JNyP******",
    "expire": 1692210923
  }
}
```
### 错误代码
``` json
{
  "err": 200200,
  "msg": "验证码不合规"
}
```



::: details 其他错误码

| 错误err        |      描述msg      |  说明 |
| ------------- | :-----------: | ----: |
| 200200      | 验证码不合规 | 验证码非`SafeCode32` |
| 200101      |   邮箱不正确    |   检查邮箱地址是否正确 |
| 200104 |   邮箱黑名单    |    该邮箱已被封禁 |

:::




