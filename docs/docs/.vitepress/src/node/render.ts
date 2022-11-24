import { stripScript, stripStyle, stripTemplate, genInlineComponentText } from './utils'
import os from 'os'
import type { DemoblockPluginOptions } from '../types'

let seed = 0

const render = (content: string, options: DemoblockPluginOptions) => {
  if (!content) {
    return
  }
  const startTag = '<!--vue-demo:'
  const startTagLen = startTag.length
  const endTag = ':vue-demo-->'
  const endTagLen = endTag.length

  let componenetsString = '' // 组件引用代码
  const templateArr = [] // 模板输出内容
  let styleArr = [] // 样式输出内容
  let id = 0 // demo 的 id
  let start = 0 // 字符串开始位置
  let commentStart = content.indexOf(startTag)
  let commentEnd = content.indexOf(endTag, commentStart + startTagLen)
  while (commentStart !== -1 && commentEnd !== -1) {
    templateArr.push(content.slice(start, commentStart))
    const commentContent = content.slice(commentStart + startTagLen, commentEnd)
    const html = stripTemplate(commentContent)
    const script = stripScript(commentContent, `render-demo-${id}-script`)
    const style = stripStyle(commentContent)
    seed = seed + 1
    const demoComponentContent = genInlineComponentText(seed, html, script, options) // 示例组件代码内容
    const demoComponentName = `render-demo-${id}` // 示例代码组件名称
    templateArr.push(`<${demoComponentName} />`)
    styleArr.push(style)
    componenetsString += `${JSON.stringify(demoComponentName)}: ${demoComponentContent},`
    // 重新计算下一次的位置
    id++
    start = commentEnd + endTagLen
    commentStart = content.indexOf(startTag, start)
    commentEnd = content.indexOf(endTag, commentStart + startTagLen)
  }
  // 仅允许在 demo 不存在时，才可以在 Markdown 中写 script 标签
  // todo: 优化这段逻辑
  let pageScript = ''
  if (componenetsString) {
    pageScript = `<script lang="ts">
      import * as Vue from 'vue'
      ${options?.scriptImports?.join(os.EOL)}
      const { defineComponent } = Vue
      export default defineComponent({
        name: 'component-doc',
        components: {
          ${componenetsString}
        }
      })
    </script>`
  } else if (content.indexOf('<script>') === 0) {
    // 硬编码，有待改善
    start = content.indexOf('</script>') + '</script>'.length
    pageScript = content.slice(0, start)
  }
  // 合并 style 内容
  styleArr = [...new Set(styleArr)]
  let styleString = ''
  const preprocessors = ['scss', 'sass', 'less', 'stylus']
  let _style = 'style'
  // 支持css预处理器
  if (preprocessors.includes(options.cssPreprocessor!)) {
    _style = `style lang="${options.cssPreprocessor}"`
  }
  // 支持customStyleTagName
  if (options.customStyleTagName) {
    _style = options.customStyleTagName
  }
  // 支持css预处理器
  if (styleArr && styleArr.length > 0) {
    styleString = `<${_style}>${styleArr.join('')}</style>`
  } else {
    styleString = `<style></style>`
  }
  templateArr.push(content.slice(start))
  return {
    template: templateArr.join(''),
    script: pageScript,
    style: styleString
  }
}

export default render
