import mdContainer from 'markdown-it-container'
import type MarkdownIt from 'markdown-it'
import type Token from 'markdown-it/lib/token'

export const pluginDemo = (md: MarkdownIt): void => {
  md.use(mdContainer, 'demo', {
    validate(params: string) {
      return params.trim().match(/^demo\s*(.*)$/)
    },
    render(tokens: Token[], idx: number) {
      if (tokens[idx].nesting === 1) {
        const content = tokens[idx + 1].type === 'fence' ? tokens[idx + 1].content : ''
        return `<demo sourceCode="${md.utils.escapeHtml(content)}">${content ? `<!--vue-demo:${content}:vue-demo-->` : ''}`
      }
      return '</demo>'
    }
  })
}