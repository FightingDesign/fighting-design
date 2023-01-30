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

    /**
     * 获取比例
     * 
     * @see Window.devicePixelRatio https://developer.mozilla.org/zh-CN/docs/Web/API/Window/devicePixelRatio
     */
    const ratio: number = (window && window.devicePixelRatio) || 1

    canvas.width = props.width * ratio
    canvas.height = props.height * ratio
    canvas.style.width = props.width + 'px'
    canvas.style.height = props.height + 'px'

    /**
     * 新建一个二维渲染上下文
     * 
     * @see HTMLCanvasElement.getContext() https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLCanvasElement/getContext
     * @see CanvasRenderingContext2D https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D
     */
    const context: CanvasRenderingContext2D | null = canvas.getContext('2d')

    if (context) {
      /**
       * 旋转角度
       * 
       * @see CanvasRenderingContext2D.rotate() https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/rotate
       */
      context.rotate((-8 * Math.PI) / 100)
      /**
       * 当前字体样式的属性
       * 
       * @see CanvasRenderingContext2D.font https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/font
       */
      context.font = `${sizeChange(props.fontSize)} serif`
      /**
       * 颜色和样式的属性
       * 
       * @see CanvasRenderingContext2D.fillStyle https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/fillStyle
       */
      context.fillStyle = props.fontColor
      /**
       * 文本的对齐方式的属性
       * 
       * @see CanvasRenderingContext2D.textAlign https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/textAlign
       */
      context.textAlign = 'left'
      /**
       * 当前文本基线的属性
       * 
       * @see CanvasRenderingContext2D.textBaseline https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/textBaseline
       */
      context.textBaseline = 'middle'
      /**
       * @see CanvasRenderingContext2D.strokeText() https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/strokeText
       */
      context.strokeText(props.content, props.width / 20, props.height)
    }

    /**
     * 返回一个包含图片展示的 data URI 
     * 
     * @see HTMLCanvasElement.toDataURL() https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLCanvasElement/toDataURL
     */
    return canvas.toDataURL('image/png')
  }

  return { createWatermark }
}
