import { stripScript, stripStyle, stripTemplate, genInlineComponentText } from './utils'

import os from 'os'
interface RenderComponentReturn {
  template: string
  script: string
  style: string
}

const scriptImports = [
  "import * as FightingIcon from '@fighting-design/fighting-icon'",
  "import * as FightingDesign from '../../../packages/fighting-design/index.ts'"
]

let seed = 0

/**
 * 将字符串解析为组件
 * 
 * @param content 代码内容部分
 * @returns 
 */
export const renderComponent = (content: string): RenderComponentReturn | null => {
  if (!content) return null

  const startTag = '<!--vue-demo:' as const
  const startTagLen: number = startTag.length
  const endTag = ':vue-demo-->' as const
  const endTagLen: number = endTag.length

  const templateArr: string[] = [] // 模板输出内容
  let styleArr: string[] = [] // 样式输出内容
  let componentsString: string = '' // 组件引用代码
  let id: number = 0 // demo 的 id
  let start: number = 0 // 字符串开始位置
  let commentStart: number = content.indexOf(startTag)
  let commentEnd: number = content.indexOf(endTag, commentStart + startTagLen)

  while (commentStart !== -1 && commentEnd !== -1) {
    templateArr.push(content.slice(start, commentStart))
    const commentContent = content.slice(commentStart + startTagLen, commentEnd)
    const html = stripTemplate(commentContent)
    const script = stripScript(commentContent, `render-demo-${id}-script`)
    const style = stripStyle(commentContent)
    seed = seed + 1
    const demoComponentContent = genInlineComponentText(seed, html, script) // 示例组件代码内容
    const demoComponentName = `render-demo-${id}` // 示例代码组件名称
    templateArr.push(`<${demoComponentName} />`)
    styleArr.push(style)
    componentsString += `${JSON.stringify(demoComponentName)}: ${demoComponentContent},`
    // 重新计算下一次的位置
    id++
    start = commentEnd + endTagLen
    commentStart = content.indexOf(startTag, start)
    commentEnd = content.indexOf(endTag, commentStart + startTagLen)
  }
  // 仅允许在 demo 不存在时，才可以在 Markdown 中写 script 标签
  // todo: 优化这段逻辑
  let pageScript = ''
  if (componentsString) {
    pageScript = `<script lang="ts">
      import * as Vue from 'vue'
      ${scriptImports?.join(os.EOL)}
      const { defineComponent } = Vue
      export default defineComponent({
        name: 'component-doc',
        components: {
          ${componentsString}
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

  if (styleArr && styleArr.length > 0) {
    styleString = `<style${styleArr.join('')}</style>`
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
