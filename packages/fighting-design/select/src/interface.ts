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
 * 值在改变之前的回调类型
 * 
 * @param { string | number } value 需要改变的值
 * @param { string | number } label 需要改变的标签
 */
export type SelectBeforeChange = (value: SelectModelValue, label: SelectModelValue) => Promise<boolean>

/**
 * 提供给子组件注入的依赖项类型接口
 *
 * @param { Object } modelValue 绑定的值
 * @param { boolean } filter 绑定的值
 * @param { boolean } isTrigger 是否触发
 * @param { boolean } isFiltering 是否正在搜索
 * @param { string } inputValue 文本框绑定的值
 * @param { Function } setValue 设置新的选中值
 * @param { Function } onBeforeChange 在值改变之前执行的回调
 */
export interface SelectProvide {
  modelValue: SelectModelValue
  filter: boolean
  isTrigger: boolean
  isFiltering: boolean
  inputValue: string
  setValue: SelectChange
  onBeforeChange: SelectBeforeChange
}
