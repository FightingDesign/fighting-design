interface navType {
  text: string
  activeMatch: string
  link: string
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
  }
]
