# 账户余额结余
::: tip 权限组 `VIP` 路径ID `24` 方法ID `02`
请求域：vip.youloge.com 请求头：`Signer:signer`

作用域：`wallet`  方法名: `balance`

错误编号：`2402 00` 频率限制: `10` 
:::

> 余额 货币符号为`#` 货币单位为`哈希 hash` 货币缩写为`RGB` 全称为`Red Green Blue` 灵感来自三原色

> 哈希对标法定货币为`人民币` 换算为 `￥1.00 CNY == #1.00 RGB`

### 请求代码
``` http
POST /wallet HTTP/1.1
Host: vip.youloge.com
Lang: zh-CN
Content-Type: application/json
Signer: {{Signer}}
{
  "method": "balance",
  "params": {}
}
```
### 响应代码
``` json
{
  "err": 200,
  "msg": "获取成功",
  "data": {
    "int": 158,
    "rgb": "1.58",
    "usd":"0.0048",
    "hkd":"0.1245",
    "cny":"1.5800",
  }
}
```
### 错误代码
``` json
{
  "err": 240200,
  "msg": "IP地址不正确"
}
```

::: details 其他错误码

| 错误err        |      描述msg      |  说明 |
| ------------- | :-----------: | ----: |
| 240200      | IP地址不正确 | 绑定的IP地址不正确 |
:::




