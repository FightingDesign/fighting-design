import { createSfcRegexp, TAG_NAME_TEMPLATE } from '@mdit-vue/plugin-sfc'
import renderDemoBlock from './render'
import type MarkdownIt from 'markdown-it'

const sfcRegexp = createSfcRegexp({ customBlocks: [TAG_NAME_TEMPLATE] })
/**
 * 提供插件
 * @param md 
 */
export const pluginRender = (md: MarkdownIt) => {
  const render = md.render.bind(md)
  md.render = (src, env) => {
    let rendered = render(src, env)
    const startTag = '<!--vue-demo:'
    const endTag = ':vue-demo-->'
    if (rendered.indexOf(startTag) !== -1 && rendered.indexOf(endTag) !== -1) {
      const { template, script, style } = renderDemoBlock(rendered) || {}
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