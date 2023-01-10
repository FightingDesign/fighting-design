/**
 * 警告信息提示
 *
 * @param component 组件名称
 * @param message 警告信息
 */
export const warning = (component: string, message: string): void => {
  console.warn(`Fighting Design - ${component}: ${message}`)
}
