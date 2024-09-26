# 公共调试APIKEY
::: tip 权限组 `API` 路径ID `22` 方法ID `01`
请求域：`api.youloge.com` 路径名：`apikey/debug`
请求头：`authorization:Youloge-API NULL`
请求方式: `POST` 错误编号：`2201 00` 频率限制: `10` 
:::

> 完整的`apikey`密钥组`uuid`,`Ukey`,`Secret`和`ip`会通过邮箱发送给用户。

> 其中`Ukey`前端使用，`Secret`只能后端解密使用且只能指定`白名单IP` 使用


### 请求代码
``` http
POST /apikey/debug HTTP/1.1
Host: api.youloge.com
Lang: zh-CN
Content-Type: application/json
authorization: Youloge-API NULL
{
}
```
### 响应代码
``` json
{
    "err": 200,
    "msg": "调试APIKEY(剩余8601秒)",
    "data": {
        "expired": "2024-09-28 02:10:44",
        "bind": "0.0.0.0",
        "apikey": "WhBTjbVeHuu9g5P1Iz6p_jIwyI4uz-rbuGTUjaNzxW_EJJlN050vrHYHC9ceGPxPmPsxO-5Y82tU8bbNGMf92YSXc5AxdxU2ozQ6-ZKDt6U",
        "secret": "UlS-RykPZECvV2QiafolCnv6AzcxG5X6fVncJArc1xMagBKDu5UV8dpSm2nwtNtyKyY4DG9mmdSjpPa3VlUKIg"
    }
}
```

::: details 其他错误码

| 错误err        |      描述msg      |  说明 |
| ------------- | :-----------: | ----: |
:::




