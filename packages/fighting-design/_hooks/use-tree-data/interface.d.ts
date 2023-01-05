import type { TreeData } from '../../tree'
import type { ComputedRef } from 'vue'

/**
 * useTreeData 返回值类型接口
 *
 * @param treeData 处理后的树形结构
 * @param flatTreeData 扁平是树形结构
 * @param getItem 获取到指定的元素进行操作
 */
export interface UseTreeDataReturn {
  treeData: ComputedRef<TreeData>
  flatTreeData: ComputedRef<TreeData>
  getItem: (data: TreeData, id: number) => void
}
