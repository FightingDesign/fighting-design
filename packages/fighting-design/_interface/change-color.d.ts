export interface changeColorInterface {
  color: string
  hexToRgb(): string[] | void
  rgbToHex(...rgb: string[]): string
  getDarkColor(level: number): string
  getLightColor(level: number): string
}
