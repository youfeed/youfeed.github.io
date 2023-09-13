# 资金充值
::: tip 权限组 `VIP` 路径ID `24` 方法ID `03`
请求域：vip.youloge.com 请求头：`Signer:signer`

作用域：`wallet`  方法名: `deposit`

错误编号：`2403 00` 频率限制: `10` 
:::

> 余额 货币符号为`#` 货币单位为`哈希 hash` 货币缩写为`RGB` 全称为`Red Green Blue` 灵感来自三原色

> 积分对标法定货币为`人民币` 换算为 `￥1.00 CNY == #1.00 RGB`

### 请求代码
- amount 充值金额为`整数`  充值`100` = `#1.00RGB` = `￥1.00CNY`
- type 充值方式 支付宝：`alipay` 微信：`wxpay` 
``` http
POST /wallet HTTP/1.1
Host: vip.youloge.com
Lang: zh-CN
Content-Type: application/json
Signer: {{Signer}}
{
  "method": "deposit",
  "params": {
    "amount":"100",
    "type":"alipay" // wxpay applepay gpay  
  }
}
```
### 响应代码
- 返回`qrcode` 可用于扫码支付
- 返回`url` 可用于浏览器支付
``` json
{
  "err": 200,
  "msg": "获取成功",
  "data": {
    "uuid": "uuid",
    "qrcode": "1.58",
    "url":"0.0048",
    "expire":"0.1245",
    "amount":"0.0048",
  }
}
```
### 错误代码
``` json
{
  "err": 240300,
  "msg": "IP地址不正确"
}
```

::: details 其他错误码

| 错误err        |      描述msg      |  说明 |
| ------------- | :-----------: | ----: |
| 220100      | IP地址不正确 | 绑定的IP地址不正确 |
:::




