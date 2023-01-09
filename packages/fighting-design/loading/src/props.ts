import { setBooleanProp } from '../../_utils'
import type { ExtractPropTypes, PropType } from 'vue'
import type { FightingIcon } from '../../_interface'

export const Props = {
  /** 是否展示 */
  visible: setBooleanProp(),
  /** 加载中文案 */
  text: {
    type: String
  },
  /** 加载中文案颜色 */
  fontColor: {
    type: String
  },
  /** 是否全屏显示 */
  fullscreen: {
    type: Boolean
  },
  /** 自定义遮罩层背景色 */
  background: {
    type: String
  },
  /** 自定义 icon */
  icon: {
    type: Object as PropType<FightingIcon>,
    default: (): null => null
  }
} as const

export type LoadingProps = ExtractPropTypes<typeof Props>
