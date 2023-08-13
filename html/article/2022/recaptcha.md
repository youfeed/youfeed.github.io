# 谷歌V3无感知人机

::: tip
免费的就是香！ 国内人机除了 腾讯阿里 剩下的全是瞎几把报价
:::
> 自己的小网站，需要反人机：国内 极验这种 逮到一个 萝卜 就坑一个的要远离，剩下的自己买买 阿里 腾讯的服务即可，

### 1. 获取公私钥匙

> https://www.google.com/recaptcha/ 一对密钥可以给很多个不同网站用，没必要一个网站一个

### 2. html 引入js 并回调

``` js
<script src="https://www.recaptcha.net/recaptcha/api.js?render=6LcXRb0cAAAAABPKXUQGMqnTuWFflHRfISXQuX2q&onload=ready" async defer></script>
```
> render 是你的 key
> onload 要是个函数
> 注意 async defer 异步渲染

### 3. 按需使用 也可以直接绑定到 按钮 之类的, 省的自己写回调 

``` js
// 界面正常加载
...

// 界面方法

var action = {
  uuid:'d2u8tjei47koi2mda6jp5ngn96',
  referer:'https://youloge.com/',
  sitekey:'6LcXRb0cAAAAABPKXUQGMqnTuWFflHRfISXQuX2q',
  // 帮grecaptcha 给 this
  ready:function(){
    this.grecaptcha = grecaptcha
    console.log(this)
  },
  // 封装一下 fetch 请求(注意这是个 Promise)
  fetch:async function(data){
    data.token = await this.execute()
    return fetch('api',{method:'post',body:JSON.stringify(data)}).then(r=>r.json()).then(r=>r)
  },
  // 封装一下获取 谷歌token
  execute: function(){
    return this.grecaptcha.execute(this.sitekey,{action:'login'}).then(token=>token)
  },
  
  
  
  // 使用 比如用户点击了 获取验证码
  
  getCode: function(){
    this.fetch({method:'login',action:'getcode'}).then(r=>{
      console.log(r)
    })
  }
}



// 接受载入成功回调 -> action.ready()
var ready = ()=>{ action.ready() }
```

> 注意 execute fetch 的封装

### 4. 后台验证 

``` php
// fetch 我封装了 会有个 谷歌token 你发个curl

$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, 'https://www.recaptcha.net/recaptcha/api/siteverify');
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
curl_setopt($ch, CURLOPT_POST, 1);
curl_setopt($ch, CURLOPT_POSTFIELDS, ['secret'=>'这是你的私钥 一对公私钥可以很多网站用','response'=>$token]);
$out = curl_exec($ch);
curl_close($ch);
$out = json_decode($out,true);
//return $out;
return intval($out['score'] * 10) >= 4 ? 'ok' : false;
// 官方推荐 阈值 是 0.5 实际使用还是用0.4吧 太容易被干吊了

建议发 get 请求比post 省点流量

https://www.recaptcha.net/recaptcha/api/siteverify?secret=私钥&response=前端传来的超长token
{
  "success": true,
  "challenge_ts": "2022-02-10T02:47:33Z",
  "hostname": "dvblju.com",
  "score": 0.7,
  "action": "login"
}
score 是阈值 
action 是我封装在 execute 填写的 你可以自定义 后台统计能看到 好像是 有几个预设
hostname 在多个网站时候用下
```


### 5. 其他

1. 如何去掉 图标

.grecaptcha-badge{visibility: hidden;}

2. 自己使用情况如何

就是什么验证码 我自己都忘了 我有这玩意 快的一笔

3. 国外咋用 

把 recaptcha.net 换成 google.com 即可

4. 本地调试怎么办

在控制台帮127.0.0.1 加上

使用的时候 图标是个红色的 提示你测试模式 


