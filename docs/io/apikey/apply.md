# 用户申请APIKEY
::: tip 权限组 `VIP` 路径ID `22` 方法ID `01`
请求域：vip.youloge.com 请求头：`Signer:signer`

作用域：`apikey`  方法名: `apply`

错误编号：`2201 00` 频率限制: `10` 
:::

> 完整的`apikey`密钥组`uuid`,`Ukey`,`Secret`和`ip`会通过邮箱发送给用户。

> 其中`Ukey`前端使用，`Secret`只能后端解密使用且只能指定`白名单IP` 使用


### 请求代码
``` http
POST /apikey HTTP/1.1
Host: vip.youloge.com
Lang: zh-CN
Content-Type: application/json
Signer: {{Signer}}
{
  "method": "apply",
  "params": {
    "address":"114.114.114.114",
  }
}
```
### 响应代码
``` json
{
  "err": 200,
  "msg": "APIKEY申请成功",
  "data": {
    "uuid": "DcQlwu6o7hWu+JNyP******",
    "ukey": "DcQlwu6o7hWu+JNyP******"
  }
}
```
### 错误代码
``` json
{
  "err": 220100,
  "msg": "IP地址不正确"
}
```

::: details 其他错误码

| 错误err        |      描述msg      |  说明 |
| ------------- | :-----------: | ----: |
| 220100      | IP地址不正确 | 绑定的IP地址不正确 |
:::




