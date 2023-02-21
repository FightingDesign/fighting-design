import MarkdownItContainer from 'markdown-it-container'
import MarkdownIt from 'markdown-it'
import { tablePlugin } from './table'
import type { Token } from 'markdown-it'

/**
 * https://markdown-it.docschina.org/#%E7%94%A8%E6%B3%95%E7%A4%BA%E4%BE%8B
 *
 * https://juejin.cn/post/6844903688536850440
 */
const markdown: MarkdownIt = MarkdownIt({
  breaks: true
})

/**
 * 自定义 md 插件
 *
 * @param { Object } md markdown 实例
 */
export const mdPlugin = (md: MarkdownIt): void => {
  /** 使用表格插件 */
  md.use(tablePlugin)

  /** 自定义 md 语法 */
  md.use(MarkdownItContainer, 'demo', {
    validate(params: string): boolean {
      return !!params.trim().match(/^demo\s*(.*)$/)
    },

    render(tokens: Token[], idx: number) {
      if (tokens[idx].nesting === 1) {
        const m: RegExpMatchArray = tokens[idx].info.trim().match(/^demo\s*(.*)$/)
        const description: string = m && m.length > 1 ? m[1] : ''
        const content: string = tokens[idx + 1].type === 'fence' ? tokens[idx + 1].content : ''
        const source: string = md.utils.escapeHtml(content)

        return `<vp-demo source="${source}">${encodeURIComponent(markdown.render(description))}`
      }
      return '</vp-demo>'
    }
  })
}
