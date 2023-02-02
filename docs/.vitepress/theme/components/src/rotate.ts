/**
 * 旋转方法
 */
export const rotate = () => {

  type MyWindow = Window & {
    onStart: () => string
    onStop: () => string
  }

  /**
   * 开始旋转
   *
   * @returns { string }
   */
  (window as unknown as MyWindow).onStart = (): string => {
    document.querySelector('.fighting__logo')?.classList.add('fighting__logo__rotate')
    return '开始旋转'
  }

  /**
   * 结束旋转
   *
   * @returns { string }
   */
  (window as unknown as MyWindow).onStop = (): string => {
    document.querySelector('.fighting__logo')?.classList.remove('fighting__logo__rotate')
    return '停止旋转'
  }

  console.log('尝试输入 `onStart()` 或 `onStop()` 试试看吧')
}
