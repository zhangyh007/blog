module.exports = {
  title: 'Jeremy Zhang 的 blog',
  description: '学习，记录，提高自己',
  base: '/blog/',
  host: '0.0.0.0',
  port: 8080,
  plugins: ['@vuepress/back-to-top'],
  themeConfig: {
    logo: '',
    sidebarDepth: 2,
    lastUpdated: 'Last Updated',
    nav: [
      { text: '文章目录', link: '/article/', ariaLabel: '文章',
        items: [
          { text: '文章目录', link: '/article/' },
          { text: 'Japanese', link: '/language/japanese/' }
        ]
      },
      { text: '博客', link: 'http://www.zhangyh.com.cn' },
      { text: 'github', link: 'https://github.com/zhangyh007' },
    ],
    sidebar: {
      '/article/': [
        '',
        'test'
      ]
    }
    
  }
}