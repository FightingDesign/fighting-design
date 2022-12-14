import { pluginDemo } from './plugin-demo'
import { pluginCode } from './plugin-code'
import { pluginRender } from './plugin-render'
import { pluginTable } from './plugin-table'
import type MarkdownIt from 'markdown-it'

export const fightingPlugin = (md: MarkdownIt) => {
  md.use(pluginDemo)
  md.use(pluginCode)
  md.use(pluginRender)
  md.use(pluginTable)
}
