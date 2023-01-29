/**
 * useVisible 返回值类型接口
 *
 * @param { Object } isVisible 展示状态
 * @param { Function } closeVisible 关闭方法
 */
export interface UseVisibleReturn {
  isVisible: Ref<boolean>
  closeVisible: () => void
}

/**
 * 回调函数类型
 *
 * @param { String } event 回调事件名
 * @param { Boolean } val 回调参数
 */
export type UseVisibleEmit = (event: 'update:visible', val: boolean) => void
