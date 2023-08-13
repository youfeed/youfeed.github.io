# Vue生命周期

::: tip *
`created` `mounted` `methods`  `computed`   `watched`
:::

* ### 生命周期：

  * beforecreate : 一般使用场景是在加 loading事件 的时候
  * created ：处于loading结束后，还做一些初始化，实现函数自执行（data数据已经初始化，但是DOM结构渲染完成，组件没有加载）
  * beforemount：处于组件创建完成，但未开始执行操作
  * mounted ：处于发起后端请求，获取数据，配合路由钩子执行操作（DOM渲染完成，组件挂载完成 ）
  * beforeupdate、updated：处于数据更新的前后
  * beforeDestroy：当前组件还在的时候，想删除组件
  * destroyed ：当前组件已被销毁，清空相关内容

* ### mounted 与 methods 的区别

  * mounted 是生命周期方法之一，会在对应生命周期时执行。
  * methods 是Vue实例对象上绑定的方法，供当前Vue组件作用域内使用，未调用不会执行，只执行逻辑，返回值可有可无。

* ### computed 与 watched 的区别

  * computed 是计算属性，也可以理解为一个方法。其中计算的结果如果不发生改变就不会触发，且必须返回一个值并在DOM中绑定的才能取得值。他可以自动获取数据的改变。
  * watched 属性是手动定义的所需监听的值，不同的数据可以在其中多次定义监听值，这时会消耗一定性能，他并不能像computed那样自动改变。
