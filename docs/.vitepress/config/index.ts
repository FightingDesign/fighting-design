import { pluginDemo } from './plugin-demo'
import { pluginCode } from './plugin-code'
import { pluginRender } from './plugin-render'
import { pluginTable } from './plugin-table'
import type MarkdownIt from 'markdown-it'

/**
 * 导出自定义插件方法
 *
 * @param md markdown 实例
 */
export const fightingPlugin = (md: MarkdownIt): void => {
  md.use(pluginDemo)
  md.use(pluginCode)
  md.use(pluginRender)
  md.use(pluginTable)
}
