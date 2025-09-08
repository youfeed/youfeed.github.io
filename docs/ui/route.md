# 路由配置 `MPA多入口 + SPA单页` = 完整网站

> 以`文件夹/文件`路劲作为异步组件加载导入，实现`SPA`单页。

> 默认使用`views目录`,自动鉴权-未登录自动弹窗登录.

## 页面承载
```html
html
<body>
  <hash-view></hash-view>
</body>
```
## 触发方式
- 1. HTML触发 `<a href="#/file/index">hash 路由</a>`
- 2. js代码 `location.hash = 'file/index'`

> 只匹配路由配置成功的才会加载，未匹配无变化，路由模式用于提供`管理后台`服务，配合其他组件函数构建一个微服务页面十分的简单。