import type { PropType, ExtractPropTypes } from 'vue'
import type { TreeData } from './interface'

export const Props = {
  /**
   * 数据
   */
  data: {
    type: Array as PropType<TreeData>,
    default: (): [] => []
  }
} as const

export type TreeProps = ExtractPropTypes<typeof Props>
