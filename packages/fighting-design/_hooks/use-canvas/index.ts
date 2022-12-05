import { sizeChange } from '../../_utils'

/**
 * 所需要的 props 参数对象类型接口
 *
 * @param content 文字内容
 * @param fontColor 文字颜色
 * @param fontSize 文字大小
 * @param width 图片宽度
 * @param height 图片高度
 */
export interface CreateWatermarkProps {
  content: string
  fontColor: string
  fontSize: string
  width: number
  height: number
}

export interface UseCanvasReturn {
  createWatermark(props: CreateWatermarkProps): string
}

export const useCanvas = (): UseCanvasReturn => {
  /**
   * 将 canvas 转换成 base64 图片格式
   *
   * @param props 需要传递到 参数
   * @returns { String } base64 格式的图片
   */
  const createWatermark = (props: CreateWatermarkProps): string => {
    /**
     * 创建一个 canvas
     */
    const canvas: HTMLCanvasElement = document.createElement(
      'canvas'
    ) as HTMLCanvasElement
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

  return {
    createWatermark
  }
}
