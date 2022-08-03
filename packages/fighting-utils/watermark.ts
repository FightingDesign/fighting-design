import type { WatermarkInterface } from './type'

export class Watermark implements WatermarkInterface {
  content: string
  width: number
  height: number
  fontSize: string
  fontColor: string

  constructor(
    content = '',
    width: number,
    height: number,
    fontSize: string,
    fontColor: string
  ) {
    this.content = content
    this.width = width || 200
    this.height = height || 140
    this.fontSize = fontSize || '30px'
    this.fontColor = fontColor || '#333'
  }

  createBase64 = (): string => {
    const canvas: HTMLCanvasElement = document.createElement('canvas')
    const ratio: number = window.devicePixelRatio || 1

    canvas.width = this.width * ratio
    canvas.height = this.height * ratio
    canvas.style.width = this.width + 'px'
    canvas.style.height = this.height + 'px'

    const context: CanvasRenderingContext2D = canvas.getContext(
      '2d'
    ) as CanvasRenderingContext2D
    if (context) {
      context.rotate((-8 * Math.PI) / 100)
      context.font = `${this.fontSize} serif`
      context.fillStyle = this.fontColor
      context.textAlign = 'left'
      context.textBaseline = 'middle'
      context.fillText(this.content, this.width / 20, this.height)
    }

    return canvas.toDataURL('image/png')
  }
}
