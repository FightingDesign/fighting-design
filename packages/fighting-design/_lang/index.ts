import EN_US from './src/en-US.json'
import ZH_CN from './src/zh-CN.json'

/**
 * 国际化语言配置
 *
 * 部分组件需要展示一些默认的文案内容，根据全局组件的 lang 属性来配置不同的语音
 *
 * 仅支持 en-US 和 zh-CN 两种语音模式
 */
export const LANG = {
  'en-US': EN_US['en-US'],
  'zh-CN': ZH_CN['zh-CN']
} as const

export type LangKey = typeof LANG[keyof typeof LANG]

export type LangContentKey = keyof LangKey
