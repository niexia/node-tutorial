module.exports = {
  title: 'node-tutotial',
  description: 'Vue.js 源码学习',
  base: '/node-tutotial/',
  dest: 'dist',
  head: [
    ['link', {rel: 'icon', href: '/favicon.ico'}]
  ],
  themeConfig: {
    repo: 'niexias/node-tutotial',
    editLinks: true,
    docsDir: 'docs',
    editLinkText: '在 GitHub 上编辑此页',
    lastUpdated: '上次更新',
    nav: [
      { text: '个人博客', link: 'https://niexias.github.io/' }
    ],
    sidebarDepth: 2,
    sidebar: [
      {
        title: '',
        collapsable: false,
        sidebarDepth: 2,
        children: [
          ''
        ]
      },
    ]
  },
  plugins: [
    ['@vuepress/back-to-top', true]
  ],
  markdown: {
    lineNumbers: true
  }
}