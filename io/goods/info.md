# 商品详情
::: tip 权限组 `API` 路径ID `45` 方法ID `01`
请求域：api.youloge.com 请求头：`Ukey:ukey`

作用域：`goods`  方法名: `info`

错误编号：`4501 00` 频率限制: `10` 
:::

> `info`入口是其他接口必须要依赖的，该接口另一个功能是专门分发外链推广的作用


### 请求代码 
``` http
POST /goods HTTP/1.1
Host: api.youloge.com
Lang: zh-CN
Content-Type: application/json
Signer: {{Signer}}
{
  "method": "info",
  "params": {
    "uuid":"12345" // 商品ID 或 推广ID
  }
}
```
### 响应代码
``` json
{
  "err": 200,
  "msg": "商品详情",
  "data": {
    "uuid": "DcQlwu6o7hWu****", // 后续请求都会用的到 很关键
    "title":"",
    "intro":"",
    "poster":"",
    "gallery":[],
    "detail":[],
    "expire": 1692210923 // 上方UUID的有效期 一般 2小时
  }
}
```
### 错误代码
``` json
{
  "err": 450100,
  "msg": "验证ID不合规"
}
```

::: details 其他错误码

| 错误err        |      描述msg      |  说明 |
| ------------- | :-----------: | ----: |
| 450100      | 验证ID不合规 | 不是商品UUID 或者推广UUID |
| 450101      | 商品已下架 | 该情况很稀少 一般商品很少更改 |
:::




### 商品详情返回的 `UUID`是后续获取 `商户(SPU)`,`套餐(SPU)`的关键，掉起购物车结算都需要，改`UUID`已加密，已经包含开发者信息，用于`结算推广费`

