# 获取bilibili 直播 弹幕api

### 1.获取真实房间ID

> https://api.live.bilibili.com/room/v1/Room/room_init?id=$id


``` json
{
	"code": 0,
	"msg": "ok",
	"message": "ok",
	"data": {
		"
		$room_id": 3645373, // 这个
		"short_id": 0,
		"uid": 10510808,
		"need_p2p": 0,
		"is_hidden": false,
		"is_locked": false,
		"is_portrait": false,
		"live_status": 1,
		"hidden_till": 0,
		"lock_till": 0,
		"encrypted": false,
		"pwd_verified": false,
		"live_time": 1649065804,
		"room_shield": 0,
		"is_sp": 0,
		"special_type": 0
	}
}
```

### 获取wss 地址

> https://api.live.bilibili.com/room/v1/Danmu/getConf?room_id=直播间号&platform=pc&player=web

``` json
{
	"code": 0,
	"msg": "ok",
	"message": "ok",
	"data": {
		"refresh_row_factor": 0.125,
		"refresh_rate": 100,
		"max_delay": 5000,
		"port": 2243,
		"host": "broadcastlv.chat.bilibili.com",
		"host_server_list": [{
			"host": "ks-live-dmcmt-bj6-pm-02.chat.bilibili.com",
			"port": 2243,
			"wss_port": 443,
			"ws_port": 2244
		}, {
			"host": "ks-live-dmcmt-sh2-pm-01.chat.bilibili.com",
			"port": 2243,
			"wss_port": 443,
			"ws_port": 2244
		}, {
			"host": "broadcastlv.chat.bilibili.com",
			"port": 2243,
			"wss_port": 443,
			"ws_port": 2244
		}],
		"server_list": [{
			"host": "120.92.112.150",
			"port": 2243
		}, {
			"host": "120.92.144.250",
			"port": 2243
		}, {
			"host": "broadcastlv.chat.bilibili.com",
			"port": 2243
		}, {
			"host": "120.92.112.150",
			"port": 80
		}, {
			"host": "120.92.144.250",
			"port": 80
		}, {
			"host": "broadcastlv.chat.bilibili.com",
			"port": 80
		}],
		"token": "9G2d9HqZmzhc0UJ_5yxhKB-2yp1xeWeaUMhWHNapSVNWD19Y4YoBThJJ00SWztUTWy3aNc_g7qtpLQK-jLyXiUyL5klwH9C-xgjVqTvNTTlS9QksWWDRAyOw7OgtvsYZEDvfbmGIUZ5CqN8MQs0="
	}
}
```


### 开wss 链接