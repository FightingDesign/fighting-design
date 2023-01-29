import { sizeChange } from '../../_utils'
import type { UseCanvasReturn, CreateWatermarkProps } from './interface'

export * from './interface.d'

/** 
 * 针对画板的方法封装 
 * 
 * @author Tyh2001 <https://github.com/Tyh2001>
 * @returns { Object }
 */
export const useCanvas = (): UseCanvasReturn => {
  /**
   * 将 canvas 转换成 base64 图片格式
   *
   * @param { Object } props 需要传递到 参数
   * @returns { string } base64 格式的图片
   */
  const createWatermark = (props: CreateWatermarkProps): string => {
    /** 创建一个 canvas */
    const canvas: HTMLCanvasElement = document.createElement('canvas')
    const ratio: number = (window && window.devicePixelRatio) || 1

    canvas.width = props.width * ratio
    canvas.height = props.height * ratio
    canvas.style.width = props.width + 'px'
    canvas.style.height = props.height + 'px'

    const context: CanvasRenderingContext2D | null = canvas.getContext('2d')

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

  return { createWatermark }
}
