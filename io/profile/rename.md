# 修改昵称
::: tip 权限组 `VIP` 路径ID `21` 方法ID `03`
请求域：vip.youloge.com 请求头：`Signer:signer`

作用域：`profile`  方法名: `rename`

错误编号：`2103 00` 频率限制: `10` 
:::

> 平台收集的信息非常少：目前只有 修改昵称 更换头像二个接口

### 请求代码
``` http
POST /profile HTTP/1.1
Host: vip.youloge.com
Lang: zh-CN
Content-Type: application/json
Signer: {{Signer}}
{
  "method": "rename",
  "params": {
    "name":"name"
  }
}
```
### 响应代码
``` json
{
  "err": 200,
  "msg": "修改成功",
  "data": {
    "name":"Y_ADSJKI54",
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




