# Youloge.RPC 协议

创建时间：2023-08-13 02:29:24 

更新时间：2023-08-13 03:18:31 

作者：Micateam


# 概述
Youloge.RPC 是一个有状态，需要路由匹配的，轻量级远程调用协议。它非常适合用在前端-后端，后端-后端，代理-节点等方面使用。

# 约定
- 主域名 `https://api.youloge.com` `https://vip.youloge.com`
- 请求路径 `path`
- 请求方式 `POST`
- 请求头 `Ukey` 或 `Signer`
- 请求体 `{"method":"","params":{}[]}`

## 简单请求
``` 
--> login
{"method":"profile","params":{"uuid":"userID"}}
<-- login
{"err":200,"msg":"success","data":{"uuid":"userID","name":"name"...}}
```
* 完整请求URL为 `https://api.youloge.com/login`

## 批量调用 *
``` 
--> login
{"method":"profile","params":[{"uuid":"userID001"},{"uuid":"userID002"}...]}
<-- login
{"err":200,"msg":"profile","data":[{"uuid":"userID001","name":"name001"...},{"uuid":"userID002","name":"name002"...}]}
{"err":200,"msg":"profile","data":[{"uuid":"userID001","name":"name001"...},{"uuid":"userID002","name":"name002"...}]}
```
* 完整请求URL为 `https://api.youloge.com/login` 
* 批量调用`params`具有数量限制
  
## 消息订阅(Websocket) req(请求数据) sub(订阅数据) unsub(取消订阅)  
```
<---> 000 - 101 - 200 subscribe
// 订阅频道 无参数
---> {"uuid":"xxx-xxx-xxx-xxx","method":"user.online"}
<--- {"uuid":"xxx-xxx-xxx-xxx","err":200,"msg":"user.online"}
<--- {"method":"user.online","data":[]}
<--- {"method":"user.online","data":[]}
// 请求数据 有参数
---> {"uuid":"xxx-xxx-xxx-xxx","method":"user.online","params":{"form":"2022-12-12","to":"2022-12-30"}}
<--- {"uuid":"xxx-xxx-xxx-xxx","err":200,"msg":"user.online"}
<--- {"uuid":"xxx-xxx-xxx-xxx","data":[]}
<--- {"uuid":"xxx-xxx-xxx-xxx","data":[]}
// 心跳
<--- ping 1000000
---> pong 1000001
```
* 完整请求URL为 `wss://api.youloge.com/subscribe` 
  
## 开放接口调用
``` 
--> login
{"method":"verify","params":{"sign":"sign"}}
<-- login
{"err":200,"msg":"success","data":{"uuid":"userID","verify":"verifys"...}}
{"err":401,"msg":"Ukey No Found"}
```
* 完整请求URL为 `https://api.youloge.com/login` 请求头加入`Ukey:*************************`

## 私有接口调用
``` 
--> payment
{"method":"verify","params":{"sign":"sign"}}
<-- login
{"err":200,"msg":"success","data":{"uuid":"userID","verify":"verifys"...}}
{"err":402,"msg":"Signer bind IP"}
{"err":403,"msg":"Signer is Expired"}
```
* 完整请求URL为 `https://vip.youloge.com/payment` 请求头加入`Signer:*************************`

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