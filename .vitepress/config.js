import { defineConfig } from 'vitepress'
export default defineConfig({
  title: "Youloge.Docs",
  description: "开放接口服务平台",

  themeConfig: {
    sidebar: {
      "/":[
        {
          text: 'Examples',
          items: [
            { text: 'Markdown Examples', link: '/markdown-examples' },
            { text: 'Runtime API Examples', link: '/api-examples' }
          ]
        }
      ],
      '/ui/': { base: '/ui/', items: sidebarUI() },
      "/io/": { base: '/io/', items: sidebarIO() },
    },
    nav: [
      { text: '首页', link: '/' },
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/youfeed' }
    ],
    logo: { src: '/loge.svg', width: 24, height: 24 },
    footer: {
      message: 'Jack Buda Co., Ltd.',
      copyright: 'Copyright © 2017-2023 Micateam'
    },
  },
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'og:type', content: 'website' }],
    ['meta',{ name:'google-site-verification',content:'google-site-verification=pxIj2TQ8ApW8JuXwF82wU3qMyAWyZ19wvnhStWJ0Jo8' }]
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
function sidebarIO() {
  return [
    { text: '开发导读', link: 'start' },
    { text: '开发实战', link: 'combat' },
    {
      text: '登录注册',
      base:'login',
      collapsed: true,
      items: [
        { text: '登陆邮件', link: 'register' },
        { text: '登陆验证', link: 'verify' },
        { text: '同步资料', link: 'sync' },
      ]
    }
  ]
}