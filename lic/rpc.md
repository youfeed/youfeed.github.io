# Youloge.RPC 通信协议

创建时间：2023-08-13 02:29:24 

更新时间：2023-08-13 03:18:31 

作者：Micateam

# 概述
Youloge.RPC 是一个有状态，需要路由匹配的，轻量级远程调用协议。它非常适合用在前端-后端，后端-后端，代理-节点等方面使用。

# 约定
- 主域名 `https://api.youloge.com` `https://vip.youloge.com`
- 请求方式 `POST` 请求路径 `path/name`
- 请求标头 `content-type`:`application/json`
- 请求标头 `Authorization`:`Youloge-ABC ${signature }`
- 内容 `{}`

## 请求标头
- `Authorization`:`Youloge-Notify ${signature }`
- 算法标签(algorithm) + 空格 + `签名内容`(signature)
- 算法标签可自行约定，采用空格分开即可

## 简单请求
* 完整请求URL为 `https://api.youloge.com/login/code`
``` 
--> login/code
{"captcha":"","mail":"0000@youloga.com"}
<-- login/code
{"err":200,"msg":"success","data":{"uuid":"userID","name":"name"...}}
```
  
  
## 接口调用（CURL）
``` 
curl 'https://www.youloge.com/captcha/verify' \
  -H 'accept: */*' \
  -H 'accept-language: zh-HK,zh;q=0.9,en-HK;q=0.8,en-US;q=0.7,en;q=0.6,zh-CN;q=0.5' \
  -H 'authorization: Youloge-Notify XXXXXFRmWZP8Tg' \
  -H 'content-type: application/json' \
  -H 'user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129.0.0.0 Safari/537.36' \
  --data-raw '{"expire":1727372022,"signature":"TeZMph_7DeXGf6OelQl"}'
```


## 消息订阅(Websocket) req(请求数据) sub(订阅数据) unsub(取消订阅)  
* 完整请求URL为 `wss://chat.youloge.com/live?signature=?`
* 完整请求URL为 `wss://api.youloge.com/subscribe` 
* uuid 本次调用的唯一标识，后端原样返回
```
<---> 000 - 101 - 200 subscribe
// 订阅数据
---> {"uuid":"123-xxx-xxx-xxx","method":"live.sub","params":{"room":"1000"}}
<--- {"uuid":"xxx-xxx-xxx-xxx","method":"live.sub","params":{"status":"ok"}}
// 请求数据
---> {"uuid":"xxx-xxx-xxx-123","method":"live.online"}
<--- {"uuid":"xxx-xxx-xxx-123","method":"live.online","params":{"online":1024}}
// 链接心跳保持
<--- {"method":"ping","params":123456789}
---> {"method":"pong","params":123456789}
```


### 规范错误码

> 通用错误码

|  错误码   | 说明  |
|  ----  | ----  |
| 200  | 正确返回 |
| 401  | 请求头格式错误 |
| 402  | 请求头使用场景错误 |
| 403  | 认证授权已过期 |
| 405  | 请求方法错误 |
| 406  | 请求参数错误 |
| 408  | 批量请求部分错误 |
| 409  | 批量请求参数错误 |

> 业务错误码 - 二种方式

|  错误码   | 说明  |
|  ----  | ----  |
| 310100  | 具体业务错误 |
| 310101  | 具体业务错误 |
| Login.UserIDNull  | 具体业务错误 |
| Login.ParamError  | 具体业务错误 |

> 解构`310100` 错误码

* 31 为 `Login`类业务编号
* 01 为 `method`方法编号
* 00 为 `error` 错误类型 