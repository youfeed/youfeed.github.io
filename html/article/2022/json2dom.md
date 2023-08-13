# JSON 转真实DOM 

> 网上 找了很多json 转dom 与其说是json转dom 不如说是json 转字符串，在innerHTML 而已


先看代码  又臭又长的 json 等待渲染

``` js
var node = [
  {
    name:'div',
    class:'music',
    child:[
      {
        name:'div',
        class:'player',
        child:[
          {
            name:'div',
            class:'cover',
            event:[
              {
                action:'onclick',
                func:(e)=>{
                  console.log('333',e)
                  console.log(this)
                }
              }
            ],
            child:[
              {
                name:'img',
                class:'thum',
                src:'https://p1.music.126.net/Vf4mVpW9uvpH9D01b-Esjg==/109951166647632103.jpg?param=90y90'
              }
            ]
          },
          {
            name:'div',
            class:'box',
            child:[
              {
                name:'div',
                class:'head',
                child:[
                  {
                    name:'i',
                    class:'logo'
                  },
                  {
                    name:'div',
                    class:'title',
                    html:'<h3>title</h3>'
                  }
                ]
              },
              {
                name:'div',
                class:'body',
                child:[
                  {
                    name:'div',
                    class:'poross'
                  }
                ]
              },
              {
                name:'div',
                class:'foot'
              }
            ]
          }
        ]
      }
    ]
  }
]
```

### 方法一 在当前函数下 里面 新建一个 render 函数 优点 当前作用域下 ***this***

``` js
render(json,father=null){
  var div = father || document.createElement('div')
  json.forEach(item => {
    var itemElement = document.createElement(item.name)
      for(let[key,val] of Object.entries(item)){
        key == 'event'
        ? 
          val.forEach(items=>{
            itemElement[items.action] = items.func
          })
        :
        key == 'child'
        ?
          this.render(val,itemElement)
        :
        key == 'html'
        ?
          itemElement.innerHTML = val
        :
          itemElement.setAttribute(key,val);
        ;
      }
  
    div.appendChild(itemElement)
  });
  return div
}
// 正常调用 也可以 传个 爸爸进去
```

### 方法二 扩展 Object 或者 Array 不推荐容易污染 但是 真TM好用呀 ***that***

``` js
Array.prototype.render = function (father=false) {
  var div = father || document.createElement('div')
  this.forEach(item => {
    var itemElement = document.createElement(item.name)
      for(let[key,val] of Object.entries(item)){
        key == 'event'
        ? 
          val.forEach(items=>{
            itemElement[items.action] = items.func
          })
        :
        key == 'child'
        ?
          val.render(itemElement)
        :
        key == 'html'
        ?
          itemElement.innerHTML = val
        :
          itemElement.setAttribute(key,val);
        ;
      }
  
    div.appendChild(itemElement)
  });
  return div
}
node.render(father) // 给个爸爸 不给个爸爸 要接返回
```


# 补充说明一下

``` js
// 样式 新建一个 style
var style = document.createElement('style')
    style.textContent = `.player{background: #8b8b8b; position: relative; width: 100%; height: 0; padding-top: 56.25%;}
    .play{color: #fff; position: absolute; display: flex; justify-content: center; align-items: center; top: 0; bottom: 0; left: 0; right: 0;z-index: 9;}
    .video{position: absolute; top: 0; right: 0; bottom: 0; left: 0; background: azure; width: 100%; height: 100%;z-index: 0;}
    `
    Root.appendChild(style)
```

### 注意点 JSON有格式要求

name ： div span img video audio 合法的 div名字

class/width/src data-*.... 合法能放 div上的参数

event[] -> {action:'js的动作名字： 这个名字 是event的js方法 例如：onclock onblur'，func()=>{} 方法 }

child -> 套娃去吧












