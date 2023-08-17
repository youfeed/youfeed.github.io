# 列出用户的APIKEY
::: tip 权限组 `VIP` 路径ID `22` 方法ID `02`
请求域：vip.youloge.com 请求头：`Signer:signer`

作用域：`apikey`  方法名: `table`

错误编号：`2202 00` 频率限制: `10` 
:::

> 用户查看自己的APIKEY，不包含`Secret`数据

### 请求代码
``` http
POST /apikey HTTP/1.1
Host: vip.youloge.com
Lang: zh-CN
Content-Type: application/json
Signer: {{Signer}}
{
  "method": "table",
  "params": {
    "limit":10,
    "offset":0,
    "order":"created desc"
  }
}
```
### 响应代码
``` json
{
  "err": 200,
  "msg": "获取成功",
  "data": {
    "limit":10,
    "offset":0,
    "order":"created desc",
    "count":10,
    "table": [
      {
        "uuid": "uuid",
        "ukey": "APIKEY",
        "addr": "127.0.0.1",
        "created": "2021-05-10 16:00:00",
        "status": "正常",
      }
      ...
    ]
  }
}
```
### 错误代码
``` json
{
  "err": 220200,
  "msg": "limit offset 错误",
}
```

::: details 其他错误码

| 错误err        |      描述msg      |  说明 |
| ------------- | :-----------: | ----: |
| 220200      | limit offset 错误 | 检查偏移量 |
:::




