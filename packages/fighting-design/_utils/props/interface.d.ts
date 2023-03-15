/**
 * 校验器类型
 *
 * @param { * } val 校验的值
 */
export type Validator = (val) => boolean

/**
 * 返回值类型接口
 *
 * @param { Object } type 参数类型
 * @param { Function } default 默认值
 * @param { Function } validator 校验器
 */
export interface BasicType<T, F> {
  readonly type: T
  readonly default: () => F
  readonly validator?: Validator
}
