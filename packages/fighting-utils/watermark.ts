import type { WatermarkInterface } from './type'

export class Watermark implements WatermarkInterface {
  content: string
  width: number
  height: number
  fontSize: string
  fontColor: string

  constructor(
    content = '',
    width = 200,
    height = 140,
    fontSize = '30px',
    fontColor = '#333'
  ) {
    this.content = content
    this.width = width
    this.height = height
    this.fontSize = fontSize
    this.fontColor = fontColor
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
      context.font = '30px serif'
      context.fillStyle = 'black'
      context.textAlign = 'left'
      context.textBaseline = 'middle'
      context.fillText(this.content, this.width / 20, this.height)
    }

    return canvas.toDataURL('image/png')
  }
}
