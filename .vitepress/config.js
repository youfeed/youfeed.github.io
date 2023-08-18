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
      message: 'JackBuda Co., Ltd.',
      copyright: 'Copyright © 2017-2023 Micateam'
    },
  },
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'og:type', content: 'website' }],
    ['meta',{ name:'google-site-verification',content:'ch32O-znLvvcKuWCsxL7Tb6rXsH9e0-uB80XbWp8nLE' }]
  ],
  sitemap:{
    hostname: 'https://youfeed.github.io'
  }
}) 
// sidebar
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
// sidebarLIC
function sidebarLIC() {
  return [
    { text: '通信协议', link: 'rpc' },
    { text: '开源协议', link: 'osi' },
    { text: '用户协议', link: 'eula' },
    // { text: '隐私协议', link: 'combat' }
  ]
}
//
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
        { text: '更新资料(VIP)', link: 'update' },
      ]
    },
    {
      text: '钱包资金',
      base:'io/wallet/',
      collapsed: false,
      items: [
        { text: '钱包余额(VIP)', link: 'balance' },
        { text: '资金汇率(API)', link: 'rates' },
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