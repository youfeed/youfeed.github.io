# 获取下载URL
::: tip 权限组 `VIP` 路径ID `30` 方法ID `02`
请求域：vip.youloge.com 请求头：`Signer:signer`

作用域：`drive`  方法名: `download`

错误编号：`3002 00` 频率限制: `10` 
:::

> 获取临时下载URL(一般5分钟有效期) 无限速

> 开发者注意不要将文件转存到自己服务器：容易引起`文件版权纠纷`、`用户在其他开发者平台无法使用`等一系列问题，如果你想自建云盘服务`可结合相关接口自行实现一套`

> 推荐前端通过`document.createElement('a')`添加`a.download = attname`与`a.href = downsign&attname=title.format`弹窗下载

### 请求代码
``` http
POST /drive HTTP/1.1
Host: vip.youloge.com
Lang: zh-CN
Content-Type: application/json
Signer: {{Signer}}
{
  "method": "download",
  "params": {
    "uuid":"uuid"
  }
}
```
### 响应代码
``` json
{
  "err": 200,
  "msg": "获取成功",
  "data": {
    "uuid": "uuid",
    "mail":"123456@qq.com",
    "name":"Y_ADSJKI54",
    "avatar":"avatarURL",
    "created":"2023-08-17 03:17:05",
    "updated":"2023-08-17 03:17:05"
  }
}
```
### 错误代码
``` json
{
  "err": 300200,
  "msg": "文件ID不正确"
}
```

::: details 其他错误码

| 错误err        |      描述msg      |  说明 |
| ------------- | :-----------: | ----: |
| 300200      | 文件ID不正确 | 文件ID不正确 |
| 300201      | 无下载权限 | 需要重新购买下载权限 |
:::




