import type { ExtractPropTypes, PropType } from 'vue'

export const Props = {
  /**
   * 原生属性
   * 
   * @see role https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles
   */
  role: {
    type: String,
    default: (): null => null
  },
  /**
   * 原生属性
   * 
   * @see padding https://developer.mozilla.org/en-US/docs/Web/CSS/padding
   */
  padding: {
    type: [String, Number] as PropType<string | number>,
    default: (): null => null
  },
  /**
   * 原生属性
   * 
   * @see width https://developer.mozilla.org/en-US/docs/Web/CSS/width
   */
  width: {
    type: [String, Number] as PropType<string | number>,
    default: (): null => null
  },
  /**
   * 原生属性
   * 
   * @see height https://developer.mozilla.org/en-US/docs/Web/CSS/height
   */
  height: {
    type: [String, Number] as PropType<string | number>,
    default: (): null => null
  },
  /**
   * 原生属性
   * 
   * @see background https://developer.mozilla.org/en-US/docs/Web/CSS/background
   */
  background: {
    type: String,
    default: (): null => null
  },
  /**
   * 原生属性
   * 
   * @see display https://developer.mozilla.org/en-US/docs/Web/CSS/display
   */
  display: {
    type: String,
    default: (): null => null
  }
} as const

export type BoxProps = ExtractPropTypes<typeof Props>
