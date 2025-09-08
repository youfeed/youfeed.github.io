# 前端-获取云盘文件信息
::: tip 权限组 `API` 路径ID `30` 方法ID `01`
请求域：api.youloge.com 请求头：`Ukey:ukey`

作用域：`drive`  方法名: `info`

错误编号：`3001 00` 频率限制: `10` 
:::

> 前端根据`drive.uuid` 获取云文件基础信息

### 请求代码
``` http
POST /drive HTTP/1.1
Host: api.youloge.com
Lang: zh-CN
Content-Type: application/json
ukey: {{Ukey}}
{
  "method": "info",
  "params": {
    "uuid": "DcQlwu6o7hWu***",
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
    "title": "文件标题",
    "intro": "文件描述",
    "author": "作者UUID",
    "etag": "文件哈希ID",
    "format": "js",
    "size": 233,
    "cost": 1.25,
    "mime": "mime",
    "created": "created",
    "updated": "updated"
  }
}
```
### 错误代码
``` json
{
  "err": 300100,
  "msg": "uuid 不正确"
}
```



::: details 其他错误码

| 错误err        |      描述msg      |  说明 |
| ------------- | :-----------: | ----: |
| 300100      | uuid 不正确 | 检查uuid是否正确 |
| 300101      |   文件已删除或不存在    |  文件已删除或不存在 |

:::




