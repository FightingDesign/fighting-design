import {
  setBooleanProp,
  setStringProp,
  setStringNumberProp,
  setObjectProp
} from '../../_utils'
import type { ExtractPropTypes } from 'vue'
import type { FightingIcon } from '../../_interface'

export const Props = {
  /** icon 内容 */
  icon: setObjectProp<FightingIcon>(),
  /**
   * 文字大小
   *
   * 可控制 svg 和文字
   */
  fontSize: setStringNumberProp(),
  /**
   * 文字颜色
   *
   * 可控制 svg 和文字
   */
  color: setStringProp(),
  /** 跳转的路径 */
  to: setStringProp(),
  /** 唯一标识 */
  name: setStringNumberProp(),
  /** 是否禁用 */
  disabled: setBooleanProp()
} as const

/** menu-item 组件 props 类型 */
export type MenuItemProps = ExtractPropTypes<typeof Props>
