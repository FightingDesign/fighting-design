export interface WatermarkInterface {
  content: string
  width: number
  height: number
  fontSize: string
  fontColor: string
  createBase64(): string
}
