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
      '/open/': { base: '/open/', items: sidebarOPEN() },
      '/page/': { base: '/page/', items: sidebarPAGE() },
      '/ui/': { base: '/ui/', items: sidebarUI() },
      "/io/": { base: '/io/', items: sidebarIO() },
      "/lic/":{ base: '/lic/', items: sidebarLIC()}
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
      copyright: 'JackBuda Co., Ltd. © 2017-2023 Micateam'
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
function sidebarOPEN() {
  return [
    { text: '开始使用', link: 'index' },
    {
      text: '单点登录',
      base:'open/sso/',
      collapsed: false,
      items: [
        { text: '开始使用', link: 'start' }
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
        { text: '开放准备', link: 'start' },
        { text: '安装引入', link: 'combat' },
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
    { text: '开源协议', link: 'osi' },
    { text: '用户协议', link: 'eula' },
    // { text: '隐私协议', link: 'combat' }
  ]
}
// API接口
function sidebarIO() {
  return [
    { text: '开发导读', link: 'start' },
    { text: '开发实战', link: 'combat' },
    {
      text: '登录注册',
      base:'io/login/',
      collapsed: false,
      items: [
        { text: '登陆邮件(API)', link: 'code' },
        { text: '登陆验证(API)', link: 'verify' },
        { text: '同步资料(API)', link: 'refresh' },
        { text: '授权登录(API)', link: 'authorize' },
      ]
    },
    {
      text: '用户资料',
      base:'io/profile/',
      collapsed: false,
      items: [
        { text: '个人信息(API)', link: 'info' },
        { text: '我的信息(VIP)', link: 'information' },
        { text: '更换头像(VIP)', link: 'avatar' },
        { text: '更新昵称(VIP)', link: 'rename' },
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
      text: 'APIKEY*',
      base:'io/apikey/',
      collapsed: false,
      items: [
        { text: '申请密钥(VIP)', link: 'apply' },
        { text: '密钥列表(VIP)', link: 'table' },
      ]
    },
    { text: '开发实战', link: 'combat' },
  ]
}