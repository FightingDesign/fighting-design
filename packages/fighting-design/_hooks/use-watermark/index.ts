import { computed } from 'vue'
import type { WatermarkProps } from '../../watermark'
import type { ComputedRef } from 'vue'

/**
 * useWatermark 返回值类型接口
 *
 * @param { string } base64 base64 格式图片
 * @param { number } size 图片尺寸
 */
export interface UseWatermarkReturn {
  base64: string
  size: number
}

/**
 * 生成水印图片
 *
 * @param { Object } prop prop 参数
 */
export const useWatermark = (prop: WatermarkProps): ComputedRef<UseWatermarkReturn> => {
  return computed((): UseWatermarkReturn => {
    /**
     * 创建一个 canvas
     *
     * @see Canvas https://developer.mozilla.org/zh-CN/docs/Web/API/Canvas_API
     */
    const canvas: HTMLCanvasElement = document.createElement('canvas')

    /**
     * 设备像素比率
     *
     * @see Window.devicePixelRatio https://developer.mozilla.org/zh-CN/docs/Web/API/Window/devicePixelRatio
     */
    const devicePixeRatio: number = window.devicePixelRatio || 1

    /** 文字大小 */
    const fontSize: number = prop.fontSize * devicePixeRatio

    const font: string = fontSize + 'px serif'
    /**
     * 新建一个二维渲染上下文
     *
     * @see HTMLCanvasElement.getContext() https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLCanvasElement/getContext
     * @see CanvasRenderingContext2D https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D
     */
    const ctx = canvas.getContext('2d') as CanvasRenderingContext2D

    if (ctx) {
      const { width } = ctx.measureText(prop.content)

      const cavasSize: number = Math.max(100, width) * devicePixeRatio + prop.gap

      canvas.width = cavasSize
      canvas.height = cavasSize

      ctx.translate(canvas.width / 2, canvas.height / 2)
      ctx.rotate((Math.PI / 190) * -45)
      ctx.fillStyle = prop.fontColor
      ctx.font = font
      ctx.textAlign = 'center'
      ctx.textBaseline = 'middle'
      ctx.fillText(prop.content, 0, 0)

      return {
        base64: canvas.toDataURL(),
        size: cavasSize / devicePixeRatio
      } as const
    }

    return { base64: '', size: 0 }
  })
}
