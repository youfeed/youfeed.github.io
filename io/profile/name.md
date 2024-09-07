# 修改昵称
::: tip 权限组 `VIP` 路径ID `21` 方法ID `03`
请求域：vip.youloge.com 请求头：`Authorization:Youloge-VIP {Signer}`

作用域：`profile/name`

错误编号：`2103 00` 频率限制: `10` 
:::

> name字段用于`用户昵称展示`可以重复，不做唯一性校验

### 请求代码
``` http
POST /profile/name HTTP/1.1
Host: vip.youloge.com
Lang: zh-CN
Content-Type: application/json
Authorization:Youloge-VIP {Signer}
{
  "name":"name",
}
```
### 响应代码
``` json
{
  "err": 200,
  "msg": "修改成功",
  "data": {
    "name":"name",
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




