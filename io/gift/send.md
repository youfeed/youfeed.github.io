# 赠送礼物

- 礼物赠送不可撤回，不支持找回功能。
- 金额为`#10.00RGB * N`倍数
- 赠送的礼物 支持转增：平台提供核验功能
- 官方核销礼物地址为：`https://open.youloge.com/gift?v=${uuid}`
- 开发者可以自己设计核销API：

## 礼物卡的组成

- 礼物卡的组成：`uuid`、`name`、`price`、`passcode`
- 其中`passcode`是`5组x5个`的字母表，