import type { TreeItemModel } from '../components'
import type { FightingIcon } from '../../_interface'

export type { TreeProps } from './props'

/**
 * 树形结构每一项类型接口
 *
 * @param { string } label label
 * @param { number | string } value 多选 checkbox 绑定的值
 * @param { boolean } disabled 是否禁用当前标签
 * @param { Object } icon 自定义 icon
 * @param { Array } [children] 孩子节点
 */
export interface TreeDataItem {
  label: string
  value?: number | string
  disabled?: boolean
  icon?: FightingIcon
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
export type TreeClickLabel = (
  evt: MouseEvent,
  model: TreeItemModel,
  isOpen: boolean,
  tree: TreeItemModel[]
) => void

/**
 * 注入的依赖项类型
 *
 * @param { Function } onClickLabel 点击每一项 label 执行的回调方
 * @param { boolean } isCheck 是否可以选择
 * @param { number } offset 子节点偏移量
 * @param { Array } tree 格式化后的树形数据
 */
export interface TreeProvide {
  onClickLabel: TreeClickLabel
  isCheck: boolean
  offset: number
  tree: TreeItemModel[]
}
