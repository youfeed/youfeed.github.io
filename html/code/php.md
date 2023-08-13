# PHP使用技巧

### 1. http_build_query 数组 对象 转http 字符串
``` PHP
http_build_query($array,numeric_prefix=string)

numeric_prefix 可选参数 多维数组 下标前缀
```

### 2. session_create_id(); 创建一个随机ID

``` PHP
$id = session_create_id();
// elmdt5r6d71inbi8ijpb8q0av1
```

### 3. 微信小程序 解码手机号
``` PHP
$result = openssl_decrypt( base64_decode($encryptedData), "AES-128-CBC", base64_decode($session_key), 1, base64_decode($iv));
return json_decode($result,true);
```

### 4.DZ的 字符串加解密 带有效期 盐
``` PHP
//加密 auth($mail,false,300) 解密auth(str,true)
public function auth($string,$operation=false,$expiry=7200,$key='固定的密钥~~')
{
    $ckey_length = 4;
    $key = md5($key ? $key : DEFAULT_KEYS);
    $keya = md5(substr($key, 0, 16));
    $keyb = md5(substr($key, 16, 16));
    $keyc = $ckey_length ? ($operation? substr($string, 0, $ckey_length):substr(md5(microtime()), -$ckey_length)) : '';
    $cryptkey = $keya.md5($keya.$keyc);
    $key_length = strlen($cryptkey);
    $string = $operation? base64_decode(substr($string, $ckey_length)) :
    sprintf('%010d', $expiry ? $expiry + time() : 0).substr(md5($string.$keyb), 0, 16).$string;
    $string_length = strlen($string);
    $result = '';
    $box = range(0, 255);
    $rndkey = array();
    for($i = 0; $i <= 255; $i++) {
        $rndkey[$i] = ord($cryptkey[$i % $key_length]);
    }
    for($j = $i = 0; $i < 256; $i++) {
        $j = ($j + $box[$i] + $rndkey[$i]) % 256;
        $tmp = $box[$i];
        $box[$i] = $box[$j];
        $box[$j] = $tmp;
    }
    for($a = $j = $i = 0; $i < $string_length; $i++) {
        $a = ($a + 1) % 256;
        $j = ($j + $box[$a]) % 256;
        $tmp = $box[$a];
        $box[$a] = $box[$j];
        $box[$j] = $tmp;
        $result .= chr(ord($string[$i]) ^ ($box[($box[$a] + $box[$j]) % 256]));
    }
    if($operation) {
        if((substr($result, 0, 10) == 0 || substr($result, 0, 10) - time() > 0) &&
            substr($result, 10, 16) == substr(md5(substr($result, 26).$keyb), 0, 16)) {
            return substr($result, 26);
        } else {
            return false;
        }
    } else {
        return $keyc.str_replace('=', '', base64_encode($result));
    }
}
```

### 5. 谷歌人机验证

``` PHP
// 谷歌人机
public function recaptcha($code)
{
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, 'https://www.google.com/recaptcha/api/siteverify');
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
    curl_setopt($ch, CURLOPT_POST, 1);
    curl_setopt($ch, CURLOPT_POSTFIELDS, ['secret'=>'secretsecretsecretsecretsecret','response'=>$code]);
    $out = curl_exec($ch);
    curl_close($ch);
    $out = json_decode($out,true);
    return intval($out['score'] * 10) >= 5 ? 'ok' : false;
}
```

### 6. 微信支付 支付宝的 签名

``` PHP
openssl_sign($str, $raw_sign, openssl_pkey_get_private($apiclient_key), 'sha256WithRSAEncryption');
$sign = base64_encode($raw_sign);

openssl_sign(urldecode(http_build_query($query)), $raw_sign, openssl_pkey_get_private($apiclient_key), 'sha256WithRSAEncryption');
$sign = base64_encode($raw_sign);// 支付宝专用签名
```


# 7. PHP 解析URL

``` PHP
parse_url($url,$component = -1) 

// PHP_URL_SCHEME、 PHP_URL_HOST、 PHP_URL_PORT、 PHP_URL_USER、 PHP_URL_PASS、 PHP_URL_PATH、 PHP_URL_QUERY 或 PHP_URL_FRAGMENT

// PHP_URL_QUERY 配合字符串解析 可解析 食用效果更佳
parse_str($str, $output);

```
# 8. PHP 解析时间
``` PHP
date("Y-m-d H:i:s ") 
```


# 9.PHP switch 简写

``` PHP
 $action = $params['action'] ?? 'x';

$switch = [
  'query'=>function($params){
    return ['code'=>0,'update'=>$params];
  },
  'x'=>function($params){
    return ['code'=>0,'update'=>$params];
  }
];
return $switch[$action] ?? false ? $switch[$action]($params) : ['code'=>400,'msg'=>'方法错误'];
```
# 10.PHP 统一入口 并映射私有方法
``` PHP
$input = json_decode($this->input->raw_input_stream,true) ?? $this->input->post_get(null,true);
$method = $input['method'] ?? '__construct';
$runtime = method_exists($this,$method) && !in_array($method,['__construct','get_instance']) ? $this->$method($input) : ['code'=>400,'msg'=>'方法错误'];
return $this->output->set_content_type('application/json')->set_output(json_encode($runtime,320));
```

# 11.PHP 数组 占位字符替换 用在流水线
``` PHP
$trans = [
  '{uuid}'=>$uuid,
  '{name}'=>$name
];

$update = ['myid'=>'{uuid}'];
$data = json_decode(strtr(json_encode($update,320), $trans),true);
```