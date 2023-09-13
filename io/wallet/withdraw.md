# 开发者账户提现
::: tip 权限组 `VIP` 路径ID `24` 方法ID `10`
请求域：vip.youloge.com 请求头：`Signer:signer`

作用域：`wallet`  方法名: `withdraw`

错误编号：`2410 00` 频率限制: `10` 
:::

### 开发者须知

> 开发者提现渠道:`使用APIKEY+开发者邮箱登录的账户Signer调用该接口`才算是开发者
- 开发者账户下全部`APIKEY`的收益经过`T+7`之后可提现
- 开发者账户提现到支付宝账户(如何和开发者邮箱相同免验证)
- 开发者资金流转一般需要配合`纳税``实名``网安`等审核

> 开发者可以从那些渠道获取收益
- 用户转账到开发者账户(自己的网站实现收款并提供服务)
- 开发者网站实现`云盘`,`视频`,`推广`等页面的展示服务(用户通过你的APIKEY和后台都算)
- 给官网`github`提交`pull`,`issue`得到采纳的奖励



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
  "method": "withdraw",
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




