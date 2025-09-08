# CSS样式代码片段

### 1 最小的base64格式图片

> ![s](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 ':size=16') 最小的base64透明图片，大小为 1px * 1px。

``` js
<img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7">
```

> ![s](data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs= ':size=16') 最小的base64黑色图片，大小为 1px * 1px。


``` js

<img src="data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs=">

```


### 2 对支持分片的服务器 发起分片请求

``` js
https://cv1.youloge.com/1.txt

HEADERS:

Range bytes=0-4
起始0 单位 字节
```
### 饿了么头部那种 点状透明背景
``` css
    position: relative;
    border-bottom: 1pxsolidvar(--border-color);
    height: var(--header-height);
    padding: 0 12px 0 24px;
    background-image: radial-gradient(transparent 1px,var(--bg-color) 1px);
    background-size: 4px 4px;
    b: ;
    backdrop-filter: saturate(50%) blur(4px);
    webkit-backdrop-filter: saturate(50%) blur(4px);
    top: 0;
```