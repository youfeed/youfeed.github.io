# 同步资料和续期用户
::: tip 权限组 `API` 路径ID `20` 方法ID `03`
请求域：api.youloge.com 请求头：`Ukey:ukey`

作用域：`login`  方法名: `refresh`

错误编号：`2003 00` 频率限制: `10` 
:::

> `secret`一般3-7天有效，颁发时间于当前时间相差2小时，都会颁发新的.
> `secret` 新旧`secret` 同时存在且不限制数量
> 返回值与`verify` 一致

### 请求代码
``` http
POST /login HTTP/1.1
Host: api.youloge.com
Lang: zh-CN
Content-Type: application/json
ukey: {{Ukey}}
{
  "method": "refresh",
  "params": {
    "secret": "DcQlwu6o7hWu+JNyP******"
  }
}
```
### 响应代码
``` json
{
  "err": 200,
  "msg": "续期成功",
  "data": {
    "uuid": "uuid",
    "mail":"123456@qq.com",
    "name":"Y_ADSJKI54",
    "avatar":"avatarURL",
    "created":"2023-08-17 03:17:05",
    "updated":"2023-08-17 03:17:05",
    "secret": "DcQlwu6o7hWu+JNyP******",
    "expire": 1692210923
  }
}
```
### 错误代码
``` json
{
  "err": 200300,
  "msg": "secret与ukey不匹配"
}
```



::: details 其他错误码

| 错误err        |      描述msg      |  说明 |
| ------------- | :-----------: | ----: |
| 200300      | secret与ukey不匹配 | 使用自己的ukey刷新 |
| 200301      |   secret已过期    |  建议本地先预检`expire` |

:::




