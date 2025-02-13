# 开发导读


> Youloge平台提供一整套[涵盖用户、支付、网盘、视频、评论...]完全授权的开发接口服务平台，方面整合到开发者自己的服务，自由组合API接口或直接使用`umd.js`包。

你可以随意组合接口类到自己的网络服务，同时获得丰厚的积分奖励，例如：

- 使用login登录注册 让你的网站接入OAuth2.0 服务(用户个人资料全部开放共享)
- 您已有自己网站博客 接入 wallet 钱包类，实现接收RGB ,在通过wallet数字礼品类接口转增给好友家人
- 还可以接入 article文章类 video视频等类到自己网站，形成自己的素材展示。

### 你的用户不仅是开发者还是管理者

用户在使用您的开发环境时，也在使用其他人的开发环境，用户数据是共享的，用户自由选择任意开发者的服务，您也可以自由选择用户，我们也在积极开发更好速度更快的功能。

### 开发接口通信协议`Youloge.RPC`

APIkey/Secret 是开发者必备密钥串，可前往个人中心-APIKey获取~或使用调试APIKEY

https://api.youloge.com 网页前端可以直接调用 `请求标头`:
- `Organization: {APIkey}`
- `Authorization: {AccessToken*可选}`

https://vip.youloge.com 只能`后端调用`且`绑定固定IP` 请求标头：
- `Organization: {APIkey}`
- `Authorization: {Signature*可选}` 
- `Signature`为`AccessToken`通过`Secret`二次AES解密获得：

### 加解密数据封装`signature` {#decrypt}
::: danger 数据关系
接口返回 ==> signature(加密数据)

signature(加密数据) + secret(二次AES解密) ==> 解密数据JSON格式(uuid,mail...,signer,expire)

VIP接口场景：请求头需要`signer`来自于解密登录`signature`
验证支付场景：验证成功会立即返回`signature`解密可得到`money` `local`等信息
:::
1. 什么地方会用到加解密数据
- 进行单点登录，对数据进行解密验证，可获得用户signer,expire,signature
- 验证用户支付完成后的返回
``` txt
signer 用户调用唯一凭证
expire 用户凭证过期时间
signature 获取的凭证是否来源与你的签名`ukey`
```
2. `signature` 解密验证
secret - 进行AES对称解密即可(服务端调用，不要暴漏)
signer - base64 编码二进制 加密数据
``` php
// 我以php为例 其他语言都是一样的原理
public function signer_decrypt($signer,$secret='')
{
  $bin = base64_decode($signer);
  return openssl_decrypt(substr($bin,16),'AES-128-CBC',base64_decode($secret),1,substr($bin,0,16));
}
// $signer 每个方法 对应需要验证的数据不同
```

> signature 不仅用于登录，在wallet 支付 等需要加密通信的地方都会使用到

# 但行好事 莫问前程