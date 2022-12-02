import type { VNode } from 'vue'

export type { SelectPropsType } from './select'

export type SelectModelValueType = string | number | boolean

/**
 * 提供给自组件注入的依赖项类型接口
 *
 * setValue 设置新的选中值
 */
export interface SelectProvideInterface {
  setValue: SelectSetValueInterface
}

/**
 * 获取子元素插槽类型接口
 */
export interface SelectChildrenInterface extends VNode {
  children: {
    default(): VNode[]
  }
}
