/**
 * 打印错误信息
 *
 * @param scope 组件范围
 * @param message 错误信息
 */
export const debugWarn = (scope: string, message: string): void => {
  console.warn(`[${scope}]: ${message}`)
}
