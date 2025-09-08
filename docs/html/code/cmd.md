# CMD各种命令行 

### 1. 我们在本地调试想要搭载 本地服务器的话工具选择
``` cmd
// #### windows 下 要安装 nodejs

npm install http-server -g

// 启动

http-server

// 禁用缓存 **我在用的时候缓存还在 在f12 状态下 鼠标长按刷新按钮 清空缓存并重新加载 选项**

http-server -c-1


// #### mpb 下 自带有 Python的Web服务器
//python2语法：

python -m SimpleHTTPServer 


// python3语法：

python -m http.server

// 推荐用3 我用 2本地发个本地请求 不知道为啥 等了20秒


```