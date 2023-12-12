import { warning } from '..'

/**
 * 将对象自身可枚举属性的键值对数组
 *
 * 该方法针对 `Object.entries()` 方法做的进一步浏览器兼容适配处理
 *
 * @see Object.entries() https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/entries
 *
 * `Object.entries()` 方法兼容性一般
 *
 * @see Object.entries() https://caniuse.com/?search=Object.entries()
 *
 * @author Tyh2001 <https://github.com/Tyh2001>
 * @param { Object } obj 需要处理的对象
 * @returns { Array } 给定对象自身可枚举属性的键值对数组
 */
export const objectEntries = <T extends object>(obj: T): [keyof T, T[keyof T]][] => {
  /**
   * 如果不是对象类型返回空数组
   *
   * 并且提示警告
   */
  if (typeof obj !== 'object' || obj === null) {
    warning('objectEntries', 'Parameter is not an object type.')

    // 如果不是对象类型 返回空数组
    return []
  }

  // 如果 Object.entries 存在则直接使用
  if (Object.entries && Object.entries !== undefined) {
    return Object.entries(obj) as [keyof T, T[keyof T]][]
  }

  /** ================================== */
  /** 以下针对 Object.entries 不存在做适配 */
  /** ================================== */

  /** 最终结果数组 */
  const entries: [keyof T, T[keyof T]][] = []

  for (const key in obj) {
    /**
     * 必须对象自身属性中是否具有指定的属性
     *
     * 对象可能具有隐藏内置函数的属性 Object.prototype，可能会导致意外行为或拒绝服务安全漏洞
     *
     * 所以这里没有直接使用 obj.hasOwnProperty(key) 而是改用 Object.prototype.hasOwnProperty.call(obj, key)
     *
     * @see no-prototype-builtins https://eslint.org/docs/latest/rules/no-prototype-builtins
     *
     * 方法详情参考
     *
     * @see Object.prototype.hasOwnProperty() https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty
     *
     * 兼容性参考
     *
     * @see hasOwnProperty https://caniuse.com/?search=hasOwnProperty
     */
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      /**
       * key 为第一项，value 为第二项组成的组数
       *
       * 依次添加到结果数组中
       */
      entries.push([key, obj[key]])
    }
  }

  return entries
}
