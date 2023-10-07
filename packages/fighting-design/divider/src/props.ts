import { setBooleanProp, setStringNumberProp, setStringProp } from '../../_utils'
import type { ExtractPropTypes } from 'vue'
import type { DividerPosition, DividerType } from './interface'

export const Props = {
  /**
   * 文字显示位置
   * @values left center right
   * @default center
   */
  position: setStringProp<DividerPosition>(
    'center',
    (value: DividerPosition): boolean => {
      return (['left', 'center', 'right'] as const).includes(value)
    }
  ),
  /** 是否为竖线 */
  vertical: setBooleanProp(),
  /** 线条颜色 */
  color: setStringProp(),
  /** 文字颜色 */
  fontColor: setStringProp(),
  /** 上下边距 */
  margin: setStringNumberProp(),
  /** 自定义高度 */
  height: setStringNumberProp(),
  /** 自定义背景颜色 */
  background: setStringProp(),
  /**
   * 分隔符类型
   *
   * @values dashed dotted double solid
   * @default solid
   */
  type: setStringProp<DividerType>('solid', (value: DividerType): boolean => {
    return (['dashed', 'dotted', 'double', 'solid'] as const).includes(value)
  })
} as const

/** divider 组件 props 类型 */
export type DividerProps = ExtractPropTypes<typeof Props>
