# javascript代码片段

> 更新他个 几百个

### 1.1 生产随机 ID

``` js 
Math.random().toString(32).substring(2,)
// 'jm3h7337hq'
```
### 1.2 快速生成 数组
``` js
  new Array(3).toString().split(',').map(function(item,index){
    return Math.random().toString(32).substring(2,);
  })
// .join('') 可转字符串
```
### 2.js的 switch 简写
``` js
var action = {
  'key':'val',
  'key':function(){}
}
// 调用 
action[str] || action['defult']
action[str]() // function
```

### 3. export import {}
``` js
// 变量
export var m = 1;
export {m};
export {n as m};
// 函数
export function func_A() {};
export function func_B() {};

function f() {}
export {f};
// 匿名函数
export default function fun_C () {}

// import 使用
import {func_A, func_B} from './utils.js';
import * as func from './utils.js';
// import 匿名
import fun_C from './utils.js';
```

### 4. JSON 序列化 并空格缩进展示

> 配合 html pre 标签一起食用

``` js
stringify(myObject, null, 2);
```


### 5. 利用customElements.define(name, constructor, options); 组件化并增强功能
``` js

```
> https://blog.csdn.net/weixin_33976072/article/details/89292012



### 6. 动态创建扩展元素

``` js
document.createElement("p", { is: "word-count" })
```

### 7.对HTMLElement 原型链扩展
``` js
HTMLElement.prototype.loading = function(params){
    this.innerHTML = params ? `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="margin:auto;background:rgb(255,255,255);display:block;shape-rendering:auto;" width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid"> <g transform="rotate(0 50 50)"> <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#fe718d"> <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.9166666666666666s" repeatCount="indefinite"></animate> </rect> </g><g transform="rotate(30 50 50)"> <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#fe718d"> <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.8333333333333334s" repeatCount="indefinite"></animate> </rect> </g><g transform="rotate(60 50 50)"> <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#fe718d"> <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.75s" repeatCount="indefinite"></animate> </rect> </g><g transform="rotate(90 50 50)"> <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#fe718d"> <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.6666666666666666s" repeatCount="indefinite"></animate> </rect> </g><g transform="rotate(120 50 50)"> <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#fe718d"> <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.5833333333333334s" repeatCount="indefinite"></animate> </rect> </g><g transform="rotate(150 50 50)"> <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#fe718d"> <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.5s" repeatCount="indefinite"></animate> </rect> </g><g transform="rotate(180 50 50)"> <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#fe718d"> <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.4166666666666667s" repeatCount="indefinite"></animate> </rect> </g><g transform="rotate(210 50 50)"> <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#fe718d"> <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.3333333333333333s" repeatCount="indefinite"></animate> </rect> </g><g transform="rotate(240 50 50)"> <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#fe718d"> <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.25s" repeatCount="indefinite"></animate> </rect> </g><g transform="rotate(270 50 50)"> <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#fe718d"> <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.16666666666666666s" repeatCount="indefinite"></animate> </rect> </g><g transform="rotate(300 50 50)"> <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#fe718d"> <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.08333333333333333s" repeatCount="indefinite"></animate> </rect> </g><g transform="rotate(330 50 50)"> <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#fe718d"> <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="0s" repeatCount="indefinite"></animate> </rect> </g> </svg>` : '';
  }
  return this
}
```

> 调用 document.getElementById('loading').loading(true)

### 8. JSON 转 dom树 还需要扩展 dom 导出(赋值出来) 绑定事件 
``` js
  render(json,father=null){
    console.log(this.uuid)
    var div = father || document.createElement('div')
    for(var i=0;i<json.length;i++){
      var itemElement = document.createElement(json[i].name)
          itemElement.setAttribute('class',json[i].class);
      div.appendChild(itemElement)
      if(json[i].child){
        this.render(json[i].child,itemElement)
      }
    }
    return div
  }
```

### 9 生成 随机渐变色 背景
``` js
export function cover() {
  const SL = ', 100%, 85%';
  const bgc =
    'linear-gradient(to left bottom, ' +
    `hsl(${Math.floor(Math.random() * 255) + SL}) 0%,` +
    `hsl(${Math.floor(Math.random() * 255) + SL}) 100%)`;

  return (
    `<section class="cover show" style="background: ${bgc}">` +
    '<div class="mask"></div>' +
    '<div class="cover-main"><!--cover--></div>' +
    '</section>'
  );
}
```

### 10 提取上传文件名
``` js
file.name.slice(0,-1-file.name.split('').reverse().join('').indexOf('.'))
```

``` php
mb_substr($input['name'],0,-1-strpos(strrev($input['name']),'.'));
```


### 11 将json 数组转 二进制文件 给表单 非小程序
``` js
let content = JSON.stringify(msg);
let blob = new Blob([content], { type: "application/json;charset=utf-8" });
var form = new FormData()
    form.append("file", blob);
```

### 12 小程序 上传json的 form表单 利用文件
``` js
onPull:async function(url,file,form={}){
  return new Promise(function(reslove,reject){
    let fs = wx.getFileSystemManager()
    let fd = fs.openSync({filePath:`${wx.env.USER_DATA_PATH}/1.txt`,flag:'w+'})
    fs.writeSync({fd:fd,data:JSON.stringify(file)})
    wx.uploadFile({
      url:url,
      filePath:`${wx.env.USER_DATA_PATH}/1.txt`,
      name:'file',
      formData:form,
      success:res=>{
        reslove(res)
      }
    })
  })
}
```

### 13 coloudfare 转发请求

``` js
addEventListener("fetch", (event) => {
  event.respondWith(
    Route(event.request).catch(
      (err) => new Response(err.stack, { status: 500 })
    )
  );
});
async function Route(request){
  const path = new URL(request.url).pathname;
  const fetchs = await fetch(`https://baidu.com${path}`,{
                    method:request.method,
                    headers:{
                  lat:request.cf.latitude,
                  lng:request.cf.longitude,
                  token:request.headers.get('token'),
                  ip:request.headers.get('x-real-ip'),
                  agent:request.headers.get('user-agent')
                },
                    body:await request.json()
                }).then(r=>r.json()) 
  return new Response(JSON.stringify(fetchs));
}  
```

### 14 预处理 行政区位置

``` JS
fetch('https://apis.map.qq.com/ws/district/v1/list?key=HRFJA').then(r=>r.json()).then(res=>{
    let {result} = res 
    let data = result.map(is=>{
        return is.map(iss=>{
            return {
                "id":iss.id,
                "name":iss.fullname,
            }
        })
    })
    let datas = JSON.stringify(data)
     var blob = new Blob([datas], { type: 'text/json' });
     var e = document.createEvent('MouseEvents');
     var a = document.createElement('a');
      a.download = 'city2.json';
      a.href = window.URL.createObjectURL(blob);
      a.dataset.downloadurl = ['text/json', a.download, a.href].join(':');
      e.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
      a.dispatchEvent(e);
    console.log(data)
})
```



