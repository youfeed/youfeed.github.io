# Youloge.PLUS 嵌入式小组件

::: info
组件widget 涉及到跨域问题，以及作用域安全问题，源代码供开发者参考。可以自行编译整合到自己的服务

- 组件网址:[open.youloge.com](https://open.youloge.com)
- 备用网址:[open.jakebuda.com](https://open.jakebuda.com)
:::
嵌入式小组件`通过组合API接口`可以快速嵌入到你的项目中，实现快速开发。每个小组件都利用了多个接口，开发者只需关注接口开发即可：

组件代码开源：原理都是通过使用`iframe标签`和`Postmessage跨域通信`。代码`仅<5KB`使用方便

### 准备工作

> * 前端开放服务，可以快速集成`人机验证` + `登录注册` `转账支付` `视频点播` 服务。
> * 先到 [管理后台-apikey](https://www.youloge.com) 获取一对加解密密钥(`apikey/secret`)。
> * 或者 [开放接口-apikey](/io/apikey/debug) 获取一对调试密钥(`apikey/secret`)。


### CDN引入

> - 建议直接引入CDN 即可使用  `2.18 kB │ gzip: 1.07 kB`
> - `https://unpkg.com/youloge.plus`或者`https://cdn.jsdelivr.net/npm/youloge.plus`
> - 主动调用 `youloge.plus.METHOD(config)`方法，通过`.then`和`.catch`接收回调,可添加`.emit` 监听变化

#### 更新日志

- 1.0.6 修复`selector`设置错误情况下走`弹窗式`遮罩层不会关闭问题
- 1.0.5 统一风格`apikey 初始化` + `selector` 支持内嵌式渲染
- 0.0.9 前置服务`captcha`人机验证，归入到`匿名账户`体系
- 0.0.2 增加`sso`单点登录服务
- 0.0.1 初始化项目 构建逻辑 统一模块


### 小组件有哪些
- [单点登录](/plus/login/) 
- [人机验证](/plus/captcha/)
- [认证授权](/plus/authorize/)
- [转账支付](/plus/payment/)
- 推广赏金 promote 


### 开始使用
#### 初始化
```js
let PLUS = youloge.plus({
  APIKEY?:string, // 可选* 如果指定则优先使用该`APIKEY`
});
// 初始化后会自动从`sessionStorage.youloge<Object>`中获取`APIKEY`(大写) 
// 运行时会自动从`localStorage.profile<Object>`中获取`access_token`(小写) 
```
#### 弹窗式 & 内嵌式 二种渲染方式
- selector：`null 0 false undefined`为否时则为`弹窗式`
- selector：`当使用ID,Class选择器时` 只渲染第一个div容器，如果需要内嵌多个 需要多次调用
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



## 关于数据校验解密

`apikey` - 暴漏给前端,用于调用各种开发服务

`secret` - 专门用于后端`AES-256-CBC ^ 2`解密(固定IP服务端解密使用`不要暴漏`)

`signature` 后端通过解密`signature`可以获取`JSON`字符串格式数据

-  解密参考 算法使用`AES-256-CBC ^ 2`
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
  // JSON结构 使用不同的方法解出来数据不同
}
```


> 但行好事 莫问前程
> * [Youloge.PLUS项目开源](https://github.com/youfeed/youloge.plus)，欢迎提交PR，或者提交Issue，如果你可以提交PR最好啦
