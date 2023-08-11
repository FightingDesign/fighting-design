/**
 * 子数每一项的类型接口
 * 
 * @param { string } label 标签
 * @param { Array } [children] 子节点
 */
export interface TreeItemModel {
  label: string
  children?: TreeItemModel[]
}
