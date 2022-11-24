import { createSfcRegexp, TAG_NAME_TEMPLATE } from '@mdit-vue/plugin-sfc'
import renderDemoBlock from './render'
import TableContainer from './table'
import type MarkdownIt from 'markdown-it'
import type Token from 'markdown-it/lib/token'
import type Renderer from 'markdown-it/lib/renderer'
import mdContainer from 'markdown-it-container'
import type { DemoblockPluginOptions } from '../types'

export const blockPlugin = (md: MarkdownIt, options: DemoblockPluginOptions) => {
  md.use(mdContainer, 'demo', {
    validate(params: string) {
      return params.trim().match(/^demo\s*(.*)$/)
    },
    render(tokens: Token[], idx: number) {
      // const m = tokens[idx].info.trim().match(/^demo\s*(.*)$/)
      const m = tokens[idx].info.trim().match(/^demo\s*(.*)$/)
      if (tokens[idx].nesting === 1) {
        // 获取描述信息
        const description = m && m.length > 1 ? m[1] : ''

        // const description = m && m.length > 1 ? m[1] : ''
        const content = tokens[idx + 1].type === 'fence' ? tokens[idx + 1].content : ''
        // return `<demo customClass="${options.customClass}" sourceCode="${md.utils.escapeHtml(
        //   content
        // )}">${content ? `<!--vue-demo:${content}:vue-demo-->` : ''}`
        // return `<vp-demo source="${encodeURIComponent(source)}" description="${description}">`
        return `<vp-demo source="${md.utils.escapeHtml(content)}" description="${description}">`
      }
      return '</vp-demo>'
      // return '</demo>'
    }
  })
}

export const codePlugin = (md: MarkdownIt, options: DemoblockPluginOptions) => {
  const lang = options?.lang || 'vue'
  const defaultRender = md.renderer.rules.fence
  md.renderer.rules.fence = (
    tokens: Token[],
    idx: number,
    options: MarkdownIt.Options,
    env: any,
    self: Renderer
  ) => {
    const token = tokens[idx]
    // 判断该 fence 是否在 :::demo 内
    const prevToken = tokens[idx - 1]
    const isInDemoContainer =
      prevToken && prevToken.nesting === 1 && prevToken.info.trim().match(/^demo\s*(.*)$/)
    if (token.info.trim() === lang && isInDemoContainer) {
      const m = prevToken.info.trim().match(/^demo\s*(.*)$/)
      const description = m && m.length > 1 ? m[1] : ''
      return `
        ${description
          ? `<template #description>
          <div>${md.renderInline(description)}</div>
        </template>`
          : ''
        }
        <template #highlight>
          <div v-pre class="language-${lang} abc">
            ${md.options.highlight?.(token.content, lang, '') || ''}
          </div>
        </template>`
    }
    return defaultRender?.(tokens, idx, options, env, self) as string
  }
}


const sfcRegexp = createSfcRegexp({ customBlocks: [TAG_NAME_TEMPLATE] })

export const renderPlugin = (md: MarkdownIt, options: DemoblockPluginOptions) => {
  const render = md.render.bind(md)
  md.render = (src, env) => {
    let rendered = render(src, env)
    const startTag = '<!--vue-demo:'
    const endTag = ':vue-demo-->'
    if (rendered.indexOf(startTag) !== -1 && rendered.indexOf(endTag) !== -1) {
      const { template, script, style } = renderDemoBlock(rendered, options) || {}
      const templateSfcBlock = `<template>${template}</template>`.match(sfcRegexp)?.groups
      const scriptSfcBlock = script?.match(sfcRegexp)?.groups
      const styleSfcBlock = style?.match(sfcRegexp)?.groups
      env.sfcBlocks.template = templateSfcBlock || null
      env.sfcBlocks.script = scriptSfcBlock || null
      if (scriptSfcBlock) {
        env.sfcBlocks.scripts.push(scriptSfcBlock)
      }
      if (styleSfcBlock) {
        env.sfcBlocks.styles.push(styleSfcBlock)
      }
      rendered = template!
    }
    return rendered
  }
}

// export const demoblock = (md: MarkdownIt, options: DemoblockPluginOptions = {}) => {
//   md.use(blockPlugin, options)
//   md.use(codePlugin, options)
//   md.use(renderPlugin, options)
// }


export const demoblock = (md: MarkdownIt) => {
  md.use(TableContainer)
  md.use(blockPlugin)
  md.use(codePlugin)
  md.use(renderPlugin)
}