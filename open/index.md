# 嵌入式小组件源代码

::: info
组件widget 涉及到跨域问题，以及作用域安全问题，源代码供开发者参考。可以自行编译整合到自己的服务

- 组件网址:[open.youloge.com](https://open.youloge.com)
- 备用网址:[open.jakebuda.com](https://open.jakebuda.com)
:::
嵌入式小组件`通过组合API接口`可以快速嵌入到你的项目中，实现快速开发。每个小组件都利用了多个接口，开发者只需关注接口开发即可：

组件代码开源：原理都是通过使用`iframe标签`和`Postmessage跨域通信`。代码`仅<5KB`使用方便

### 小组件有哪些
- [单点登录](./sso/) 
- [转账支付](./payment/)



[Youloge.open 仓库](https://github.com/youfeed/youloge.open) 如果你可以提交PR最好啦