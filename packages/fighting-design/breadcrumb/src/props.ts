import { setStringProp, setStringNumberProp } from '../../_utils'
import type { ExtractPropTypes, InjectionKey, PropType } from 'vue'
import type { FightingIcon } from '../../_interface'

export const Props = {
  /** 自定义分隔符 */
  separator: {
    type: Object as PropType<FightingIcon>,
    default: (): null => null
  },
  /** 导航文字颜色 */
  fontColor: setStringProp(),
  /** icon 颜色 */
  iconColor: setStringProp(),
  /** 自定义文字大小 */
  fontSize: setStringNumberProp()
} as const

export type BreadcrumbProps = ExtractPropTypes<typeof Props>

export const BREADCRUMB_PROPS_KEY: InjectionKey<BreadcrumbProps> = Symbol('breadcrumb-props-key')
