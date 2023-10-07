import {
  setBooleanProp,
  setStringProp,
  setStringNumberProp,
  setFunctionProp
} from '../../_utils'
import { FIGHTING_SIZE } from '../../_tokens'
import type { ExtractPropTypes } from 'vue'
import type { ToolbarClick } from './interface'
import type { FightingSize } from '../../_interface'

export const Props = {
  /** 显示为圆角 */
  round: setBooleanProp(),
  /**
   * 尺寸
   *
   * @values large middle small mini
   * @default middle
   */
  size: setStringProp<FightingSize>('middle', (val: FightingSize): boolean => {
    return FIGHTING_SIZE.includes(val)
  }),
  /** 自定义背景颜色 */
  background: setStringProp(),
  /** 字体颜色 */
  textColor: setStringProp(),
  /** 是否固定定位 */
  fixed: setBooleanProp(),
  /** 自定义宽度 */
  width: setStringNumberProp(),
  /** 自定义高度 */
  height: setStringNumberProp(),
  /** 点击之后触发的回调 */
  onClick: setFunctionProp<ToolbarClick>()
} as const

/** toolbar 组件 props 类型 */
export type ToolbarProps = ExtractPropTypes<typeof Props>
