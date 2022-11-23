import prism from 'prismjs'
import escapeHtml from 'escape-html'

function wrap(code: string, lang: string): string {
  if (lang === 'text') {
    code = escapeHtml(code)
  }
  return `<pre v-pre><code>${code}</code></pre>`
}

export const highlight = (str: string, lang = 'markup') => {
  if (prism.languages[lang]) {
    const code = prism.highlight(str, prism.languages[lang], lang)
    return wrap(code, 'markup')
  }
  return wrap(str, 'text')
}
