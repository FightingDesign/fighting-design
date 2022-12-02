/**
 * MouseEvent 鼠标事件接口
 *
 * 接口的常见事件包括：click、dblclick、mouseup、mousedown
 *
 * @see MouseEvent https://developer.mozilla.org/zh-CN/docs/Web/API/MouseEvent
 * @param evt 事件参数
 */
export interface HandleMouseEventInterface {
  (evt: MouseEvent): void
}

/**
 * DragEvent 拖放事件接口
 *
 * 主要用在拖动文件上传
 *
 * @see DragEvent https://developer.mozilla.org/zh-CN/docs/Web/API/DragEvent
 * @param evt 事件参数
 */
export interface HandleDragEventInterface {
  (evt: DragEvent): void
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
export interface HandleFocusEventInterface {
  (evt: FocusEvent): void
}

/**
 * WheelEvent 鼠标滚轮事件接口
 *
 * 目前用作 image-preview 组件滚轮放大缩小
 *
 * @see WheelEvent https://developer.mozilla.org/zh-CN/docs/Web/API/WheelEvent
 * @param evt 事件参数
 */
export interface HandleWheelEventInterface {
  (evt: WheelEvent): void
}

/**
 * KeyboardEvent 键盘事件接口
 *
 * 目前用作 input-number 组件enter事件
 *
 * @see KeyboardEvent https://developer.mozilla.org/zh-CN/docs/Web/API/KeyboardEvent
 * @param evt 事件参数
 */
export interface HandleKeyboardEventInterface {
  (evt: KeyboardEvent): void
}
