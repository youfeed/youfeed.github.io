# 单点登录服务 `METHOD`=`login` {#login} 


- `uuid` 是唯一的且使用不同的`apikey`获取同一个用户 `uuid`都是一样的
- `signature`可以解密出`uuid:用户ID expire:过期时间 singer:用户凭证`7200秒，3小时
- `secret` 专门用来刷新凭证`7天有效`,过期必须手动登录再次刷新。
- 开发者凭证也是该接口：(Ukey和Ukey的邮箱是同一人，即视为开发者)

``` js
PLUS.login({
  "close":Bloom, // 
}).then(res=>{
  // 登录成功
})
// 返回的数据前端可以直接展示
```