import { setObjectProp } from '../../../_utils'
import type { TreeItemModel } from './interface'

export const Props = {
  /** 每一项子节点 */
  model: setObjectProp<TreeItemModel>()
} as const
