import type { RadioGroundProps } from './props'

export type { RadioGroundProps } from './props'

/** 绑定值类型接口 */
export type RadioModelValue = string | number | boolean

/**
 * 改变时触发的回调类型接口
 *
 * @param { string | number | boolean } value 改变的值
 */
export type RadioChange = (value: RadioModelValue) => void

/**
 * 注入的依赖项类型接口
 */
export type RadioGroundInject = RadioGroundProps & {
  changeEvent: (value: RadioModelValue) => void
}
