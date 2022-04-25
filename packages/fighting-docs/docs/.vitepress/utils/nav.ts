interface navType {
  text: string
  link: string
  activeMatch?: string
}

// 导航栏
export const nav: navType[] = [
  {
    text: '首页',
    activeMatch: '/',
    link: '/'
  },
  {
    text: '组件',
    activeMatch: '/components/',
    link: '/components/install'
  },
  { text: 'Github', link: 'https://github.com/Tyh2001/fighting-design' }
]
