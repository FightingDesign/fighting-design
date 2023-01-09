import { setBooleanProp } from '../../_utils'
import type { PropType, ExtractPropTypes } from 'vue'
import type { ExpandCardImageList } from './interface'

export const Props = {
  /** 需要展示的图片列表 */
  imageList: {
    type: Array as PropType<ExpandCardImageList>,
    default: (): string[] => []
  },
  /**是否显示圆角 */
  round: setBooleanProp(),
  /** 当前显示的索引 */
  expandIndex: {
    type: Number,
    default: (): number => 0
  },
  /** 左下角文字的颜色 */
  color: {
    type: String,
    default: (): null => null
  },
  /** 自定义宽度 */
  width: {
    type: [String, Number] as PropType<string | number>,
    default: (): null => null
  },
  /** 自定义高度 */
  height: {
    type: [String, Number] as PropType<string | number>,
    default: (): null => null
  }
} as const

export type ExpandCardProps = ExtractPropTypes<typeof Props>
