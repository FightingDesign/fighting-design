/**
 * useVisible 返回值类型接口
 *
 * @param isVisible 展示状态
 * @param closeVisible 关闭方法
 */
export interface UseVisibleReturn {
  isVisible: Ref<boolean>
  closeVisible: () => void
}

/** 回调方法 */
export type UseVisibleEmit = (event: 'update:visible', val: boolean) => void
