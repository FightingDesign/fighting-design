/**
 * 按钮点击的回调类型
 *
 * @see MouseEvent https://developer.mozilla.org/zh-CN/docs/Web/API/MouseEvent/MouseEvent
 * @param { Object } evt 事件对象
 */
export type HandleMouse = (evt: MouseEvent) => void

/**
 * 普通事件参数类型接口
 *
 * @see Event https://developer.mozilla.org/zh-CN/docs/Web/API/Event
 * @param { Object } evt 事件对象
 */
export type HandleEvent = (evt: Event) => void

/**
 * change 事件类型接口
 *
 * @param { boolean } target 改变后的值
 */
export type HandleChange = (target: boolean) => void

/**
 * 输入相关改变类型接口
 *
 * @param { string } value 输入的值
 */
export type InputChange = (value: string) => void
