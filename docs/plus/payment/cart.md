# Youloge.Cart 购物车组件

::: info
购物车支付，内嵌地址选择器，邮箱输入，身份证输入，手机号输入；用于复杂场景支付

- Youloge商城，商品元数据(SPU)由官方提供与维护;
- 商户/开发者 维护商品下的套餐与库存(SKU)
:::


> Youloge支付交易：货币符号为`#`(读作`hash /hæʃ/`) 货币单位位`RGB`(全称`Red Green Blue`即`红绿蓝三原色`) 货币精度为`2`位小数,

::: info <Badge type="info" text="useCart" />
- 1. 网页端：调用`useCart函数`发起支付请求
- 2. 支付网关：用户获取`支付码`-`验证支付码`-`签发 支付签名`
- 3. 同步通知：开发者`解密 支付签名`->提取`网关 方法 参数 签名`->请求`VIP接口`
- 4. 同步返回：`支付网关`根据`同步通知`返回结果，反馈给用户支付结果。
:::


#### 开始使用
```js
let PLUS = youloge.plus();
PLUS.useCart({
  selector:'',
  // 付款对象
  payer:{
    uuid:'10002' // 用户UUID
  },
  // 收款对象
  payee:{
    type:'goods', // 默认商品类型
    uuid:'' // 商品的UUID
  },
  // 套餐的UUID可多个,至少需要一个
  combos:[],
  // 本地订单号 
  local:'no.123456789',
  // 附加订单备注 - 
  attach:'', 
  // 同步通知接口
  notify:'https://www.youloge.com/notify',
}).then(res=>{
  // 支付成功
}).catch(err=>{
  // 支付失败
});
```

#### 填充参数说明 [`required.[]`]

| 参数值  |  描述  |  备注 | 
| ------------- | :-----------: | :-----------: |
| type |	填充类型	| 收货信息 address 手机号 mobile 身份证 idcard 邮箱 email |
| value |	预设数据	| 不同填充类型 所需的数据格式有所区别 |
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
    "expire", // 过期实际戳 一般10秒 请及时消费
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
    "attach": "",
    "payer": {
        "uuid": "",
    },
    "payee": {
        "type":"goods",
        "uuid": "",
    },
    "combos":[
      {
        "uuid":"122",
        "amount":"12.00",
        "quantity":"2"
      }
    ],
    "money": {
        "symbol": "RGB",
        "amount": "52.00", // 最终金额
    },
    "routed": "wallet",
    "method": "verify",
    "params": {
        "payment": "fQC1Wj0tcoa24UnA8g8ubI6Xj79wLsz3CjH******"
    },
    "access_token": "ju4hAxg57fL+MZXf2zNw+KrrlL3b*******",
    "expire": 1696702044
}
```
- 1. 你的服务端对`signature`进行解密
- 2. 验证参数，`核对金额：money` `本地单号：local` `付款人：profile`
- 3. 验证正确：提取出`routed`,`method`,`params`,`access_token` 对`VIP接口`发起`实时支付确认`
- 4. 根据支付确认，返回`200`或者`400`支付结果

### 处理步骤三：支付确认 `此步骤仅一次有效，称为[冲单]`

> 支付确认仅一次有效：不可重复调用，须在`10秒内完成`, 这个`access_token`是临时授权，

```http
POST /{{routed}} HTTP/1.1
Host: vip.youloge.com
Content-Type: application/json
Organization: {{APIKEY}}
Authorization: {{access_token}}
{
  "uuid": "",
  "payment":"fQC1Wj0tcoa24UnA8g8ubI6Xj79wLsz3CjH******"
}
```
> VIP接口返回：支付成功 {"err":200,"msg":"确认成功"} err 为其他参数则为确认失败


### 支付保存
- `required`内容
- `goods`商品购买模块，商家端可查看到`发货信息或收货邮箱等信息`
- `推广支付`查询查看提成流水即可(确认收货提成延后到账)