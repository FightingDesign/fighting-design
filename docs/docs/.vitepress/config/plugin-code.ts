import type MarkdownIt from 'markdown-it'
import type Token from 'markdown-it/lib/token'
import type Renderer from 'markdown-it/lib/renderer'

export const pluginCode = (md: MarkdownIt): void => {
  const lang = 'vue'
  const defaultRender = md.renderer.rules.fence
  md.renderer.rules.fence = (
    tokens: Token[],
    idx: number,
    options: MarkdownIt.Options,
    env: any,
    self: Renderer
  ): string => {
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