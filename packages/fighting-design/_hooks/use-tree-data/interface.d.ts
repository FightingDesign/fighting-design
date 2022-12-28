import type { TreeData } from '../../tree'
import type { ComputedRef } from 'vue'

export interface UseTreeDataReturn {
  treeData: ComputedRef<TreeData>
  flatTreeData: ComputedRef<TreeData>
  getItem: (data: TreeData, id: number) => void
}
