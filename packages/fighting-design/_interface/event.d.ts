/**
 * 按钮点击的回调类型
 * 
 * @see MouseEvent https://developer.mozilla.org/zh-CN/docs/Web/API/MouseEvent/MouseEvent
 * @param evt 事件对象
 */
export type HandleMouse = (evt: MouseEvent) => void

/**
 * 普通事件参数类型接口
 * 
 * @see Event https://developer.mozilla.org/zh-CN/docs/Web/API/Event
 * @param evt 事件对象
 */
export type HandleEvent = (evt: Event) => void

export type HandleChange = (target: boolean) => void
