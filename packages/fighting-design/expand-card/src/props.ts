import { setBooleanProp, setStringNumberProp, setStringProp, setNumberProp, setArrayProp } from '../../_utils'
import type { ExtractPropTypes } from 'vue'
import type { ExpandCardImageList } from './interface'

export const Props = {
  /** 需要展示的图片列表 */
  imageList: setArrayProp<ExpandCardImageList>([]),
  /**是否显示圆角 */
  round: setBooleanProp(),
  /** 当前显示的索引 */
  expandIndex: setNumberProp(0),
  /** 左下角文字的颜色 */
  color: setStringProp(),
  /** 是否纵向排列 */
  vertical: setBooleanProp(),
  /** 自定义宽度 */
  width: setStringNumberProp(),
  /** 自定义高度 */
  height: setStringNumberProp()
} as const

/** expand-card 组件 props 类型 */
export type ExpandCardProps = ExtractPropTypes<typeof Props>
