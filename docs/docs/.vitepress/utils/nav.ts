import { version } from '../../../../packages/fighting-design/package.json'

export const nav = [
  {
    text: '文档',
    activeMatch: '^/docs/',
    link: '/docs/install'
  },
  {
    text: '基础组件',
    activeMatch: '^/components/',
    link: '/components/button'
  },
  {
    text: 'Playground',
    link: 'https://sfc.tianyuhao.cn'
  },
  {
    text: version,
    link: 'https://www.npmjs.com/package/fighting-design'
  }
]
