import type { imageListType, round } from './interface'
import type { PropType, ExtractPropTypes } from 'vue'

export const Props = {
  // 需要展示的图片列表
  imageList: {
    type: Array as PropType<imageListType>,
    default: (): imageListType => []
  },
  // 图片是否圆角显示,可以是true 或者false。也可以是具体的圆角值
  round: {
    type: [Boolean, Number] as PropType<round>,
    default: (): boolean => true
  },
  // 当前展开第几个图片
  expandIndex: {
    type: Number,
    default: (): number => 0
  },
  color: {
    type: String,
    default: (): string => '#fff'
  }
} as const

export type FPropsType = ExtractPropTypes<typeof Props>
