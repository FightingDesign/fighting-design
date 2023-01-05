// 像向导一样操纵字符串
import { basename } from 'path'
import MagicString from 'magic-string' // https://github.com/rich-harris/magic-string
import { compileScript, parse } from '@vue/compiler-sfc'
import type { SourceMap } from 'magic-string'
import type { SFCScriptBlock } from '@vue/compiler-sfc'

/** setupName 方法返回值类型接口 */
export interface SetupNameReturn {
  map: SourceMap
  code: string
}

/**
 * 设置组件名
 *
 * @param code 文件代码段
 * @param id 文件路径
 */
export const setupName = (code: string, id: string): SetupNameReturn | null => {
  let s: MagicString | undefined
  const str = (): MagicString => s || (s = new MagicString(code))
  const { descriptor } = parse(code)

  if (!descriptor.script && descriptor.scriptSetup) {
    const result: SFCScriptBlock = compileScript(descriptor, { id })
    const name = result.attrs.name
    const lang = result.attrs.lang

    if (name) {
      str().appendLeft(
        0,
        `<script ${lang ? `lang="${lang}"` : ''}>
import { defineComponent } from 'vue'
export default defineComponent({
  ${name ? `name: "${name}",` : ''}
})
</script>\n`
      )
    }

    const map = str().generateMap({ hires: true })
    const filename = basename(id)

    map.file = filename
    map.sources = [filename]

    return {
      map,
      code: str().toString()
    }
  } else {
    return null
  }
}
