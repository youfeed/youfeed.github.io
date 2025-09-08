# Youloge.CORS 跨域通信协议

> iframe跨域通信(postMessage) [Window: postMessage() method](https://developer.mozilla.org/en-US/docs/Web/API/Window/postMessage)

> 跨域，简单来说是指不同域之间相互请求资源，例如AJAX请求，浏览器根据同源策略对响应结果进行拦截，这是浏览器对JavaScript实施的安全限制。所谓同源是指相同的域名、协议和端口，只要其中一项不同就为跨域 

## 平台前端大量用到跨域通信：以下为平台所约定的通信协议方式方法
调用方式 只有下面二句，注意`childWindow`和`window` 是谁在调用，他是指向对方的!!!
``` js
// 父窗口
childWindow.postMessage('Hello World!',  'https://bbb.com')

// 子窗口
window.addEventListener('message', function (e) {
  e.origin // 父窗口的域名
  e.source // 父窗口的window对象
  e.data // 传输的数据
})
```

我们假设 `页面A` 内嵌了 `页面B`, A:是你的网站，B:是 `Youloge.open/sso`开放的单点登录小组件

##### 1. 用户打开你的网页->网页内嵌`iframe`打开网页

``` html
<!doctype html>
<html lang="en">
  <head>
    <title>页面A</title>
  </head>
  <body>
    <div id="app">
      // ① 网页内嵌iframe打开网页
      <iframe id="iframe" src="https://open.youloge.com/sso#hash" frameborder="0" scrolling></iframe>
    </div>
    <script>
      let hash = Math.random().toString(32);
      // ③ 接收事件消息
      window.addEventListener('message', ({origin,data,source})=>{ 
        let {method,params} = data[hash] || {}; // hash 是自己配置的 iframe src # 后面的参数
        // 判断数据格式 和 过滤来源
        if(referrer.startsWith(origin) && method){
          if(method == 'ready'){
            // ④ 执行初始化参数传递
            source.postMessage({method:'init',params:{ukey:'ukey',...}},origin)
          }
          if(method == 'success'){
            // 登录成功
          }
        }
      })
    </script>
  </body>
</html>
```
##### 2. 登录网页执行JS脚本(iframe是隔离的二个不同环境)
``` html
<!doctype html>
<html lang="en">
  <head>
    <title>SSO 单点登录服务</title>
  </head>
  <body>
    <div id="app"></div>
    <script>
      let hash = hash:location.hash; // hash 取自当前页面URL # 后面的参数
      // ② 禁止直接打开网页 `SendMessage` 给你的网页发送 `ready`事件
      window.self === window.top ? location.href ='/' : SendMessage('ready',{msg:'youloge.sso is ready'});
      // ⑤ 接收初始化参数
      window.onmessage = ({origin,data,source})=>{
        let {method,params} = data[hash] || {};
        if(method == 'init'){
          // 接收初始化参数
        }
      }
      function SendMessage(msg,data) {
        window.parent.postMessage({ [hash]:{method:method,params:params} }, referrer);
      }
    </script>
  </body>
</html>
```

跨域通信协约约定：
- 子窗口不允许直接通过URL访问(跨域基本环境需要)
- 父窗口不主动访问子窗口进行主动通信(iframe加载是异步且依赖网络)
- 子窗口准备完成通知父窗口`ready`
- 父窗口得到`ready`指令，下发`init`指令
- 双方通信 格式为 `{"hash":{"method":"指令","params":{"参数":"数值"}}}` hash由父窗口随机生成

