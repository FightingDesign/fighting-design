export const __DEV__ = process.env.NODE_ENV !== 'production'

/**
 * 打印错误信息
 *
 * @param scope 组件范围
 * @param message 错误信息
 */
export const debugWarn = (scope: string, message: string): void => {
  if (__DEV__) {
    console.warn(`[${scope}]: ${message}`)
  }
}
