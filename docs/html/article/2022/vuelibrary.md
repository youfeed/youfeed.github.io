# 封装自己的vue3组件库

> 全局组件 `<you-xxxx />` 使用 全局方法 this.$xxx 使用

### 主文件

> index.js

``` 
  import { createApp } from 'vue'
  import index from './index.vue' // 主入口
  import youloge from '@/components/youloge' // 组件库
  createApp(index).use(youloge).mount('#app')
```

### 组件库

> components/youloge/index.js

``` 
import YouHeader from './YouHeader/YouHeader.vue' // 全局组件
...
import YouLogin from './YouLogin/YouLogin.js' // 全局方法
...

const modules = [ YouHeader,YouAside,...]
const methods = {'$login':YouLogin,'$message':YouMessage,...}

const install = function(app, opts = {}) {
  modules.forEach(component => { 
    app.component(component.name, component);
  });
  for(let key in methods){
		app.config.globalProperties[key] = methods[key];
	}
})
const You = {
    name: 'Youloge',
    version: '0.1.0',
    install,
}
window.You = You;
export default You; 
```

### 全局方法 

> YouLogin/YouLogin.js

``` 
  import { createApp } from 'vue'
  import YouLogin from './YouLogin.vue'
  
  const IsLogin = (options)=>{
    const Frag  = document.createDocumentFragment();
    const Ypp = createApp(YouLogin,options)
    const vm = Ypp.mount(Frag);
    document.body.appendChild(Frag);
  })
  export default IsLogin
```

### 当前问题 在index.vue 调用 this.$login() 后 正常弹窗 但是在调用 this.$message() 提示找不到

> Uncaught TypeError: this.$message is not a function
 




















