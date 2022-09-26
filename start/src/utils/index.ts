import MarkdownIt from 'markdown-it'
import MarkdownItContainer from 'markdown-it-container'
import type { Token } from 'markdown-it'
// import path from 'path'
// import fs from 'fs'

// const text = fs.readFileSync('./button.md')

// console.log(text)

// https://markdown-it.docschina.org/#%E7%94%A8%E6%B3%95%E7%A4%BA%E4%BE%8B
// https://juejin.cn/post/6844903688536850440
const markdown: MarkdownIt = MarkdownIt({
  breaks: true
})

export const mdPlugin = markdown.use(MarkdownItContainer, 'demo', {
  validate (params) {
    return !!params.trim().match(/^demo\s*(.*)$/)
  },

  render (tokens: Token[], idx: number) {
    const m: RegExpMatchArray = tokens[idx].info.trim().match(/^demo\s*(.*)$/)
    const description: string = m && m.length > 1 ? m[1] : ''

    if (tokens[idx].nesting === 1) {
      console.log(tokens[idx])
      // console.log(encodeURIComponent)
      return `
          <f-sticky-card :open="false">
            ${markdown.render(description)}
            ${markdown.render(description)}
            ${markdown.render(description)}
          `
    } else {
      return '</f-sticky-card>'
    }
  }
})
