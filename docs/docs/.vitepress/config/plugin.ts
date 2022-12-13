// 参考 https://github.com/element-plus/element-plus/blob/dev/website/md-loader/index.js
// 参考 https://github.com/calebman/vuepress-plugin-demo-container/blob/master/src/index.js
import mdContainer from 'markdown-it-container'
import renderDemoBlock from './render'
import { tablePlugin } from './table'
import { createSfcRegexp, TAG_NAME_TEMPLATE } from '@mdit-vue/plugin-sfc'
import type MarkdownIt from 'markdown-it'
import type Token from 'markdown-it/lib/token'
import type Renderer from 'markdown-it/lib/renderer'
import type { DemoBlockPluginOptions } from '../types/index'

export const blockPlugin = (md: MarkdownIt, options: DemoBlockPluginOptions) => {
  md.use(mdContainer, 'demo', {
    validate(params: string) {
      return params.trim().match(/^demo\s*(.*)$/)
    },
    render(tokens: Token[], idx: number) {
      if (tokens[idx].nesting === 1) {
        const content = tokens[idx + 1].type === 'fence' ? tokens[idx + 1].content : ''
        return `<demo sourceCode="${md.utils.escapeHtml(
          content
        )}">${content ? `<!--vue-demo:${content}:vue-demo-->` : ''}`
      }
      return '</demo>'
    }
  })
}

export const codePlugin = (md: MarkdownIt, options: DemoBlockPluginOptions) => {
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
          <div v-pre class="language-${lang}">
            ${md.options.highlight?.(token.content, lang, '') || ''}
          </div>
        </template>`
    }
    return defaultRender?.(tokens, idx, options, env, self) as string
  }
}

const sfcRegexp = createSfcRegexp({ customBlocks: [TAG_NAME_TEMPLATE] })
/**
 * 提供插件
 * @param md 
 * @param options 
 */
export const renderPlugin = (md: MarkdownIt, options: DemoBlockPluginOptions) => {
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

export const fightingPlugin = (md: MarkdownIt) => {
  md.use(blockPlugin)
  md.use(codePlugin)
  md.use(tablePlugin)
  md.use(renderPlugin)
}
