import type { PropType, ExtractPropTypes } from 'vue'
import type { TreeDataInterface } from './interface'

export const Props = {
  /**
   * 数据
   */
  data: {
    type: Array as PropType<TreeDataInterface>,
    default: (): [] => []
  }
} as const

export type TreePropsType = ExtractPropTypes<typeof Props>
