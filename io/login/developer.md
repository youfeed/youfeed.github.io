# 开发者登录令牌获取：请提前准备`2FA绑定工作`
::: tip 权限组 `API` 路径ID `20` 方法ID `01`
请求域：`vip.youloge.com` 请求头：`authorization:Youloge-API {ukey}`

作用域：`login/captcha`

错误编号：`2020 00` 频率限制: `10` 
:::

> 该接口仅用于`开发者账户首次初始化使用`
- 开发者令牌有效期 7天 无限续签;[服务端数据解密](/io/start.html#decrypt)。
- 每`5分钟`允许重新获取一次签名：`signertrue`只能自己解密,只有不帮密钥泄露，就不怕被爆破.
- `signertrue => ticket`通过`[续签同步](./refresh)`接口更新令牌获得`ticket`(7天有效);
- `signertrue => ticket`通过`[授权登录](./authorize)`接口授权令牌获得`Singer`(默认2小时有效：支持自定义有效期);

::: warning 使用定时任务定时刷新开发者令牌
开发者续签刷新令牌机制与普通用户续签机制相同;
:::

### 请求代码
``` http
POST /login/captcha HTTP/1.1
Host: api.youloge.com
Lang: zh-CN
Content-Type: application/json
authorization:Youloge-API {{ukey}}
{
  "code":"" // 2FA 密码
}
```
### 响应代码
``` json
{
  "err": 200,
  "msg": "开发令牌",
  "data": {
    "signertrue": "DcQlwu6o7hWu+JNyP******",
    "expire": 1692210923
  }
}
```
- `signertrue` 通过解密 可以获得 `uuid=>UkeyUUID`,`ticket 令牌`,`expire 7天`
- 适用范围：`DEV`开发者接口专用
### 错误代码
``` json
{
  "err": 202000,
  "msg": "2FA 密码错误",
}
```



::: details 其他错误码

| 错误err        |      描述msg      |  说明 |
| ------------- | :-----------: | ----: |
| 202000      | 2FA 密码错误 | 检查2FA 是否绑定正确 |
| 202001 |   验证次数超限    |    每5分钟只能验证一次 |

:::





# 开发者令牌的获取与保存
> 获取开发者令牌需要先登录，登录需要匿名人机授权，匿名人机授权需要先有开发者令牌
- 防止陷入死循环首次签名：请使用[开放umd组件库/单点登录]或使用[UI组件库/PLUS组件]
- 平台开发者令牌和用户令牌其实是一个东西，区别在于登录邮箱是否一致：
- 开发者令牌与用户令牌的使用一致：授权令牌`7天`(建议服务端保存,随时续签) 签名令牌`3小时`
- 同一个开发者名下`所有ukey`主动互相授权登录：注意授权后只能使用对应`ukey-secret`解密

### 获取开发者令牌
- 使用[http-server](https://www.npmjs.com/package/http-server)启动本地`http服务`
::: details 点击查看完整html代码
``` html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <div>
    <div id="login" style="height: 600px;width: 400px;margin: 0 auto;"></div>
  </div>
  <script src="https://unpkg.com/youloge.plus"></script>
  <script>
    let PLUS = youloge.plus({
      ukey:''
    });
    PLUS.sso({
      selector:'#login'
    }).then(res=>{
      console.log(res)
    }).catch(err=>{
      console.log(err)
    });
    console.log(PLUS)
  </script>
</body>
</html>
```
:::

### 获取临时匿名令牌(人机/防刷验证)
::: details 点击查看完整html代码
``` html

```
:::
### 实战应用：
- 我已有一个网站(邮箱体系),现在想无缝接入`Github 登录 Google登录`
- 1. 前端正常让用户点击跳转到`Github 登录`：后端使用`code 换取Github用户资料`
- 1.1. `老用户`在有效期内网站直接使用`profile.signature 解密得到 profile.signer`进行登录;或者续期`profile.secret=>Signer`+`API:authorize`授权登录
- 2. `新用户`使用获得用户邮箱使用`VIP:code`发送登录邮件,得到`random access`
- 2.1 前端提示用户输入`5位验证码` + `access` => `API:verify`得到`secret 保存到用户`利用`profile.secret=>Signer`+`API:authorize`=>`signature`授权登录
- 你可能觉得繁琐拆分分的十分琐碎：这是因为接口面向多应用设计的，例如解密`profile.signature=>Signer`这个`Signer + 任意其他Ukey`即可完成另一个系统授权登录，可以实现一处登录处处可用

## 推荐使用方式
- 也许觉得平台设计的很繁琐，其实是为了让开发者具备完整控制
- 用户登录用到：ukey+用户邮箱 发送登录邮件(内嵌自己的人机/防刷验证 => 签名人机密钥 => 发送邮件)返回密钥+随机数 用户填入5位验证码 完成登录
- 开发者登录用到：ukey+用户邮箱 发送登录邮件(内嵌官方的人机/防刷验证 => 签名人机密钥 => 发送邮件)返回密钥+随机数 用户填入5位验证码 完成登录
- 你自己的后台需要各种权限的管理员，按需允许是否使用`开发者令牌`调用`vip`,`dev`接口即可

code verify => secret ticket

secret + ukey1 authorize => signature1 => signer1

secret + ukey2 authorize => signature2 => signer2

secret + ukey3 authorize => signature3 => signer3
