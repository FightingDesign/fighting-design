import type { VNode } from 'vue'

export type { SelectProps } from './props'

/** 绑定值类型 */
export type SelectModelValue = string | number

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
 * 提供给子组件注入的依赖项类型接口
 *
 * @param { Function } setValue 设置新的选中值
 * @param { Object } modelValue 绑定的值
 * @param { Object } childrenLabels 绑定的值
 * @param { Object } filter 绑定的值
 */
export interface SelectProvide {
  setValue: SelectChange
  modelValue: SelectModelValue
  childrenLabels: { slot: string; show: boolean }[]
  filter: boolean
}

/** 获取子元素插槽类型接口 */
export interface SelectChildren extends VNode {
  children: {
    default(): VNode[]
  }
}
