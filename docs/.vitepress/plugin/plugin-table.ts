import type MarkdownIt from 'markdown-it'

/**
 * 给 table 嵌套一层容器方便处理样式
 *
 * @param { Object } md markdown 实例
 */
export const PluginTable = (md: MarkdownIt): void => {
  md.renderer.rules.table_open = (): string => '<div class="vp-table__container"><table>'
  md.renderer.rules.table_close = (): string => '</table></div>'
}
