import mdContainer from 'markdown-it-container'
import type MarkdownIt from 'markdown-it'
import type Token from 'markdown-it/lib/token'

/**
 * 自定义 markdown 语法
 *
 * ::: demo 代码片段展示
 *
 * @param md markdown 实例
 */
export const pluginDemo = (md: MarkdownIt): void => {
  md.use(mdContainer, 'demo', {
    validate(params: string) {
      return params.trim().match(/^demo\s*(.*)$/)
    },
    render(tokens: Token[], idx: number) {
      if (tokens[idx].nesting === 1) {
        /**
         * 获取到内容字符串
         */
        const content: string = tokens[idx + 1].type === 'fence' ? tokens[idx + 1].content : ''
        /**
         * 将 html 字符串转义展示
         *
         * \<template\> -> &lt;template&gt;
         */
        const source: string = md.utils.escapeHtml(content)

        return `<vp-demo sourceCode="${source}">${content ? `<!--vue-demo:${content}:vue-demo-->` : ''}`
      }
      return '</vp-demo>'
    }
  })
}
