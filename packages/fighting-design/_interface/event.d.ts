/**
 * 普通类型事件接口
 * 
 * @see Event https://developer.mozilla.org/zh-CN/docs/Web/API/Event
 */
export interface HandleEvent {
  (evt: Event): void
}

/**
 * MouseEvent 鼠标事件接口
 *
 * 接口的常见事件包括：click、dblclick、mouseup、mousedown
 *
 * @see MouseEvent https://developer.mozilla.org/zh-CN/docs/Web/API/MouseEvent
 * @param evt 事件参数
 */
export interface HandleMouseEvent {
  (evt: MouseEvent): void
}

/**
 * FocusEvent 焦点事件接口
 *
 * 主要处理获取焦点和失去焦点类型方法
 *
 *
 * @see FocusEvent https://developer.mozilla.org/zh-CN/docs/Web/API/FocusEvent
 * @param evt 事件参数
 */
export interface HandleFocusEvent {
  (evt: FocusEvent): void
}
