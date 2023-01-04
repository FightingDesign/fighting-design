import type { ExtractPropTypes, InjectionKey, PropType } from 'vue'
import type { FightingIcon } from '../../_interface'

export const Props = {
  /** 自定义分隔符 */
  separator: {
    type: Object as PropType<FightingIcon>,
    default: (): null => null
  },
  /** 导航文字颜色 */
  fontColor: {
    type: String,
    default: (): null => null
  },
  /** icon 颜色 */
  iconColor: {
    type: String,
    default: (): null => null
  },
  /** 自定义文字大小 */
  fontSize: {
    type: [String, Number] as PropType<string | number>,
    default: (): null => null
  }
} as const

export type BreadcrumbProps = ExtractPropTypes<typeof Props>

export const BREADCRUMB_PROPS_KEY: InjectionKey<BreadcrumbProps> = Symbol('breadcrumb-props-key')
