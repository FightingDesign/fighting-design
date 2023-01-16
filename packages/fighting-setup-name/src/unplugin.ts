import { createUnplugin } from 'unplugin'
import { setupName } from './setup'
import type { Thenable, TransformResult } from 'unplugin'

/**
 * 设置插件
 * 
 * @see createUnplugin https://github.com/unjs/unplugin
 */
export const FightingSetupNamePlugin = createUnplugin(() => {
  return {
    name: 'unplugin-prefixed-name',
    enforce: 'pre',

    transformInclude: (id: string): (boolean | null | undefined) | undefined => {
      return id.endsWith('.vue')
    },
    transform: (code: string, id: string): Thenable<TransformResult> | undefined => {
      if (/\.vue$/.test(id) || /\.vue\?.*type=script.*/.test(id)) {
        return setupName.call(this, code, id)
      }
    }
  }
})
