# 超链接(link) 使用说明

互联网协议有无数个: 只要符合超链接协议我们都支持，但是必须要用户知晓并同意才能跳转。我们通过跳转中转进行解决。 `https://open.youloge.com/link?target=uuid`


常见协议

- 打开APP weixin:// alipay:// 等
- 打开文件 file:C:\Users\Administrator\Desktop\test.txt
- 打开网页 http://www.baidu.com
- 打开电话 tel:123456789
- 打开短信 sms:123456789
- 打开邮件 mailto:123456789@qq.com
- 打开地图 baidu://map/xxx

特殊协议

- javascript:alert('hello')
- javascript:window.location.href='http://www.baidu.com'
- javascript:window.open('http://www.baidu.com')
- javascript:window.open('http://www.baidu.com','_blank')
- javascript:window.open('http://www.baidu.com','_self')

