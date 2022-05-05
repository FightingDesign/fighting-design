const htmlEscapes = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;'
}

function escapeHtml(html) {
  return html.replace(/[&<>"']/g, (chr) => htmlEscapes[chr])
}

module.exports = async (theme = 'material-palenight') => {
  const highlighter = await require('shiki').getHighlighter({
    theme
  })

  return (code, lang) => {
    if (!lang || lang === 'text') {
      return `<pre v-pre><code>${escapeHtml(code)}</code></pre>`
    }
    return highlighter.codeToHtml(code, lang).replace(/^<pre.*?>/, '<pre v-pre>')
  }
}
