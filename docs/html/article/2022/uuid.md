### UUID仿BTC地址

> 创建

```
function kitty_address($string)
{
  $hash = hash('ripemd160',hash('sha256',$string),true);
  $addr = chr(18).$hash;
  $cksum = substr(hash('sha256',hash('sha256',$addr,true),true), 0, 4);
  return $this->base58_encode($addr.$cksum);
}
```

> 核验

```
function kitty_verifys($address)
{
  $addr = $this->base58_decode($address);
  if (strlen($addr) != 25) return false;
  $version = ord($addr[0]);
  $aksum = substr($addr, -4);
  $sksum = substr(hash('sha256',hash('sha256',substr($addr, 0, -4),true),true), 0, 4);
  return $aksum == $sksum ? bin2hex(substr($addr, 1, 20)) : false;
}
```

> encode

```
function base58_encode($string)
{
  $table = '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz';
  $long_value = gmp_init(bin2hex($string), 16);
  $result = '';
  while (gmp_cmp($long_value, 58) > 0) {
    [$long_value, $mod] = gmp_div_qr($long_value, 58);
    $result .= $table[gmp_intval($mod)];
  }
  $result .= $table[gmp_intval($long_value)];
  for ($nPad = 0; $string[$nPad] == ""; ++$nPad) {}
  return str_repeat($table[0], $nPad) . strrev($result);
}
```

> decode

```
function base58_decode($string)
{
  $table = '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz';
  $table_rev = [];
  for($i=0;$i<58;++$i) $table_rev[$table[$i]]=$i;
  $l = strlen($string);
  $long_value = gmp_init('0');
  for($i=0;$i<$l;++$i) {
    $c = $string[$l-$i-1];
    $long_value = gmp_add($long_value, gmp_mul($table_rev[$c], gmp_pow(58, $i)));
  }
  $res = pack('H*', gmp_strval($long_value, 16));
  for($nPad = 0; $string[$nPad] == $table[0]; ++$nPad);
  return str_repeat("\0", $nPad).$res;
}
```
