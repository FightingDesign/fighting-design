import { setBooleanProp, setObjectProp, setStringProp } from '../../_utils'
import type { ExtractPropTypes } from 'vue'
import type { FightingIcon } from '../../_interface'

export const Props = {
  /** 是否展示 */
  visible: setBooleanProp(),
  /** 加载中文案 */
  text: setStringProp(),
  /** 加载中文案颜色 */
  color: setStringProp(),
  /** 是否全屏显示 */
  fullscreen: setBooleanProp(),
  /** 自定义遮罩层背景色 */
  background: setStringProp(),
  /** 自定义 icon */
  icon: setObjectProp<FightingIcon>()
} as const

/** loading 组件 props 类型 */
export type LoadingProps = ExtractPropTypes<typeof Props>
