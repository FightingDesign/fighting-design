import type { CheckboxGroupProps } from './props'

export type { CheckboxGroupProps } from './props'

/**
 * 绑定值发生改变时触发的回调接口
 *
 * @param { string[] } val 最新值
 */
export type CheckboxGroupChange = (val: string[]) => void

/** 注入的依赖项类型 */
export type CheckboxGroupProvide = CheckboxGroupProps & {
  setChange: (val: CheckboxGroupLabel) => void
}
