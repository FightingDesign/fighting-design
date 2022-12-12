/**
 * 国际化语音配置
 * 
 * 部分组件需要展示一些默认的文案内容，根据全局组件的 lang 属性来配置不同的语音
 * 
 * 仅支持 en-US 和 zh-CN 两种语音模式
 */
export const LANG = {
  'en-US': {
    /**
     * 空状态
     */
    empty: {
      content: 'No data'
    },
    /**
     * 日历
     */
    calendar: {
      weekList: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']
    },
    /**
     * 粘性卡片
     */
    stickyCard: {
      openText: 'close',
      closeText: 'open'
    }
  },
  'zh-CN': {
    /**
     * 空状态
     */
    empty: {
      content: '暂无数据'
    },
    /**
     * 日历
     */
    calendar: {
      weekList: ['日', '一', '二', '三', '四', '五', '六']
    },
    /**
     * 粘性卡片
     */
    stickyCard: {
      openText: '关闭',
      closeText: '开启'
    }
  }
} as const

export type LangKey = typeof LANG[keyof typeof LANG]

export type LangContentKey = keyof LangKey
