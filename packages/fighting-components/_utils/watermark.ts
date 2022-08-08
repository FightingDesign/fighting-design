import type { createBase64Interface as a } from '../_interface'

/**
 * 将 canvas 转换成 base64 图片格式
 * @param content 文字内容
 * @param width 图片宽度
 * @param height 图片高度
 * @param fontSize 文字大小
 * @param fontColor 文字颜色
 * @returns base64 string
 */
export const createBase64: a = (
  content = '',
  width: number,
  height: number,
  fontSize: string,
  fontColor: string
): string => {
  const canvas: HTMLCanvasElement = document.createElement('canvas')
  const ratio: number = window.devicePixelRatio || 1

  canvas.width = width * ratio
  canvas.height = height * ratio
  canvas.style.width = width + 'px'
  canvas.style.height = height + 'px'

  const context: CanvasRenderingContext2D = canvas.getContext(
    '2d'
  ) as CanvasRenderingContext2D
  if (context) {
    context.rotate((-8 * Math.PI) / 100)
    context.font = `${fontSize} serif`
    context.fillStyle = fontColor
    context.textAlign = 'left'
    context.textBaseline = 'middle'
    context.fillText(content, width / 20, height)
  }

  return canvas.toDataURL('image/png')
}
