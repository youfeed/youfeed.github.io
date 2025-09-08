# 本地测试 Socket 并发

### 服务端采用 uWebSockets.js

本地 yarn 构建然后传到 服务端去


### 测试
```
npm i websocket-pressure-test

/**
 * ./node_modules/.bin/websocket-pressure-test 地址 并发数
 */
 
./node_modules/.bin/websocket-pressure-test ws://127.0.0.1:9502 10000

// win cmd

node .\node_modules\websocket-pressure-test\src\websocket-pressure-test.js ws://127.0.0.1:9502 10000
```