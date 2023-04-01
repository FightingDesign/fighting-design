import type { VNode } from 'vue'

export type { SelectProps } from './select'

/** 绑定值类型 */
export type SelectModelValue = string | number | boolean

/**
 * 绑定值发生改变时触发的回调
 *
 * @param { string | number | boolean } newValue 最新 value
 * @param { string | number | boolean } newLabel 最新 label
 * @param { Object } evt 事件对象
 */
export type SelectChange = (
  newValue: SelectModelValue,
  newLabel: SelectModelValue,
  evt: MouseEvent
) => void

/**
 * 提供给自组件注入的依赖项类型接口
 *
 * @param { Function } setValue 设置新的选中值
 */
export interface SelectProvide {
  setValue: SelectChange
}

/** 获取子元素插槽类型接口 */
export interface SelectChildren extends VNode {
  children: {
    default(): VNode[]
  }
}
