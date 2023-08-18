# 前端-获取用户信息
::: tip 权限组 `API` 路径ID `21` 方法ID `01`
请求域：api.youloge.com 请求头：`Ukey:ukey`

作用域：`profile`  方法名: `info`

错误编号：`2101 00` 频率限制: `10` 
:::

> 前端根据`profile.uuid`获取用户信息，邮箱会进行脱敏处理
> 前端根据`profile.mail`获取用户信息，新用户随机分配昵称头像()

### 请求代码
``` http
POST /profile HTTP/1.1
Host: api.youloge.com
Lang: zh-CN
Content-Type: application/json
ukey: {{Ukey}}
{
  "method": "info",
  "params": {
    "uuid": "DcQlwu6o7hWu***", // uuid mail 选择一个即可
    "mail": "123******@qq.com" // 二者都填写优先使用uuid
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
    "mail":"123******@qq.com",
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
  "err": 210100,
  "msg": "uuid 不正确"
}
```



::: details 其他错误码

| 错误err        |      描述msg      |  说明 |
| ------------- | :-----------: | ----: |
| 210100      | uuid 不正确 | 检查uuid是否正确 |
| 210101      |   找不到该用户    |  用户可能已注销 |

:::




