import { setArrayProp } from '../../_utils'
import type { ExtractPropTypes } from 'vue'
import type { TreeData } from './interface'

export const Props = {
  /** 数据 */
  data: setArrayProp<TreeData>([])
} as const

export type TreeProps = ExtractPropTypes<typeof Props>
