# 人机验证服务 `METHOD`=`captcha`  {#captcha} 

::: warning  人机验证服务作用与使用范围
用于敏感操作,如`登录`,`支付`,`评论`等，进行真实性验证，该操作会触发`人机验证`,`验证码验证`,`短信验证`等二次验证
:::

- 1. `初始配置` 中 `notify URL`须实现 `/captcha/verify`接口
- 2. `/captcha/verify`接口解密数据，调用`vip`接口同步消费，成功后返回 `access_token`
- 3. `access_token` 用于身份认证, 在`登录邮件`,`支付` `评论` 等敏感服务

> 请勿使用`access_token`调用发布服务(文章、视频)，该`token`持有人为开发者

#### 初始配置
```js
let PLUS = youloge.plus();
PLUS.captcha({
  "mode":"", // 验证模块 `login`,`payment`,`profile`
  "desc":"" // 验证描述
  "notify":"" // 实时通知通知URL
}).then(res=>{ 
  // 成功(流程结束)
}).catch(err)
```
