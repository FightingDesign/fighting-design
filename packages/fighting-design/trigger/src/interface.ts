import type { HandleMouse } from '../../_interface'

export type { TriggerProps } from './props'

/** 触发方式类型 */
export type TriggerTrigger = 'hover' | 'click'

/**
 * 触发器切换回调方法类型
 *
 * @param { boolean } visible 展示状态
 * @param { Object } evt 事件对象
 */
export type TriggerChange = (visible: boolean, evt: MouseEvent) => void

/**
 * 注入的依赖项对象类型接口
 *
 * @param { Function } close 关闭方法
 */
export interface TriggerProvide {
  close: HandleMouse
}
