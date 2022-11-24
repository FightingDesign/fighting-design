export type { StickyCardPropsType } from './props'

/**
 * 回调函数类型接口
 * 
 * @param target 绑定的值
 */
export interface StickyCardEmitInterface {
  (target: boolean): void
}
