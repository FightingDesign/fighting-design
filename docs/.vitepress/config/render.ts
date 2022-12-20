import { stripScript, stripStyle, stripTemplate, genInlineComponentText } from './utils'

import os from 'os'
interface RenderComponentReturn {
  template: string
  script: string
  style: string
}

const scriptImports = [
  "import FightingIcon from '@fighting-design/fighting-icon'",
  "import FightingDesign from '../../packages/fighting-design/index.ts'"
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

  // 开始标记和结束标记
  const startTag = '<!--vue-demo:'
  const endTag = ':vue-demo-->'

  // 开始标记和结束标记的长度
  const startTagLen: number = startTag.length
  const endTagLen: number = endTag.length

  const templateArr: string[] = [] // 模板输出内容
  const styleArr: string[] = [] // 样式输出内容

  let componentsString: string = '' // 组件引用代码
  let id: number = 0 // demo 的 id
  let start: number = 0 // 字符串开始位置

  // 获取到开始位置和结束位置
  let commentStart: number = content.indexOf(startTag)
  let commentEnd: number = content.indexOf(endTag, commentStart + startTagLen)

  while (commentStart !== -1 && commentEnd !== -1) {
    seed = seed + 1

    templateArr.push(content.slice(start, commentStart))
    const commentContent: string = content.slice(commentStart + startTagLen, commentEnd)

    // 获取到 html js css 的代码段
    const html: string = stripTemplate(commentContent)
    const script: string = stripScript(commentContent, `render-demo-${id}-script`)
    const style: string = stripStyle(commentContent)

    /**
     * 示例组件代码内容
     */
    const demoComponentContent: string = genInlineComponentText(seed, html, script)
    /**
     * 示例代码组件名称
     */
    const demoComponentName = `render-demo-${id}`

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
    start = content.indexOf('</script>') + '</script>'.length
    pageScript = content.slice(0, start)
  }

  /**
   * 样式内容
   */
  const styleString = `<style>${styleArr && styleArr.join('')}</style>`

  templateArr.push(content.slice(start))

  return {
    template: templateArr.join(''),
    script: pageScript,
    style: styleString
  }
}
