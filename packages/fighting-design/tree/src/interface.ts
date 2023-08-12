import type { TreeItemModel } from '../components'

export type { TreeProps } from './props'

/**
 * 树形结构每一项类型接口
 *
 * @param { string } label label
 * @param { boolean } disabled 是否禁用当前标签
 * @param { Array } [children] 孩子节点
 */
export interface TreeDataItem {
  label: string
  disabled?: boolean
  children?: TreeDataItem[]
}

/** 树形结构数组类型 */
export type TreeData = TreeDataItem[]

/**
 * 点击每一项 label 执行的回调方法类型
 * 
 * @param { Object } evt 事件对象
 * @param { string } label label
 * @param { number } level 层级
 * @param { Object } isOpen 展开状态
 * @param { Array } tree 格式化后的树形数据
 */
export type TreeClickLabel = (evt: MouseEvent, model: TreeItemModel, isOpen: boolean, tree: TreeItemModel[]) => void

/**
 * 注入的依赖项类型
 * 
 * @param { Function } onClickLabel 点击每一项 label 执行的回调方
 * @param { Array } tree 格式化后的树形数据
 */
export interface TreeProvide {
  onClickLabel: TreeClickLabel
  tree: TreeItemModel[]
}
