import MarkdownItContainer from 'markdown-it-container'
import MarkdownIt from 'markdown-it'
import { tablePlugin } from './table'
import type { Token } from 'markdown-it'

// https://markdown-it.docschina.org/#%E7%94%A8%E6%B3%95%E7%A4%BA%E4%BE%8B
// https://juejin.cn/post/6844903688536850440
const markdown: MarkdownIt = MarkdownIt({
  breaks: true // // 转换段落里的 '\n' 到 <br>。
})

/**
 * 自定义 md 插件
 *
 * @param md markdown 实例
 */
export const mdPlugin = (md: MarkdownIt) => {
  // 使用表格插件
  md.use(tablePlugin)

  // 自定义 md 语法
  md.use(MarkdownItContainer, 'demo', {
    validate(params: string): boolean {
      return !!params.trim().match(/^demo\s*(.*)$/)
    },

    render(tokens: Token[], idx: number) {
<<<<<<< HEAD
      // const m: RegExpMatchArray = tokens[idx].info.trim().match(/^demo\s*(.*)$/)
      // const description: string = m && m.length > 1 ? m[1] : ''
      // //  ${encodeURIComponent(markdown.render(description))}

      // const sourceFileToken = tokens[idx + 2]
      // const sourceFile = sourceFileToken.children?.[0].content ?? ''

      const m = tokens[idx].info.trim().match(/^demo\s*(.*)$/)
      const token = tokens[idx + 2]

      console.log(token)

      if (tokens[idx].nesting === 1) {
        const content: string = tokens[idx + 1].type === 'fence' ? tokens[idx + 1].content : '';

        // 获取描述信息
        const description = m && m.length > 1 ? m[1] : ''

        const sourceFileToken = tokens[idx + 2]
        // const sourceFile = sourceFileToken.children?.[0].content ?? ''

        const source = md.utils.escapeHtml(content)

        // https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent

        // return `<vp-demo source="${content}" description="${description}">`
        return `<vp-demo source="${encodeURIComponent(source)}" description="${description}">`
      } else {
        return '</vp-demo>'
=======
      if (tokens[idx].nesting === 1) {
        const m: RegExpMatchArray = tokens[idx].info.trim().match(/^demo\s*(.*)$/)
        const description: string = m && m.length > 1 ? m[1] : ''
        const content: string = tokens[idx + 1].type === 'fence' ? tokens[idx + 1].content : ''
        const source: string = md.utils.escapeHtml(content)

        return `<vp-demo source="${source}">${encodeURIComponent(markdown.render(description))}`
>>>>>>> master
      }
      return '</vp-demo>'
    }
  })
}
