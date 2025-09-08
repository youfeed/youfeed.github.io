# 更换头像
::: tip 权限组 `VIP` 路径ID `21` 方法ID `04`
请求域：vip.youloge.com 请求头：`Authorization:Youloge-VIP {Signer}`

作用域：`profile/avatar`

错误编号：`2104 00` 频率限制: `10` 
:::

> 更换头像 分为二部

- 第一步请求上传地址
- 像上传地址上传图片(七牛) 
- 组装返回的图片ID 组装规则为：`https://img/youloge.com/${UUID}!80` 支持 `!80`,`!120`,`!150`,`!300` 等后缀

? 为什么图片只提供ID，而不提供完整URL
：项目接口是开源的，有时候开发者希望图片存储到自己服务器，这样方便开发者在自己网站组合地址。

### 请求代码

``` http
POST /profile/avatar HTTP/1.1
Host: vip.youloge.com
Lang: zh-CN
Content-Type: application/json
Authorization:Youloge-VIP {Signer}
{
  "width":"100"
}
```
### 响应代码
``` json
{
  "err": 200,
  "msg": "修改成功",
  "data": {
    "name":"Y_ADSJKI54",
    "updated":"2023-08-17 03:17:05"
  }
}
```
### 错误代码
``` json
{
  "err": 210300,
  "msg": "未知错误"
}
```

::: details 其他错误码

| 错误err        |      描述msg      |  说明 |
| ------------- | :-----------: | ----: |
| 210300      | 未知错误 | 未知错误 |
:::




