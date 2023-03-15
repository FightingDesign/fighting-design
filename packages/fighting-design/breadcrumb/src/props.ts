import { setStringProp, setStringNumberProp, setObjectProp } from '../../_utils'
import type { ExtractPropTypes, InjectionKey } from 'vue'
import type { FightingIcon } from '../../_interface'

export const Props = {
  /** 自定义分隔符 */
  separator: setObjectProp<FightingIcon>(),
  /** 导航文字颜色 */
  fontColor: setStringProp(),
  /** icon 颜色 */
  iconColor: setStringProp(),
  /** 自定义文字大小 */
  fontSize: setStringNumberProp()
} as const

/** breadcrumb 组件 props 类型 */
export type BreadcrumbProps = ExtractPropTypes<typeof Props>

/** breadcrumb 注入的依赖项 */
export const BREADCRUMB_PROPS_KEY: InjectionKey<BreadcrumbProps> =
  Symbol('breadcrumb-props-key')
