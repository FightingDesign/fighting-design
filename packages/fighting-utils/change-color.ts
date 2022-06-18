import type { changeColorInterface } from './type'

/**
 * 根据传入的 hex 计算出加深和减淡的颜色
 */
export class ChangeColor implements changeColorInterface {
  color: string
  constructor(color: string) {
    this.color = color
  }
  // 将 hex 色号转换为 rgb
  hexToRgb(): Array<string> | void {
    const r: RegExp = /^\#?[0-9A-Fa-f]{6}$/
    if (!r.test(this.color)) {
      return console.warn('输入错误的 hex 值色号')
    }
    const color: string = this.color.replace('#', '')
    let hxs: Array<string> = color.match(/../g) as Array<string>
    for (let i: number = 0; i < hxs.length; i++) {
      hxs[i] = parseInt(hxs[i], 16).toString()
    }
    return hxs
  }
  // 将 rgb 色号转换为 hex
  rgbToHex(...rgb: Array<string>): string {
    const hex: Array<string> = [...rgb]
    for (let i: number = 0; i < hex.length; i++) {
      if (hex[i].length === 1) {
        hex[i] = '0' + hex[i]
      }
    }
    return '#' + hex.join('')
  }
  // 加深颜色
  getDarkColor(level: number): string {
    const rgb: Array<string> = this.hexToRgb() as Array<string>
    for (let i: number = 0; i < rgb.length; i++) {
      rgb[i] = Math.floor(Number(rgb[i]) * (1 - level)).toString(16)
    }
    return this.rgbToHex(...rgb)
  }
  // 减淡颜色
  getLightColor(level: number): string {
    const rgb: Array<string> = this.hexToRgb() as Array<string>
    for (let i: number = 0; i < rgb.length; i++) {
      rgb[i] = Math.floor(
        (255 - Number(rgb[i])) * level + Number(rgb[i])
      ).toString(16)
    }
    return this.rgbToHex(...rgb)
  }
}
