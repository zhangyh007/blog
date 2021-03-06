module.exports = {
  title: 'Jeremy Zhang 的 blog',
  description: '学习，记录，提高自己',
  base: '/blog/',
  host: '0.0.0.0',
  port: 8080,
  plugins: ['@vuepress/back-to-top', '@vuepress/nprogress'],
  themeConfig: {
    logo: '',
    sidebarDepth: 3,
    lastUpdated: '上次更新',
    displayAllHeaders: false, // 默认值：false 展示全部的header
    nav: [
      { text: '文章目录', link: '/article/', ariaLabel: '文章'},
      { text: '数据结构', link: '/dataStructure/' },
      { text: '算法', link: '/algorithm/' },
      { text: '博客', link: 'http://www.zhangyh.com.cn/blog/' },
      { text: 'github', link: 'https://github.com/zhangyh007' },
    ],
    sidebar: {
      '/article/': [
        '',
        'test',
        {
          title: 'Vue深入浅出',
          children: [
            '/article/Vue深入浅出/diff算法',
            {
              title: 'miniVue的实践',
              children: [
                '/article/Vue深入浅出/miniVue的实践/reactivity的响应式实现'
              ]
            }
          ]
        }
      ],
      '/algorithm/': [
        {
          title: '排序',
          children: [
            '/algorithm/排序/冒泡排序',
            '/algorithm/排序/选择排序',
            '/algorithm/排序/插入排序',
            '/algorithm/排序/快速排序',
          ]
        }
      ],
      '/dataStructure/': [
        {
          title: '数组',
          children: [
            '/dataStructure/数组/数组',
            '/dataStructure/数组/集合',
            '/dataStructure/数组/有序数组',
          ]
        },
        {
          title: '链表',
          children: [
            '/dataStructure/链表/',
            '/dataStructure/链表/双向链表',
          ]
        },
        {
          title: '二叉树',
          children: [
            '/dataStructure/二叉树/',
          ]
        },
        {
          title: '栈',
          children: [
            '/dataStructure/栈/',
          ]
        },
      ]
    }
    
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@': '/docs/.vuepress/public/'
      }
    }
  }
}
