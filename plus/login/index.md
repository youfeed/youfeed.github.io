# 单点登录服务 `METHOD`=`useLogin` {#login} 

::: warning  单点登录服务
接入登录服务，用户登录后，会在`localStorage`中写入`键=youloge`与`值={"uuid":0000,"access_token":"",...}`的用户个人信息，请注意保留字段。
:::

- `Youloge账户`体系是基于`邮箱`的，每个邮箱只能绑定一个`Youloge账户`
- 用户登录成功后`邮箱`是加密脱敏的，请使用`uuid`作为用户唯一标识(全局唯一)
- `access_token` 用户凭证：`有效期8-24小时`,开发者可以使用`AES-256-CBC ^ 2`解密出`uuid,expire,singer`
- `refresh_token` 刷新凭证：`7天+过期时间` 专门用来刷新凭证,过期必须重新登录再次刷新。
- 开发者凭证也是该接口：(`apikey`和`access_token`的`UUID`相同，即视为开发者凭证)

``` js
let PLUS = youloge.plus();
PLUS.useLogin({
  "uuid"?:number|null, // 可选* 如果指定则优先展示该账户
  "close"?:Bloom|false, // 可选* 是否允许关闭弹窗(需要强制登录时候)
}).emit(data=>{
  // 进度监听
}).then(res=>{
  // 登录成功 返回的数据前端可以直接展示
}).catch(err=>{
  // 登录失败
})
```