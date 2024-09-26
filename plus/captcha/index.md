# 人机验证服务 `METHOD`=`captcha`  {#captcha} 


- 1. `初始配置` 中 `notify URL`须实现 `/captcha/verify`接口
- 2. `/captcha/verify`接口解密数据，调用`vip`接口同步消费，成功后返回 `access_token`
- 3. `access_token` 用于身份认证, 在`登录邮件`,`支付` `评论` 等敏感服务

> 请勿使用`access_token`调用发布服务(文章、视频)，该`token`持有人为开发者

#### 初始配置
```js
let PLUS = youloge.plus({
  apikey:'', // 必填*用于加密数据区分开发者
  notify:'', // 必填*用于同步通知
});
```

``` js
PLUS.captcha({
  "mode":"", // 验证模块 `login`,`payment`,`profile`
  "desc":"" // 验证描述
}).then(res=>{ 
  // 成功(流程结束)
}).catch(err)
```
