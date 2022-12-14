import { createSfcRegexp, TAG_NAME_TEMPLATE } from '@mdit-vue/plugin-sfc'
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
   * @param src 文档内容
   * @param env 
   * @returns 
   */
  md.render = (src: string, env): string => {
    /**
     * 获取到整个 markdown 的内容
     */
    let rendered: string = render(src, env)
    /**
     * 开始标签
     */
    const startTag = '<!--vue-demo:' as const
    /**
     * 结束标签
     */
    const endTag = ':vue-demo-->' as const

    /**
     * 判断文档中是否有开始标签和结束标签
     */
    if (rendered.includes(startTag) && rendered.includes(endTag)) {
      const { template, script, style } = renderComponent(rendered) || {}

      const templateSfc = `<template>${template}</template>`.match(sfcRegexp)?.groups
      const scriptSfc = script?.match(sfcRegexp)?.groups
      const styleSfc = style?.match(sfcRegexp)?.groups

      env.sfcBlocks.template = templateSfc || null
      env.sfcBlocks.script = scriptSfc || null

      scriptSfc && env.sfcBlocks.scripts.push(scriptSfc)
      styleSfc && env.sfcBlocks.styles.push(styleSfc)

      rendered = template as string
    }

    return rendered
  }
}