import {
  setBooleanProp,
  setStringProp,
  setObjectProp,
  setStringNumberProp,
  setFunctionProp
} from '../../_utils'
import type { ExtractPropTypes } from 'vue'
import type { HandleEvent, FightingIcon } from '../../_interface'

export const Props = {
  /** 返回图标 */
  icon: setObjectProp<FightingIcon>(),
  /** 返回图标大小 */
  iconSize: setStringNumberProp('16px'),
  /** 返回文本 */
  backText: setStringProp(),
  /** 标题文本 */
  title: setStringProp(),
  /** 标题是否粗体 */
  titleBold: setBooleanProp(),
  /** 标题颜色 */
  titleColor: setStringProp(),
  /**标题是否居中 */
  titleCenter: setBooleanProp(),
  /** 副标题文本 */
  subtitle: setStringProp(),
  /** 点击左侧区域触发 */
  onBack: setFunctionProp<HandleEvent>()
} as const

/** page-header 组件 props 类型 */
export type PageHeaderProps = ExtractPropTypes<typeof Props>
