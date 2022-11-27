/**
 * ChangeColor 类的类型接口
 *
 * @param color 需要处理的颜色
 * @param hexToRgb 将 hex 色号转换为 rgb
 * @param rgbToHex 将 rgb 色号转换为 hex
 * @param getDarkColor 加深颜色
 * @param getLightColor 减淡颜色
 */
export interface ChangeColorInterface {
  color: string
  hexToRgb(): string[] | void
  rgbToHex(...rgb: string[]): string
  getDarkColor(level: number): string
  getLightColor(level: number): string
}
