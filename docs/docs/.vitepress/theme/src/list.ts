// 描述
export const lists = [
  '更快的搭建',
  '更完善的组件',
  '更灵活的配置',
  '更优质的文档',
  '更强的类型校验',
  '更合适的组件库'
] as const

// 底部链接
export const bottomList = [
  {
    title: '社区',
    item: [
      {
        text: 'Github',
        link: 'https://github.com/FightingDesign/fighting-design'
      },
      { text: 'NPM', link: 'https://www.npmjs.com/package/fighting-design' }
    ]
  },
  {
    title: '关于我',
    item: [
      { text: 'Tyh2001', link: 'https://tianyuhao.cn' },
      { text: 'Blog', link: 'https://blog.tianyuhao.cn' }
    ]
  },
  {
    title: '帮助',
    item: [
      {
        text: '报告问题',
        link: 'https://github.com/FightingDesign/fighting-design/issues'
      },
      {
        text: '发起讨论',
        link: 'https://github.com/FightingDesign/fighting-design/discussions'
      },
      {
        text: '贡献指南',
        link: 'https://github.com/FightingDesign/fighting-design/blob/master/CONTRIBUTING.md'
      },
      {
        text: '常见问题',
        link: 'https://github.com/FightingDesign/fighting-design/blob/master/.github/COMMON_PROBLEM.md'
      }
    ]
  }
] as const
