# 获取转换汇率表 rates
::: tip 权限组 `API` 路径ID `24` 方法ID `01`
请求域：api.youloge.com 请求头：`Ukey:ukey`

作用域：`wallet`  方法名: `rates`

错误编号：`2401 00` 频率限制: `10` 
:::

> 余额 货币符号为`&` 货币单位为`分` 货币缩写为`RGB` 全称为`Red Green Blue` 灵感来自三原色

> 积分对标法定货币为`人民币` 换算为 `￥1.00 CNY == &1.00 RGB`

### 请求代码
``` http
POST /wallet HTTP/1.1
Host: api.youloge.com
Lang: zh-CN
Content-Type: application/json
Ukey: {{Ukey}}
{
  "method": "rates",
  "params": {
    "currency":"RGB",
    "money":"200"
  }
}
```
### 响应代码
``` json
{
  "err": 200,
  "msg": "获取成功",
  "data": {
    "rgb": "1.0000",
    "usd": "0.0048",
    "hkd": "0.1245",
    "cny": "1.0000",
  }
}
```
### 错误代码
``` json
{
  "err": 240100,
  "msg": "未知错误"
}
```

::: details 其他错误码

| 错误err        |      描述msg      |  说明 |
| ------------- | :-----------: | ----: |
| 240100      | 未知错误 | 未知错误 |
:::
