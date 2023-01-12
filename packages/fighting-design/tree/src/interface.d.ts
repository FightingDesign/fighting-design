export type { TreeProps } from './props'

/**
 * 树形结构每一项类型接口
 *
 * @param label label
 * @param children 孩子节点
 */
export interface TreeDataItem {
  label: string
  children?: TreeDataItem[]
}

/** 树形结构数组类型 */
export type TreeData = TreeDataItem[]
