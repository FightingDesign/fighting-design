import type MarkdownIt from 'markdown-it'
import type Token from 'markdown-it/lib/token'

/**
 * 渲染代码片段和描述内容
 * 
 * @param md markdown 实例
 */
export const pluginCode = (md: MarkdownIt): void => {
  /**
   * 代码片段的语音
   */
  const lang = 'vue' as const
  /**
   * 默认渲染方法
   */
  const defaultRender: (
    tokens: Token[],
    idx: number,
    options: MarkdownIt.Options,
    env: any
  ) => string = md.renderer.rules.fence

  md.renderer.rules.fence = (
    tokens: Token[],
    idx: number,
    options: MarkdownIt.Options,
    env: any,
  ): string => {
    /**
     * 获取到每一项
     */
    const token: Token = tokens[idx]
    /**
     * 获取前一项
     */
    const prevToken: Token = tokens[idx - 1]
    /**
     * 检测当前是否为 demo 自定义代码段
     */
    const isInDemoContainer: boolean = prevToken && prevToken.nesting === 1 && prevToken.info.trim().match(/^demo\s*(.*)$/)

    /**
     * 如果是自定义代码段落，则继续获取里面的内容返回知道插槽内容
     * 
     * 否则返回默认的内容
     */
    if (token.info.trim() === lang && isInDemoContainer) {
      const m: string = prevToken.info.trim().match(/^demo\s*(.*)$/)
      /**
       * 获取到描述信息内容
       */
      const description: string = m && m.length > 1 ? m[1] : ''

      return `
        ${description
          ? `<template #description>
          <div>${md.renderInline(description)}</div>
        </template>`
          : ''}
        <template #highlight>
          <div v-pre class="language-${lang}">
            ${md.options.highlight(token.content, lang, '') || ''}
          </div>
        </template>`
    }

    return defaultRender(tokens, idx, options, env)
  }
}
