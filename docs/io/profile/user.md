# 修改用户
::: tip 权限组 `VIP` 路径ID `21` 方法ID `03`
请求域：vip.youloge.com 请求头：`Authorization:Youloge-VIP {Signer}`

作用域：`profile/user`

错误编号：`2103 00` 频率限制: `10` 
:::

> user字段用于`@user`不可重复，全平台唯一

### 请求代码
``` http
POST /profile/user HTTP/1.1
Host: vip.youloge.com
Lang: zh-CN
Content-Type: application/json
Authorization:Youloge-VIP {Signer}
{
  "user":"user",
}
```
### 响应代码
``` json
{
  "err": 200,
  "msg": "修改成功",
  "data": {
    "user":"user",
    "updated":"2023-08-17 03:17:05"
  }
}
```
### 错误代码
``` json
{
  "err": 210300,
  "msg": "未知错误"
}
```

::: details 其他错误码

| 错误err        |      描述msg      |  说明 |
| ------------- | :-----------: | ----: |
| 210300      | 未知错误 | 未知错误 |
:::




