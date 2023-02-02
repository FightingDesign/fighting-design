/**
 * 警告信息提示
 *
 * @param { string } component 组件名称
 * @param { string } message 警告信息
 */
export const warning = (component: string, message: string): void => {
  console.warn(`Fighting Design - ${component}: ${message}`)
}

/**
 * 错误信息提示
 *
 * @param { string } component 组件名称
 * @param { string } message 错误信息
 */
export const error = (component: string, message: string): void => {
  console.error(`Fighting Design - ${component}: ${message}`)
}
