export interface changeColorInterface {
  color: string
  hexToRgb(): Array<string> | void
  rgbToHex(...rgb: Array<string>): string
  getDarkColor(level: number): string
  getLightColor(level: number): string
}
