# 用户获取个人信息
::: tip 权限组 `VIP` 路径ID `21` 方法ID `01`
请求域：vip.youloge.com 请求头：`Authorization:Youloge-VIP {Signer}`

作用域：`profile/info`

错误编号：`2101 00` 频率限制: `10` 
:::

> 这是`VIP接口`获取的完整的用户个人信息

### 请求代码
``` http
POST /profile/info HTTP/1.1
Host: vip.youloge.com
Lang: zh-CN
Content-Type: application/json
Authorization:Youloge-VIP {Signer}
{
}
```
### 响应代码
``` json
{
  "err": 200,
  "msg": "获取成功",
  "data": {
    "uuid": "uuid",
    "mail":"123456@qq.com",
    "name":"Y_ADSJKI54",
    "avatar":"avatarURL",
    "created":"2023-08-17 03:17:05",
    "updated":"2023-08-17 03:17:05"
  }
}
```
### 错误代码
``` json
{
  "err": 210100,
  "msg": "未知错误"
}
```

::: details 其他错误码

| 错误err        |      描述msg      |  说明 |
| ------------- | :-----------: | ----: |
| 220100      | 未知错误 | 未知错误 |
:::




