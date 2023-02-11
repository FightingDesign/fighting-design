import type { UseSliderReturn, UseSliderCallback } from './interface'

export * from './interface.d'

/**
 * slider 组件滑动方法
 * 
 * @param { Object } el 滑块元素节点
 * @param { Function } callback 回调方法
 * @returns { Function } 开始监听滚动的方法
 */
export const useSlider = (el: HTMLElement, callback: UseSliderCallback): UseSliderReturn => {

  /**
   * 移动时触发的方法
   *
   * @param { Object } evt 事件对象
   */
  const move = (evt: MouseEvent): void => {
    callback(evt.clientX)
  }

  /**
   * 移动结束方法
   *
   * 注销所有事件监听
   *
   * @see EventTarget.removeEventListener() https://developer.mozilla.org/zh-CN/docs/Web/API/EventTarget/removeEventListener
   */
  const end = (): void => {
    document.removeEventListener('mousemove', move)
    document.removeEventListener('mouseup', end)
  }

  /**
   * 开始触发的方法
   *
   * 需要监听移动事件和抬起事件
   *
   * 移动事件需要触发移动的方法，结束需要触发销毁方法
   *
   * @see mousemove https://developer.mozilla.org/zh-CN/docs/Web/API/Element/mousemove_event
   * @see mouseup https://developer.mozilla.org/zh-CN/docs/Web/API/Element/mouseup_event
   */
  const start = (): void => {
    document.addEventListener('mousemove', move, { passive: false })
    document.addEventListener('mouseup', end, { passive: false })
  }

  /**
   * 监听 dom 按下时的事件
   *
   * @see mousedown https://developer.mozilla.org/zh-CN/docs/Web/API/Element/mousedown_event
   */
  const startListen = (): void => {
    el.addEventListener('mousedown', start, { passive: false })
  }

  return startListen
}
