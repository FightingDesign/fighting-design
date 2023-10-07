import {
  setBooleanProp,
  setNumberProp,
  setStringNumberProp,
  setStringProp
} from '../../_utils'
import { FIGHTING_SIZE } from '../../_tokens'
import type { ExtractPropTypes } from 'vue'
import type { FightingSize } from '../../_interface'

export const Props = {
  /** 是否带圆角的 */
  round: setBooleanProp(),
  /** 是否带有差异长度 */
  difference: setBooleanProp(),
  /** 是否展示波浪动画 */
  animated: setBooleanProp(),
  /** 渲染多行占位图 */
  rows: setNumberProp(1),
  /** 为 true 时，显示占位图。false 展示子组件 */
  loading: setBooleanProp(),
  /** 间距 */
  rowGap: setStringNumberProp(),
  /**
   * 尺寸
   *
   * @values large middle small mini
   * @default middle
   */
  size: setStringProp<FightingSize>('middle', (val: FightingSize): boolean => {
    return FIGHTING_SIZE.includes(val)
  })
} as const

/** skeleton 组件 props 类型 */
export type SkeletonProps = ExtractPropTypes<typeof Props>
