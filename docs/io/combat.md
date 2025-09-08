# 开发实践

::: warning 通过`Youloge.RPC协议`+`APIKEY`进行通信 接口全球加速
- https://api.youlogue.com 官方开放接口 可以跨域调用：一般用于获取基础数据
- https://vip.youlogue.com 官方私密接口 必须固定IP调用：开发者/管理员使用
:::

---

::: danger 用户 = 开发者 = 管理员 (所有数据共享，用户共享，权限相同)
- 用户：游客通过任意开发者的`登录`接口进行登录
- 开发者：使用`apikey`绑定的IP服务器调用`VIP`接口视为`开发者`
- 管理员：开发者使用`apikey`调用`DEV`接口时`Singer`与`apikey`的邮箱一致视为`管理员`
:::

> `开发者`可以视为代理请求服务商

> `管理员`拥有`审核` `封禁`处理`工单`等等高级权限


### 网站前台

::: info <Badge type="info" text="www.youloge.com" />
- 接口：基本用到了全部接口
- 功能：综合门户展示服务
- 参考：[Github](https://github.com/youfeed/youloge.com) [NPM](https://github.com/youfeed/youloge.com)
:::

### 快捷登录

::: info <Badge type="info" text="open.youloge.com/sso" />
- API接口：[code](./login/code)[login] [verify](./login/verify)[login] [refresh](./login/verify)[login] [authorize](./login/verify)[login]
- VIP接口：无
- 功能：封装一个弹窗iframe组件，实现弹窗登录，支持快捷登录。支持友好
- 参考：[Github](https://github.com/youfeed/youloge.sso) [NPM](https://github.com/youfeed/youloge.sso)
:::

### 快捷充值

::: danger <Badge type="info" text="open.youloge.com/pay" /> 由于支付需要绑定域名后续后提供`Native`方式
- API接口：[info](./login/verify)[profile] [payment](./login/code)[wallet] 
- VIP接口：无
- 功能：自动识别微信/支付宝客户端来进行充值[JSAPI]方式
- 参考：[Github](https://github.com/youfeed/youloge.sso) [NPM](https://github.com/youfeed/youloge.sso)
:::

### 快捷支付

::: info <Badge type="info" text="open.youloge.com/payment" />
- API接口：[info](./login/verify)[profile]
- VIP接口：[code](./login/code)[wallet] [verify](./login/verify)[wallet]
- 功能：对用户进行收款-收款积分余额直接进入开发者账户
- 参考：[Github](https://github.com/youfeed/youloge.sso) [NPM](https://github.com/youfeed/youloge.sso)
:::
### 礼品卡(支持转赠)

::: info <Badge type="info" text="open.youloge.com/gift" />
- API接口：[info](./login/verify)[profile]
- VIP接口：[code](./login/code)[gift] [verify](./login/verify)[gift]
- 功能：用户购买礼品卡，并赠送给好友/家人(以数字礼品卡方式发送到邮箱)
- 参考：[Github](https://github.com/youfeed/youloge.sso) [NPM](https://github.com/youfeed/youloge.sso)
:::

::: info <Badge type="info" text="open.youloge.com/gift" />
- API接口：无
- VIP接口：[info](./login/verify)[gift] [code](./login/code)[gift] [verify](./login/verify)[gift]
- 功能：兑换礼品卡(非兑换不要请求兑换查询API，系统会记录每一次访问并公开)，直接到账兑换账户
- 参考：[Github](https://github.com/youfeed/youloge.sso) [NPM](https://github.com/youfeed/youloge.sso)
:::

> 礼品卡是二套独立的服务，`购买`和`兑换`，赠送给别人，别人可以把`数字礼品卡`送给其他人。


### 云盘网页服务

::: info <Badge type="info" text="youloge.com/drive" />
- API接口：[info](./login/verify)[drive] 
- VIP接口：[download](./login/code)[drive] [code](./login/code)[wallet] [verify](./login/verify)[wallet]
- 功能：网赚云盘资源展示环节(云盘资源有分成4-20%/每笔)
- 参考：[Github](https://github.com/youfeed/youloge.sso) [NPM](https://github.com/youfeed/youloge.sso)
:::


