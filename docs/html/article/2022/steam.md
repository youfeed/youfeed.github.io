# steam 游戏开服(Linux)

### LinuxGSM & Oxide

#### 1. 网址

1. https://linuxgsm.com/servers/rustserver/

#### 2. 安全组

Game         28015  udp       0
Query        28015  udp       0
RCON         28016  tcp       0
App          28082  tcp       0


#### 3. 开始 乌班图

> apt-get update 更新源

> apt-get upgrade 更新内核

Ubuntu =< 20.04

> sudo dpkg --add-architecture i386; sudo apt update; sudo apt install curl wget file tar bzip2 gzip unzip bsdmainutils python3 util-linux ca-certificates binutils bc jq tmux netcat lib32gcc1 lib32stdc++6 libsdl2-2.0-0:i386 steamcmd lib32z1

Ubuntu => 20.10

> sudo dpkg --add-architecture i386; sudo apt update; sudo apt install curl wget file tar bzip2 gzip unzip bsdmainutils python3 util-linux ca-certificates binutils bc jq tmux netcat lib32gcc-s1 lib32stdc++6 libsdl2-2.0-0:i386 steamcmd lib32z1

CentOS 64 位

> yum install curl wget tar bzip2 gzip unzip python3 binutils bc jq tmux glibc.i686 libstdc++ libstdc++.i686 zlib-devel

新建一个用户
> adduser rustserver

切换用户 
> su - rustserver

安装LGSM
> wget -O linuxgsm.sh https://linuxgsm.sh && chmod +x linuxgsm.sh && bash linuxgsm.sh rustserver

> wget -O linuxgsm.sh https://helper.youloge.com/sh/linuxgsm.sh && chmod +x linuxgsm.sh && bash linuxgsm.sh rustserver

> https://raw.fastgit.org/GameServerManagers/LinuxGSM/master/linuxgsm.sh

运行安装 会访问GitHub 有问题

> ./rustserver install

安装SERVER

> ./rustserver install


编辑配置文件

> nano /home/rustserver/serverfiles/server/rustserver/cfg/server.cfg

配置LGSM 配置

> cd /home/rustserver/lgsm/config-lgsm/rustserver

查看 配置

> cat rustserver.cfg 

复制一份配置文件

> cp _default.cfg rustserver.cfg 

> nano rustserver.cfg


安装扩展

> ./rustserver mi 

// mode install

> rustoxide

插件位置

> ./serverfiles/oxide/plugins


1. 服务器 4G内存至少 
2. 安装 LGSM
3. 安装 Server 服务端
4. 配置Rust Server和Oxide插件
5. 



添加服主 

> Ownerid 76561198180089499

组权限添加

> oxide.grant user 76561198180089499

> oxide.grant group defalut




