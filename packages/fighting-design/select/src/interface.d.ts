import type { VNode } from 'vue'

export type { SelectProps } from './select'

/** 绑定值类型 */
export type SelectModelValue = string | number | boolean

/**
 * 提供给自组件注入的依赖项类型接口
 *
 * @param { Function } setValue 设置新的选中值
 */
export interface SelectProvide {
  setValue(newValue: SelectModelValue, newLabel: SelectModelValue): void
}

/** 获取子元素插槽类型接口 */
export interface SelectChildren extends VNode {
  children: {
    default(): VNode[]
  }
}
