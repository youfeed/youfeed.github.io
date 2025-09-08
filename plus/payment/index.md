# 快捷支付组件 `C2B`

::: warning  快捷支付组件服务
可以快速发起转账功能，
请注意资金安全
:::

> Youloge支付交易：货币符号为`#`(读作`hash /hæʃ/`) 货币单位位`RGB`(全称`Red Green Blue`即`红绿蓝三原色`) 货币精度为`2`位小数,

::: info <Badge type="info" text="usePayment" />
- 1. 网页端：调用`usePayment函数`发起支付请求
- 2. 支付网关：用户获取`支付码`-`验证支付码`-`签发 支付签名`
- 3. 同步通知：开发者`解密 支付签名`->提取`网关 方法 参数 签名`->请求`VIP接口`
- 4. 同步返回：`支付网关`根据`同步通知`返回结果，反馈给用户支付结果。
:::

#### 开始使用
```js
let PLUS = youloge.plus();
PLUS.usePayment({
  selector:'#',
  mail:'11247005@qq.com', 
  mode:'profile',
  uuid:'10003',
  money:0, // 可选* 仅在个人对个人转账时有效
  local:'no.123456789',
  notify:'https://www.youloge.com/notify',
}).then(res=>{
  // 支付成功
}).catch(err=>{
  // 支付失败
})
```

#### 参数说明

| 参数名  |  值  |  说明 | 
| ------------- | :-----------: | :-----------: |
| selector |	class选择器	| 为空或找不class则全屏 |
| mail |	付款账号	| 任意有效邮箱：付款人 |
| mode |	模块选择	| `profile`,`drive`,`goods`,`movie`... |
| uuid |	模块编号	| 模块产品UUID |
| money? |	付款金额	| 可选指定金额`profile模块时有效` |
| local |	本地单号	| 自定义订单号  |
| notify |	同步通知地址	| `https`有效地址 |

#### 模块参数说明 [`mode`]

| 参数值  |  描述  |  备注 | 
| ------------- | :-----------: | :-----------: |
| profile |	个人付款	| 用于个人对个人转账 |
| drive |	云盘支付	| 用于个人对服务/商品转账 |
| goods |	商品支付	| 用于个人对商品转账 |
| movie |	电影支付	| 用于个人对电影转账 |
...
---

#### 处理步骤一：同步通知 

> 用户验证支付码之后：会`同步通知`到你的`notify`地址，你需要在`notify`地址中验证支付结果
```http
POST / HTTP/1.1
Host: {{notify}}
Organization: {{APIKEY}}
Authorization: {{access_token}}
Content-Type: application/json
{
  "method": "payment.notify",
  "params": {
    "uuid":"", // 支付单号
    "signature":"*************" // 真实支付内容
  }
}
```
#### 处理步骤二：解密签名(`signature`)注意`此时尚未完成支付*`
> 解密签名后得到的`JSON`字符串格式数据
```js
{
    "uuid": "",
    "local": "",
    "money": 1,
    "profile": {
        "uuid": "",
        "mail": ""
    },
    "routed": "wallet",
    "method": "verify",
    "params": {
        "payment": "fQC1Wj0tcoa24UnA8g8ubI6Xj79wLsz3CjH******"
    },
    "signer": "ju4hAxg57fL+MZXf2zNw+KrrlL3b*******",
    "expire": 1696702044
}
```
- 1. 你的服务端对`signature`进行解密
- 2. 验证参数，`核对金额：money` `本地单号：local` `付款人：profile`
- 3. 验证正确：提取出`routed`,`method`,`params`,`signer` 对`VIP接口`发起`实时支付确认`
- 4. 根据支付确认，返回`200`或者`400`支付结果

### 处理步骤三：支付确认 `此步骤仅一次有效，称为[冲单]`

> 支付确认仅一次有效：不可重复调用，须在`10秒内完成`

```http
POST /{{routed}} HTTP/1.1
Host: vip.youloge.com
Content-Type: application/json
signer: {{signer}}
{
  "method": "{{routed}}",
  "params": {{params}}
}
```
> VIP接口返回：支付成功 {"err":200,"msg":"确认成功"} err 为其他参数则为确认失败


### 支付保存

- 确认支付后订单有效，支付有效
- `profile`用户转账模块，查看资金流水即可
- `drive`,`movie` 推广购买模块，查看提成流水即可
- `goods`商品购买模块，商家端可查看到`发货信息或收货邮箱等信息`
- `推广支付`查询查看提成流水即可(确认收货提成延后到账)

### 支付说明

开发者网站前端配置支付参数，调用支付组件；支付组件验证用户支付码后，会本地调用通知接口网址，开发者进行确认支付参数与配置参数一致验证，开发者验证参数一致，则进行请求VIP接口进行确认支付，VIP接口收到确认支付参数后会进行资金划扣；划扣完成后返回{"err":200};开发者在确认资金划扣完成后，通知接口同样返回{"err":200},支付组件收到支付成功则展示支付成功页面。

注意：如果开发者通知接口不进行`支付确认(冲单)`而是直接返回`{"err":200}`，支付组件也会展示支付成功页面(会赞成支付错觉，资金不到位，服务不可达)


- 个人对个人实时到账(无手续费)
- 个人对服务/商品延迟到账(N+N)有手续费
- 个人对开发者(赏金结算24小时)无手续费