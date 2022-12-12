export const LANG = {
  'en-US': {
    empty: {
      content: 'No data'
    }
  },
  'zh-CH': {
    empty: {
      content: '暂无数据'
    }
  }
} as const

export type ILangKey = typeof LANG[keyof typeof LANG]
export type ILangContentKey = keyof ILangKey
