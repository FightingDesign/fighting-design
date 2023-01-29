import { basename } from 'path'
import MagicString from 'magic-string' //
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

  /**
   * 或者文件内容字符串
   *
   * @see MagicString https://github.com/rich-harris/magic-string
   * @returns 内容字符串
   */
  const str = (): MagicString => s || (s = new MagicString(code))
  const { descriptor } = parse(code)

  if (!descriptor.script && descriptor.scriptSetup) {
    const result: SFCScriptBlock = compileScript(descriptor, { id })
    /** 获取到组件的 name */
    const name = result.attrs.name
    /** 获取到组件的 lang */
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
