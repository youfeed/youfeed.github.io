### 腾讯V3签名

> 入参 务必注意 字符串与数字的区别 常见 在 模板ID

``` php
$common = [
  'Host'=>'ses.tencentcloudapi.com',
  'Server'=>'ses',
  'Action'=>'SendEmail',  
  'Region'=>'ap-hongkong',  
  'Version'=>'2020-10-02',  
];
  
$body = json_encode([
  'FromEmailAddress'=>'message@jakebuda.com',
  'Destination'=>['11247005@qq.com'],
  'Template'=>[
    'TemplateID'=>18485,  
    'TemplateData'=>json_encode(['code'=>'1234']),  
  ],
  'Subject'=>'登录邮件',
],320);
return $this->TC3_SIGN_POST($common,$body);
```

> 注意 json_encode 320 中文不转码 不转义

### 签名

``` php
  $txyun = 从配置文件提取 密钥;
  $SecretId = $txyun['SecretId'];
  $SecretKey = $txyun['SecretKey'];
  $Host = $common['Host'];
  $Action = $common['Action'];
  $Version = $common['Version'];
  $Region = $common['Region'];
  $Server = $common['Server'];
  $Timestamp = time();
  $Timesdate = gmdate("Y-m-d",$Timestamp);
  $body_h256 = hash('SHA256',$body);
  // 第一步
  $request = "POST\n/\n\ncontent-type:application/json\nhost:$Host\n\ncontent-type;host\n$body_h256";
  $request_h256 = hash('SHA256',$request);
  // 第二步
  $StringToSign = "TC3-HMAC-SHA256\n$Timestamp\n$Timesdate/$Server/tc3_request\n$request_h256";
  // 第三步
  $SecretDate = hash_hmac('SHA256', $Timesdate,"TC3$SecretKey", true);
  $SecretService = hash_hmac('SHA256',$Server,$SecretDate, true);
  $SecretSigning = hash_hmac('SHA256',"tc3_request",$SecretService, true);
  $Signature = hash_hmac('SHA256',$StringToSign,$SecretSigning);
  // 第四步
  $Authorization = "TC3-HMAC-SHA256 Credential=$SecretId/$Timesdate/$Server/tc3_request, SignedHeaders=content-type;host, Signature=$Signature";
  $header = [
    "Authorization: $Authorization",
    'Content-Type: application/json', // ; charset=utf-8
    "X-TC-Action: $Action",
    "X-TC-Version: $Version",
    "X-TC-Timestamp: $Timestamp",
    "X-TC-Region: $Region"
  ];
  // 第五步
  return $this->post_curl("https://$Host",$header,$body);
```

> 注意 $Timestamp $Timesdate 的取值 否则 半夜签名就会失败 