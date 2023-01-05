import type { PropType, ExtractPropTypes } from 'vue'

export const Props = {
  /**
   * 自定义内边距
   *
   * @see padding https://developer.mozilla.org/zh-CN/docs/Web/CSS/padding
   */
  padding: {
    type: [String, Number] as PropType<string | number>,
    default: (): null => null
  }
} as const

export type MainProps = ExtractPropTypes<typeof Props>
