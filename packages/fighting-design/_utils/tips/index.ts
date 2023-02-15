/**
 * 警告信息提示
 *
 * @see Console.warn() https://developer.mozilla.org/zh-CN/docs/Web/API/Console/warn
 * @param { string } location 位置
 * @param { string } message 警告信息
 */
export const warning = (location: string, message: string): void => {
  console.warn(`[fighting-design/${location}]: ${message}`)
}

/**
 * 错误信息提示
 *
 * @see Console.error() https://developer.mozilla.org/zh-CN/docs/Web/API/Console/error
 * @param { string } location 位置
 * @param { string } message 警告信息
 */
export const error = (location: string, message: string): void => {
  console.error(`[fighting-design/${location}]: ${message}`)
}

/**
 * 致命错误
 *
 * @see throw https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/throw
 * @see Error https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Error
 * @param { string } location 位置
 * @param { string } message 警告信息
 */
export const throwError = (location: string, message: string): never => {
  throw new Error(`[fighting-design/${location}]: ${message}`)
}
