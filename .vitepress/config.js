import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Youloge.Docs",
  description: "开放接口服务平台",

  themeConfig: {
    sidebar: {
      "/":[
        {
          text: '©JakeBuda',
          items: [
            { text: '产品地图', link: '/sitemap' },
            { text: '更新日志', link: '/release' }
          ]
        }
      ],
      '/pro/': { base: '/pro/', items: sidebarPRO() },
      '/plus/': { base: '/plus/', items: sidebarPLUS() },
      '/page/': { base: '/page/', items: sidebarPAGE() },
      '/ui/': { base: '/ui/', items: sidebarUI() },
      "/io/": { base: '/io/', items: sidebarIO() },
      "/lic/":{ base: '/lic/', items: sidebarLIC()},
      "/editor/":{ base: '/editor/', items: sidebarEditor()}
    },
    nav: [
      { text: '首页', link: '/' },
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/youfeed' }
    ],
    logo: { src: '/loge.svg', width: 24, height: 24 },
    footer: {
      message: '皖ICP备19004549号 皖公安34112402000344',
      copyright: 'JackBuda Co., Ltd. © 2017-2024 Micateam'
    },
  },
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'og:type', content: 'website' }],
    ['meta',{ name:'google-site-verification',content:'3ScX1CU7RIXgnqo5akVRzf154fUUzfer1acRQcZp2RA' }]
  ],
  sitemap:{
    hostname: 'https://docs.youloge.com'
  },
}) 
// 管理后台
function sidebarPRO() {
  return [
    {
      text: '控制台',
      base:'pro/console/',
      collapsed: false,
      items: [
        { text: '数据统计', link: 'statistical' }
      ]
    }
  ]
}
// 开放组件
function sidebarPLUS() {
  return [
    { text: '开始使用', link: 'index' },
    {
      text: '人机验证',
      base:'plus/captcha/',
      collapsed: false,
      items: [
        { text: '无感验证', link: 'index' }
      ]
    },{
      text: '认证授权',
      base:'plus/authorize/',
      collapsed: false,
      items: [
        { text: '邮件认证', link: 'index' }
      ]
    },{
      text: '单点登录',
      base:'plus/login/',
      collapsed: false,
      items: [
        { text: '开始使用', link: 'index' }
      ]
    },{
      text: '快捷支付',
      base:'plus/payment/',
      collapsed: false,
      items: [
        { text: '余额支付', link: 'index' },
        { text: '购物组件', link: 'goods' }
      ]
    }
  ]
}
// 静态站点
function sidebarPAGE(){
  return [
    { text: '开始使用', link: 'index' },
    {
      text: '收费云盘',
      base:'page/drive/',
      collapsed: false,
      items: [
        { text: '开始使用', link: 'start' }
      ]
    }
  ]
}
// UI组件库
function sidebarUI() {
  return [
    {
      text: '快速开始',
      collapsed: false,
      items: [
        { text: '安装引入', link: 'index' },
        { text: '路由配置', link: 'route' },
        { text: '布局样式', link: 'style' },
      ]
    },{
      text: '定制组件',
      collapsed: false,
      base:'ui/components/',
      items: [
        { text: '定制组件', link: 'index' },
      ]
    },{
      text: '快捷指令',
      collapsed: false,
      base:'ui/directive/',
      items: [
        { text: '定制组件', link: 'index' },
      ]
    },{
      text: '函数方法',
      collapsed: false,
      base:'ui/functions/',
      items: [
        { text: '定制组件', link: 'index' },
      ]
    }
    
  ]
};
// 协议条例
function sidebarLIC() {
  return [
    { text: '安全字符', link: 'b32' },
    { text: '远程通信', link: 'rpc' },
    { text: '跨域通信', link: 'cors' },
    { text: '开源协议', link: 'cat' },
    { text: '用户协议', link: 'eula' },
    // { text: '隐私协议', link: 'combat' }
  ]
}
// 富文本
function sidebarEditor() {
  return [
    { text: '编辑器指南', link: 'index' },
    { text: '超链接(link)', link: 'link' },
    { text: 'UEditor', link: 'ueditor' },
    { text: 'TinyMCE', link: 'tinymce' },
  ]
}
// API接口
function sidebarIO() {
  return [
    { text: '开发导读', link: 'start' },
    { text: '开发实战', link: 'combat' },
    {
      uuid:'20',
      text: '登录注册',
      base:'io/login/',
      collapsed: false,
      items: [
        { text: '超级令牌(API)', link: 'developer', uuid:'00' },
        { text: '登陆邮件(DEV)', link: 'code', uuid:'01' },
        { text: '登陆验证(VIP)', link: 'verify', uuid:'02' },
        { text: '续期同步(VIP)', link: 'refresh', uuid:'03' },
        { text: '授权登录(VIP)', link: 'authorize', uuid:'04' },
        { text: '人机验证(VIP)', link: 'captcha', uuid:'01' },
      ]
    },
    {
      text: '用户资料',
      base:'io/profile/',
      collapsed: false,
      items: [
        { text: '开放信息(API)', link: 'info' },
        { text: '个人信息(VIP)', link: 'information' },
        { text: '更换头像(VIP)', link: 'avatar' },
        { text: '更新用户(VIP)', link: 'user' },
        { text: '更新昵称(VIP)', link: 'name' },
      ]
    },
    {
      text: '钱包资金',
      base:'io/wallet/',
      collapsed: false,
      items: [
        { text: '资金汇率(API)', link: 'rates' },
        { text: '钱包余额(VIP)', link: 'balance' },
        { text: '账户充值(VIP)', link: 'deposit' },
        { text: '账户提现(DEV)', link: 'withdraw' },
      ]
    },
    {
      text: '云盘文件',
      base:'io/drive/',
      collapsed: false,
      items: [
        { text: '文件信息(API)', link: 'info' },
        { text: '下载权限(VIP)', link: 'download' },
        { text: '购买权限(VIP)', link: 'payment' },
        { text: '验证购买(VIP)', link: 'verify' },
      ]
    },
    {
      text: '托管商城',
      base:'io/goods/',
      collapsed: false,
      items: [
        { text: '开发须知', link: 'index' },
        { text: '商品详细(API)', link: 'info' }
      ]
    },
    {
      text: 'APIKEY*',
      base:'io/apikey/',
      collapsed: false,
      items: [
        { text: '申请密钥(VIP)', link: 'apply' },
        { text: '密钥列表(VIP)', link: 'table' },
        { text: '调试密钥(API)', link: 'debug' },
      ]
    },
    { text: '开发实战', link: 'combat' },
  ]
}