# Youloge.PLUS 独立JS组件

> * 前端开放服务，可以快速集成`人机验证` + `登录注册` `转账支付` `视频点播` 服务。
> * 先到 [任意开发者管理后台-apikey](https://www.youloge.com) 获取一对加解密密钥(`ukey/secret`)。
> * [PLUS项目开源](https://github.com/youfeed/youloge.plus)，欢迎提交PR，或者提交Issue。

### [💡 ⚡️ 🛠️ 📦 🔩 🔑 - 接口来源-开放API文档 ](https://youfeed.github.io/plus)


> - 建议直接引入CDN 即可使用  `2.18 kB │ gzip: 1.07 kB`
> - `https://unpkg.com/youloge.plus`或者`https://cdn.jsdelivr.net/npm/youloge.plus`
> - 主动调用 `youloge.plus.METHOD(config)`方法，通过`.then`和`.catch`接收回调,可添加`.listener` 监听变化

#### 更新日志

- 1.0.6 修复`selector`设置错误情况下走`弹窗式`遮罩层不会关闭问题
- 1.0.5 统一风格`ukey 初始化` + `selector` 支持内嵌式渲染
- 0.0.9 前置服务`captcha`人机验证，归入到`匿名账户`体系
- 0.0.2 增加`sso`单点登录服务
- 0.0.1 初始化项目 构建逻辑 统一模块

### 开始使用
#### 初始化
```js
let PLUS = youloge.plus({
  ukey:'', // 必填*用于加密数据区分开发者
});
```
#### 弹窗式 & 内嵌式
- selector：`null 0 false undefined`为否时则为`弹窗式`
- selector：当前只渲染第一个div容器，如果需要内嵌多个 需要多次调用
- selector：`div 选择器时`配置参数优先从 `data-*=""`上选取且会覆盖`js 初始参数`

``` js
// METHOD => 取值参考下文
PLUS.METHOD({
  selector:'#id' // 只取查询到的第一个`Element`
  // 其他配置参数
}).listener(data=>{
  // 监听事件(流程尚未结束)(可选项) * 在`then catch`之前添加监听
}).then(res=>{
  // 处理成功(流程结束)
}).catch(err=>{
  // 处理失败(流程结束)
})
```

---
## 人机验证服务 `METHOD`=`captcha`  {#captcha} 
- 独立组件代码地址：[源码：youloge.open > src > captcha](https://github.com/youfeed/youloge.open/tree/main/src/captcha)
- 人机验证通过返回的`signature`只能开发者自己解密
- 解密有一个`singer`参数，可以临时作为`匿名用户`调用`vip接口`
- `captcha解密出来的singer` 有效期为`300秒`，过期后需要重新调用
- `匿名用户`可以调用其他服务：例如发布`匿名评论` `匿名发布文章等`
- `匿名用户`的发表作品权重很低：不会被纳入搜索引擎且删除不需要其他`开发者审核`
- `匿名用户`的虚拟邮箱为`null@youloge.com(假的)`昵称为`匿名用户`uuid为`YQasfalskfjklwklahskfhw`
- 不要给`匿名用户`转账：等同于赞助了

> 关于`匿名用户`的生成方式还可以使用开发者`singer`代替,如果你自己实现人机验证的话

``` js
PLUS.captcha({
  "state":"string < 64", // 自定义参数 用过通过人机验证后会写入在`signature`中
}).then(res=>{ 
  // 成功(流程结束)
})
// 成功返回`signature` 通过解密可以获得`captcha`参数，该参数用于对接验证服务(单次)
```

## 单点登录服务 `METHOD`=`sso` {#sso} 
- 独立组件代码地址：[源码：youloge.open > src > captcha](https://github.com/youfeed/youloge.open/tree/main/src/sso)
- `uuid` 是唯一的且使用不同的`ukey`获取同一个用户 `uuid`都是一样的
- `signature`可以解密出`uuid:用户ID expire:过期时间 singer:用户凭证`7200秒，3小时
- `secret` 专门用来刷新凭证`7天有效`,过期必须手动登录再次刷新。
- 开发者凭证也是该接口：(Ukey和Ukey的邮箱是同一人，即视为开发者)

``` js
PLUS.sso({
  "close":Bloom, // 
}).then(res=>{
  // 登录成功
})
// 返回的数据前端可以直接展示
```

## 账户渠道充值 `METHOD`=`pay` 
- 独立组件代码地址：[源码：youloge.open > src > pay](https://github.com/youfeed/youloge.open/tree/main/src/pay)
- 平台货币为:`#1.00RGB ≈ ¥1.0001CNY ≈ $0.1372USD` 灵感来源于`css颜色数值`;
- 可指定金额
- 可指定渠道
- 可指定用户
- `渠道充值`与`收银台付款`是二个不同的服务：用户充值只能用于`消费 购物 打赏`，不支持`提现`

``` js
PLUS.pay({
  "close":Bloom, // 
}).then(res=>{
  // 登录成功
})
// 返回的数据前端可以直接展示

```

##  收银台付款服务 `METHOD`=`payment`
- 独立组件代码地址：[源码：youloge.open > src > payment](https://github.com/youfeed/youloge.open/tree/main/src/payment)
- 平台货币为:`#1.00RGB ≈ ¥1.0001CNY ≈ $0.1372USD` 灵感来源于`css颜色数值`;
- 任意用户付款给开发者：`非点对点收款`
- *支付人*和当前*登录用户*是没有关系的，当前用户可能使用其他账户支付
- 只有`local`支付订单号，是你确认支付唯一的凭证
- 详细支付流水 在后台`apikey`下可查看时间，来源，IPV4
- `点对点收款 即指定用户付款`直接用户登录状态下：调用支付API即可。
- 开发者收款经过`>T+3 +7 +15`按比例`提现 > 0.6% 0.8% 3% 5%`(配合平台做纳税,实名认证)

``` js
PLUS.payment({
  "local":String "*", // 本地订单号 支付成功原样返回
  "money":Number "*", // 整数金额 100 => #1.00RGB
  "close":Bloom, // 可选参数
}).then(res=>{ 
  // 成功(流程结束)
})
//  `本地订单号` 自己维护网站的sku和用户的关系根据本地订单号。
//  `signature` 解密出的字符串 `官方订单号#本地订单号#支付人UUID#实际支付金额#支付时间` 使用 `JSON`字符串

```

## 关于数据校验解密

`ukey` - 暴漏给前端,用于调用各种开发服务

`secret` - 专门用于后端`AES-256-CBC * 2`解密(固定IP服务端解密使用`不要暴漏`)

`signature` 后端通过解密`signature`可以获取`JSON`字符串格式数据

-  解密参考 算法使用`AES-256-CBC * 2`
-  signature 前16字节为 iv 
-  secret 00-32字节为 key_one
-  secret 16-32字节为 key_two

``` php
public function signature_decrypt($signature,$secret='')
{
  $key = base64_decode($secret);
  $bin = base64_decode($signature);$iv = substr($bin,0,16);$str = substr($bin,16);
  $one = openssl_decrypt($str,'AES-256-CBC',substr($key,0,32),1,$iv);
  $two = openssl_decrypt($one,'AES-256-CBC',substr($key,32,64),1,$iv);
  return json_decode($two,true);
  // JSON参数根据不同的方法解出来数据不同
}
```

> 但行好事 莫问前程