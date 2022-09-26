import MarkdownIt from 'markdown-it'
import MarkdownItContainer from 'markdown-it-container'

// export type Translate = ReturnType<typeof createTranslate>

// export type ButtonProps = ExtractPropTypes<typeof buttonProps>

// https://juejin.cn/post/6844903688536850440

const md = MarkdownIt().use(MarkdownItContainer, 'encoding', {
  validate: function (params) {
    return params.trim().match(/^encoding\s+(.*)$/)
  },

  render: function (tokens, idx) {
    const m = tokens[idx].info.trim().match(/^encoding\s+(.*)$/)

    if (tokens[idx].nesting === 1) {
      // opening tag
      // return '<f-sticky-card :open="false" close-text="展开代码" open-text="折叠代码"><template #source>' + md.utils.escapeHtml(m[1]) + '</template>\n'
      return `
          <f-sticky-card :open="false" close-text="展开代码" open-text="折叠代码">
            <template #source>
              ${md.utils.escapeHtml(m[1])}
            </template>
            \n

            ${md.utils.escapeHtml(m[1])}
          `
    } else {
      // closing tag
      return '</f-sticky-card>\n'
    }
  }
})

const res = md.render('::: encoding click me\n*content*\n:::\n')

console.log(res)
