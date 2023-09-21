import { computed } from 'vue'

export const useWatermark = (prop) => {
  return computed(() => {
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

    ctx.font = font

    const { width } = ctx.measureText(prop.text)

    // const cavasSize = Math.

    return {}
  })
}
