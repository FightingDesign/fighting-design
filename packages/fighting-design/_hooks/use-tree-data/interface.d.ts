import type { ComputedRef } from 'vue'

/**
 * 处理数据结果之前的类型接口
 *
 * @param label label
 * @param level 标识
 * @param open 是否打开
 * @param isChild 是否带有子节点
 * @param show 是否展示
 * @param id id
 * @param children 子节点
 */
export interface FormatTreeData {
  label: string
  level?: number
  open?: boolean
  isChild?: boolean
  show?: boolean
  id?: number
  children?: FormatTreeData[]
}

/**
 * 处理数据结果之后的类型接口
 *
 * @param label label
 * @param level 标识
 * @param open 是否打开
 * @param isChild 是否带有子节点
 * @param show 是否展示
 * @param id id
 * @param children 子节点
 */
export interface FlatTreeData {
  label: string
  level: number
  open: boolean
  isChild: boolean
  show: boolean
  id: number
  children?: FlatTreeData[]
}

/**
 * useTreeData 返回值类型接口
 *
 * @param treeData 处理后的树形结构
 * @param flatTreeData 扁平是树形结构
 * @param getItem 获取到指定的元素进行操作
 */
export interface UseTreeDataReturn {
  treeData: ComputedRef<FlatTreeData[]>
  flatTreeData: ComputedRef<FlatTreeData[]>
  getItem: (data: FormatTreeData[], id: number) => void
}
