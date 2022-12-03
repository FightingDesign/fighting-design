import { createUnplugin } from 'unplugin' // https://github.com/unjs/unplugin
import { setupName } from './setup'

export const FightingSetupNamePlugin = createUnplugin(() => {
  return {
    name: 'unplugin-prefixed-name',
    enforce: 'pre',

    transformInclude(id) {
      return id.endsWith('.vue')
    },
    transform(code, id) {
      if (/\.vue$/.test(id) || /\.vue\?.*type=script.*/.test(id)) {
        return setupName.call(this, code, id)
      }
    }
  }
})

