# Youloge.UI 定制库

> 该项目是`Youloge.IO API开放接口服务`配套服务，提供定制`组件component`,`指令 directive`,`函数 functions`,`路由 hash-view`库服务

### 安装使用

> 直接引入CDN 即可使用 35.39 kB │ gzip: 10.59 kB

> `https://unpkg.com/youloge`或者`https://cdn.jsdelivr.net/npm/youloge`

### NPM安装 参考项目[Youloge.Pages](https://github.com/youfeed/youloge.pages)
- 库本身用了`vite`,`unocss`,`vue3` 这样就不需要`UI库`
```js
npm install -D unocss
npm install youloge
```
uno.config.js vite.config.js 默认即可

> 根据需要:单独在你的项目配置一个`config.js`
```js
import 'virtual:uno.css'
import '@unocss/reset/tailwind.css'

const modules = import.meta.glob(['/views/*.vue','/views/*/*.vue','/views/*/*/*.vue']);
const routes = []
for (const key in modules) {
  routes.push({
    path:key.replace(/^\/views|\.vue$/g, ''),
    component:modules[key],
  })
}
export const config = {
  // 配置参数
  ukey:'qRjE+HMLB8WcnAvdcon5Lx2BSGid7OdQUd5ozRV8QHj4sgP91+Y6xMfhrHZbONGpLErJGMZFZ8GAcEwINSE4VjwdEvna0DwHUJ3zzQNFlQg8s8nhqo4/I3y00q31eYi4',
  APIURL:'https://api.youloge.com',
  VIPURL:'https://www.youloge.com',
  // 路由参数
  route:{
    routes
  }
}
```js

```js
import { createApp } from 'vue'
import youloge from 'youloge'
import {config} from '../config.js'
app.use(youloge,config).mount('#app');
```

### 路由配置
- 使用`vite`特有import.meta.glob方法：进行异步`hash路由懒加载`
- 路由文件前置登录判断：路由定位类似于微信中的小程序
- 路由路径：为对应`views 文件夹下`的文件路径
```js
  const routes = [
    {
      path:'/console',
      component:modules[key],
    },
    {
      path:'/hello/word',
      component:modules[key],
    },
  ]
```

