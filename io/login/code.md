# 给用户发送登录邮件
::: tip 权限组 `DEV` 路径ID `20` 方法ID `01`
请求域：`vip.youloge.com` 请求头：`Authorization:Youloge-VIP {Signer}`

作用域：`login`  方法名: `code`

错误编号：`2001 00` 频率限制: `10` 
:::

> 未注册邮箱自动注册,每个邮箱每30秒可以发送一次登录邮件！

### 请求代码
- `Signer`必须为开发者签名：强烈建议前端在此处加上防刷处理
``` http
POST /login HTTP/1.1
Host: vip.youloge.com
Lang: zh-CN
Content-Type: application/json
Authorization:Youloge-VIP {Signer}
{
  "mail": "11******05@qq.com"
}
```
### 响应代码
``` json
{
  "err": 200,
  "msg": "邮件已发送",
  "data": {
    "random": "ZTQ",
    "access": "DcQlwu6o7hWu+JNyP******",
    "expire": 1692210923
  }
}
```
### 错误代码
``` json
{
  "err": 200100,
  "msg": "邮件频率限制30秒/封"
}
```



::: details 其他错误码

| 错误err        |      描述msg      |  说明 |
| ------------- | :-----------: | ----: |
| 200100      | 邮件频率限制30秒/封 | 需要限制发送频率或复用之前的请求 |
| 200101      |   邮箱不正确    |   检查邮箱地址是否正确 |
| 200104 |   邮箱黑名单    |    该邮箱已被封禁 |

:::




