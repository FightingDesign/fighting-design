export interface changeColorInterface {
  color: string
  rgbColor: Array<string>
  hexToRgb(): Array<string> | void
  rgbToHex(...rgb: Array<string>): string
  getColor(type: 'light' | 'dark', level: number): string
}
