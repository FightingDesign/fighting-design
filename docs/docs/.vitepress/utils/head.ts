import type { HeadConfig } from 'vitepress'

export const head: HeadConfig[] = [
  /**
   * 导航栏 icon
   */
  [
    'link',
    {
      rel: 'icon',
      href: 'https://tianyuhao.cn/images/fighting-design/FightingDesign.svg'
    }
  ],
  /**
   * 解决移动端点击输入框自动放大的问题
   */
  [
    'meta',
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1.0,user-scalable=no'
    }
  ],
  /**
   * 网站关键词，有助于 SEO 优化
   */
  [
    'meta',
    {
      name: 'Keywords',
      content: '前端,前端开发,组件库,vue3组件库,vue,vuejs,javascript,typescript,vite,css3,css,html,html5,js,ts,scss,sass,fighting-design,fighting,design,setup,eslint,es6,rollup,components,vitepress,vitest,element,element-ui,ui,element-plus,go,golang,web-components,web,jquery,less,eslint,commitlint,cli,types,node,test-utils,happy-dom,husky'
    }
  ],
  /**
   * 网站作者
   */
  [
    'meta',
    {
      name: 'author',
      content: 'FightingDesign Tyh2001'
    }
  ]
] as HeadConfig[]