const { toString: _toString } = Object.prototype

/**
 * 转换为字符串
 *
 * @param { * } value 数据
 * @returns { string }
 */
export const toString = (value: any): string => {
  return _toString.call(value)
}
