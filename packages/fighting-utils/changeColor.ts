import type { changeColorInterface } from '@fighting-design/fighting-type'

/**
 * 根据传入的 hex 色号计算出加深的颜色和减淡的颜色
 */
export class ChangeColor implements changeColorInterface {
  color: string
  rgbColor: Array<string>
  constructor(color: string) {
    this.color = color
    this.rgbColor = this.hexToRgb() as Array<string>
  }
  // 将 hex 色号转换为 rgb
  hexToRgb(): Array<string> | void {
    const r: RegExp = /^\#?[0-9A-Fa-f]{6}$/

    if (!r.test(this.color)) {
      return console.warn('输入错误的 hex 值色号')
    }

    const color: string = this.color.replace('#', '')
    const hxs: Array<string> = color.match(/../g) as Array<string>

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
  // 获取加深或减淡的色号
  getColor(type: 'light' | 'dark', level: number): string {
    const rgb: Array<string> = this.rgbColor

    for (let i: number = 0; i < rgb.length; i++) {
      if (type === 'light') {
        rgb[i] = Math.floor(
          (255 - Number(rgb[i])) * level + Number(rgb[i])
        ).toString(16)
      }
      if (type === 'dark') {
        rgb[i] = Math.floor(Number(rgb[i]) * (1 - level)).toString(16)
      }
    }
    return this.rgbToHex(...rgb)
  }
}
