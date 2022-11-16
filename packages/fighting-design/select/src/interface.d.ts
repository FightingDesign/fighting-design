import type { VNode } from 'vue'

export type { SelectPropsType } from './select'

export type SelectModelValueType = string | number | boolean

/**
 * 设置新的选中值方法类型接口
 * 
 * 需要传入一个新的值 newVal，无返回值
 */
export interface SelectSetValueInterface {
  (newVal: string, newLabel: string | number | boolean): void
}

/**
 * 提供给自组件注入的依赖项类型接口
 * 
 * setValue 设置新的选中值
 */
export interface SelectProvideInterface {
  setValue: SelectSetValueInterface
}

export interface SelectChildrenInterface extends VNode {
  children: {
    default(): VNode[]
  }
}
