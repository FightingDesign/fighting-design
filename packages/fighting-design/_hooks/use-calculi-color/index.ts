import type { UseCalculiColorReturn } from './interface'

export * from './interface.d'

/**
 * 根据传入的 hex 计算出加深或减淡的颜色
 *
 * @author Tyh2001 <https://github.com/Tyh2001>
 * @param { String } color 需要计算的颜色
 * @returns { Object }
 */
export const useCalculiColor = (color: string): UseCalculiColorReturn => {
  /**
   * 将 hex 色号转换为 rgb
   *
   * @returns { Array } rgb 色号数组
   */
  const hexToRgb = (): string[] | void => {
    const r = /^\#?[0-9A-Fa-f]{6}$/

    if (!r.test(color)) {
      return console.warn('输入错误的 hex 值色号')
    }

    const colorHxs: string = color.replace('#', '')
    const hxs: string[] = colorHxs.match(/../g) as string[]

    for (let i = 0; i < hxs.length; i++) {
      hxs[i] = parseInt(hxs[i], 16).toString()
    }

    return hxs
  }

  /**
   * 将 rgb 色号转换为 hex
   *
   * @param rgb rgb 色号
   * @returns { String } hex 色号
   */
  const rgbToHex = (...rgb: string[]): string => {
    const hex: string[] = [...rgb]

    for (let i = 0; i < hex.length; i++) {
      if (hex[i].length === 1) {
        hex[i] = '0' + hex[i]
      }
    }

    return '#' + hex.join('')
  }

  /**
   * 加深颜色
   *
   * @param { Number } level 加深程度
   * @returns { String } 加深后的色号
   */
  const getDarkColor = (level: number): string => {
    const rgb: string[] = hexToRgb() as string[]

    for (let i = 0; i < rgb.length; i++) {
      rgb[i] = Math.floor(Number(rgb[i]) * (1 - level)).toString(16)
    }

    return rgbToHex(...rgb)
  }

  /**
   * 减淡颜色
   *
   * @param level 减淡程度
   * @returns { String } 减淡后的色号
   */
  const getLightColor = (level: number): string => {
    const rgb: string[] = hexToRgb() as string[]

    for (let i = 0; i < rgb.length; i++) {
      rgb[i] = Math.floor((255 - Number(rgb[i])) * level + Number(rgb[i])).toString(16)
    }

    return rgbToHex(...rgb)
  }

  return {
    getDarkColor,
    getLightColor
  }
}
