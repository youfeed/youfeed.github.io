# markdown扩展语法

::: tip
这里记录下 因为写文章 常用

[ 在 Markdown 中使用 Vue ](https://vuepress.vuejs.org/zh/guide/using-vue.html)
:::
### Front Matter
我不知道这啥玩意 后面写组件 不知道能不能用的到

VuePress 提供了对 [YAML front matter](https://jekyllrb.com/docs/frontmatter/)开箱即用的支持:

``` yaml
---
title: Blogging Like a Hacker
lang: en-US
---
```
这些数据可以在当前 markdown 的正文，或者是任意的自定义或主题组件中使用。

### GitHub 风格的表格

输入
``` md
| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |
```
输出
| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |

### Emoji [所有可用的 Emoji](https://github.com/markdown-it/markdown-it-emoji/blob/master/lib/data/full.json)
``` md
:tada: :100:
```
:tada: :100:

### 自定义容器 好用
``` md
::: tip
这是一个提示
:::

::: warning
这是一个警告
:::

::: danger
这是一个危险警告
:::

::: details
这是一个详情块，在 IE / Edge 中不生效
:::
```
::: tip
这是一个提示
:::

::: warning
这是一个警告
:::

::: danger
这是一个危险警告
:::

::: details
这是一个详情块，在 IE / Edge 中不生效
:::

### 代码块中的行高亮
``` js 
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```

- 行数区间: 例如 `{5-8}`, `{3-10}`, `{10-17}`
- 多个单行: 例如 `{4,7,9}`
- 行数区间与多个单行: 例如 `{4,7-13,16,23-27,40}`

