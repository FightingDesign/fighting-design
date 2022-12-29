import { createSfcRegexp, TAG_NAME_TEMPLATE } from '@mdit-vue/plugin-sfc' // https://github.com/mdit-vue/mdit-vue
import { renderComponent } from './render'
import type MarkdownIt from 'markdown-it'

/**
 * 将字符串内容渲染成为组件
 *
 * @param md markdown 实例
 */
export const pluginRender = (md: MarkdownIt): void => {
  const sfcRegexp: RegExp = createSfcRegexp({ customBlocks: [TAG_NAME_TEMPLATE] })
  const render = md.render.bind(md)

  /**
   *
   * @param content 文档内容
   * @param env 环境对象
   */
  md.render = (content: string, env): string => {
    /**
     * 获取到整个 markdown 的内容
     */
    let rendered: string = render(content, env)

    // 开始和结束标签
    const startTag = '<!--vue-demo:'
    const endTag = ':vue-demo-->'

    /**
     * 判断文档中是否有开始标签和结束标签
     */
    if (rendered.includes(startTag) && rendered.includes(endTag)) {
      const { template, script, style } = renderComponent(rendered) || {}

      const templateSfc = `<template>${template}</template>`.match(sfcRegexp)?.groups
      const scriptSfc = script?.match(sfcRegexp)?.groups
      const styleSfc = style?.match(sfcRegexp)?.groups

      env.sfcBlocks.template = templateSfc
      env.sfcBlocks.script = scriptSfc

      scriptSfc && env.sfcBlocks.scripts.push(scriptSfc)
      styleSfc && env.sfcBlocks.styles.push(styleSfc)

      rendered = template as string
    }

    return rendered
  }
}
