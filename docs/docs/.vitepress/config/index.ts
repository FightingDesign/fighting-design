import { pluginBlock } from './plugin-block'
import { pluginCode } from './plugin-code'
import { pluginRender } from './plugin-render'
import { pluginTable } from './plugin-table'
import type MarkdownIt from 'markdown-it'

export const fightingPlugin = (md: MarkdownIt) => {
  md.use(pluginBlock)
  md.use(pluginCode)
  md.use(pluginRender)
  md.use(pluginTable)
}
