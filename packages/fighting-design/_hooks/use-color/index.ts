/**
 * useColor 返回值类型接口
 *
 * @param { Function } getDark 加深方法
 * @param { Function } getLight 减淡方法
 */
export interface UseColorReturn {
  getDark: (level?: number) => string
  getLight: (level?: number) => string
}

/**
 * 根据传入的 hex 计算出加深或减淡的颜色
 *
 * @author Tyh2001 <https://github.com/Tyh2001>
 * @param { string } color 需要计算的颜色，必须是 16 进制色号
 * @returns { Object } 加深原色 减淡颜色
 */
export const useColor = (color: string): UseColorReturn => {
  /** 十六进制色号正则检测条件 */
  const r = /^\#?[0-9A-Fa-f]{6}$/

  // 检测是否为一个有效的十六进制色号
  if (!r.test(color)) {
    throw new Error(
      `Fighting Design - useColor: ${color} is not a valid hex color number`
    )
  }

  /**
   * 将 hex 色号转换为 rgb
   *
   * @returns { string[] } rgb 色号数组
   */
  const toRgb = (): string[] => {
    /**
     * 色号编码
     *
     * @see String.prototype.replace() https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/replace
     */
    const code: string = color.replace('#', '')

    /**
     * 将字符串分隔成为数组
     *
     * @see String.prototype.match() https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/match
     */
    const hex: string[] = code.match(/../g) as string[]

    for (let i = 0; i < hex.length; i++) {
      /**
       * @see parseInt https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/parseInt
       */
      hex[i] = parseInt(hex[i], 16).toString()
    }

    return hex
  }

  /**
   * 将 rgb 色号转换为 hex
   *
   * @param { string[] } rgb rgb 色号
   * @returns { string } hex 色号
   */
  const toHex = (...rgb: string[]): string => {
    /** 获取到 hex 色号 */
    const hex: string[] = [...rgb]

    for (let i = 0; i < hex.length; i++) {
      if (hex[i].length === 1) {
        hex[i] = '0' + hex[i]
      }
    }

    /**
     * @see Array.prototype.join() https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/join
     */
    return '#' + hex.join('')
  }

  /**
   * 加深颜色
   *
   * @param { number } [level = 0] 加深程度，默认不加深
   * @returns { string } 加深后的色号
   */
  const getDark = (level = 0): string => {
    /** 获取 rgb 颜色 */
    const rgb: string[] = toRgb()

    for (let i = 0; i < rgb.length; i++) {
      rgb[i] = Math.floor(Number(rgb[i]) * (1 - level)).toString(16)
    }

    // 转换成 hex 返回
    return toHex(...rgb)
  }

  /**
   * 减淡颜色
   *
   * @param { number } [level = 0] 减淡程度，默认不减淡
   * @returns { string } 减淡后的色号
   */
  const getLight = (level = 0): string => {
    /** 获取 rgb 颜色 */
    const rgb: string[] = toRgb()

    for (let i = 0; i < rgb.length; i++) {
      rgb[i] = Math.floor((255 - Number(rgb[i])) * level + Number(rgb[i])).toString(16)
    }

    // 转换成 hex 返回
    return toHex(...rgb)
  }

  return {
    getDark,
    getLight
  }
}
