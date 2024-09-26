# 快速购物结算组件 `C2B`

> 统一支付组件：

::: info <Badge type="info" text="usePayment" />
- 网页端：调用`usePayment函数`发起支付请求
- 支付网关：用户获取`支付码`-`验证支付码`-`签发 支付签名`
- 同步通知：开发者`解密 支付签名`->提取`网关 方法 参数 签名`->请求`VIP接口`
- 同步返回：`支付网关`根据`同步通知`返回结果，反馈给用户支付结果。
:::

```js
usePayment({
  selector:'#',
  mail:'11247005@qq.com', 
  local:'123456789',
  notify:'https://www.youloge.com/notify',
  money:1
}).then(res=>{

})
```
| 参数名  |  值  |  说明 | 
| ------------- | :-----------: | :-----------: |
| selector |	class选择器	| 为空或找不class则全屏 |
| mail |	付款账号	| 任意有效邮箱：付款人 |
| mode |	模块选择	| `profile`,`drive`,`goods`,`movie`... |
| uuid |	模块编号	| 模块产品UUID |
| money |	付款金额	| 可选指定金额 |
| local |	本地单号	| 自定义订单号  |
| notify |	同步通知地址	| `https`有效地址 |

#### 同步通知 

> 用户验证支付码之后：会`同步通知`到你的`notify`地址，你需要在`notify`地址中验证支付结果
```http
POST / HTTP/1.1
Host: {{notify}}
Content-Type: application/json
{
  "method": "notify",
  "params": {
    "uuid":"", // 支付单号
    "signature":"*************"
  }
}
```
#### 解密签名
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
- 2. 验证参数，核对金额 单号 付款人
- 3. 提取出`routed`,`method`,`params`,`signer` 对VIP接口发起支付确认
- 4. 根据支付确认，返回`200`或者`400`支付结果

### 支付确认

> 支付确认仅一次有效：调试时候金额低于 `#0.10RGB` 即 `money:10`一般不收取手续费
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
> 支付成功 {"err":200,"msg":"确认成功"} err 为其他参数则为确认失败




