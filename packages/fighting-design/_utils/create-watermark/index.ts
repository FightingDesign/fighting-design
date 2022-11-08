import { sizeChange } from '../utils'
import type {
  CreateBase64Interface,
  CreateWatermarkPropsInterface
} from './interface'

/**
 * 将 canvas 转换成 base64 图片格式
 * @param props 需要传递到 参数
 * @returns { String } base64 格式的图片
 */
export const createWatermark: CreateBase64Interface = (props: CreateWatermarkPropsInterface): string => {
  const canvas: HTMLCanvasElement = document.createElement('canvas')
  const ratio: number = window.devicePixelRatio || 1

  canvas.width = props.width * ratio
  canvas.height = props.height * ratio
  canvas.style.width = props.width + 'px'
  canvas.style.height = props.height + 'px'

  const context: CanvasRenderingContext2D = canvas.getContext(
    '2d'
  ) as CanvasRenderingContext2D
  if (context) {
    context.rotate((-8 * Math.PI) / 100)
    context.font = `${sizeChange(props.fontSize)} serif`
    context.fillStyle = props.fontColor
    context.textAlign = 'left'
    context.textBaseline = 'middle'
    context.fillText(props.content, props.width / 20, props.height)
  }

  return canvas.toDataURL('image/png')
}
