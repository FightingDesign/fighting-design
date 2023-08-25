import type { FightingIcon } from '../../../_interface'

/**
 * 子数每一项的类型接口
 *
 * @param { string } label 标签
 * @param { number } __level 层级
 * @param { number | string } value 多选 checkbox 绑定的值
 * @param { boolean } disabled 是否禁用
 * @param { Array } [children] 子节点
 */
export interface TreeItemModel {
  label: string
  __level: number
  icon?: FightingIcon
  value?: number | string
  disabled?: boolean
  children?: TreeItemModel[]
}
