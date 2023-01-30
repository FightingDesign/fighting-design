export type { CheckboxProps } from './props'

/** 绑定值类型 */
export type CheckboxModelValue = boolean | 'true' | 'false'

/** label 类型 */
export type CheckboxLabel = string | number | boolean

/**
 * 绑定值发生改变时触发的回调接口
 *
 * @param { string | number | boolean } val 最新值
 */
export type CheckboxChange = (val: CheckboxLabel) => void
