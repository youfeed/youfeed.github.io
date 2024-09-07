# 授权登录登录(允许授权给任意Ukey)
::: tip 权限组 `API` 路径ID `20` 方法ID `10`
请求域：api.youloge.com 请求头：`Authorization:Youloge-API {ukey}`

作用域：`login/authorize`

错误编号：`2010 00` 频率限制: `10` 
:::

> `signertrue`可以作为你自己项目的用户`已登录token`进行使用

> 关于`signertrue`的详细介绍请查看[signertrue]-(/signertrue/signertrue)


### 请求代码
``` http
POST /login HTTP/1.1
Host: api.youloge.com
Lang: zh-CN
Content-Type: application/json
authorization:Youloge-API {ukey}
{
  "expiry":"",
  "ticket": "DcQlwu6o7hWu+JNyP******"
}
```
### 响应代码
``` json
{
  "err": 200,
  "msg": "授权成功",
  "data": {
    "signertrue": "DcQlwu6o7hWu+JNyP******",
    "expire": 1692210923
  }
}
```
### 错误代码
``` json
{
  "err": 201000,
  "msg": "secret已过期"
}
```

::: details 其他错误码

| 错误err        |      描述msg      |  说明 |
| ------------- | :-----------: | ----: |
| 201000      | secret已过期 | 重新登录 |
| 201001      |   开发者封禁    |   更换开发者Ukey |
| 201002 |   Ukey错误    |    检查Ukey格式 |
| 201003 |   expiry过期配置错误  |   默认2小时 10-86400(24小时) 单位/秒 |


:::




