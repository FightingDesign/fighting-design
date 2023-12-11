import { ref } from 'vue'
import { keepDecimal } from '../../_utils'
import type { Ref } from 'vue'

/**
 * useOperationImg 返回值类型接口
 *
 * 用于 image-preview 组件的方法封装
 *
 * @param { Object } scale 放大倍数
 * @param { Object } rotate 旋转角度
 * @param { Function } smaller 放大操作
 * @param { Function } bigger 缩小操作
 * @param { Function } scrollZoom 滚轮缩放
 * @param { Function } recovery 还原图片
 * @param { Function } rotateClockwise 顺时针旋转
 * @param { Function } rotateCounterClock 逆时针旋转
 */
export interface UseOperationImgReturn {
  scale: Ref<number>
  rotate: Ref<number>
  smaller: () => void
  bigger: () => void
  scrollZoom: (evt: WheelEvent) => void
  recovery: () => void
  rotateClockwise: () => void
  rotateCounterClock: () => void
}

/**
 * 用于 image-preview 组件的图片操作 hook
 *
 * 主要用作图片的放大、缩小、滚轮缩放
 *
 * @author Tyh2001 <https://github.com/Tyh2001>
 * @returns { Object }
 */
export const useOperationImg = (): UseOperationImgReturn => {
  /** 放大倍数 */
  const scale = ref<number>(1)
  /** 旋转度数 */
  const rotate = ref<number>(0)

  /** 图片缩小 */
  const smaller = (): void => {
    keepDecimal(scale.value, 1) >= 0.2 && (scale.value -= 0.2)
  }

  /** 图片放大 */
  const bigger = (): void => {
    scale.value <= 10 && (scale.value += 0.2)
  }

  /**
   * 滚轮缩放
   *
   * @see WheelEvent https://developer.mozilla.org/zh-CN/docs/Web/API/WheelEvent
   * @param { Object } evt 鼠标滚轮事件对象
   */
  const scrollZoom = (evt: WheelEvent): void => {
    evt.preventDefault()
    evt.deltaY > 1 ? smaller() : bigger()
  }

  /** 还原图片 */
  const recovery = (): void => {
    scale.value = 1
    rotate.value = 0
  }

  /** 顺时针旋转 */
  const rotateClockwise = (): void => {
    rotate.value += 90
  }

  /** 逆时针旋转 */
  const rotateCounterClock = (): void => {
    rotate.value -= 90
  }

  return {
    scale,
    rotate,
    smaller,
    bigger,
    scrollZoom,
    recovery,
    rotateClockwise,
    rotateCounterClock
  }
}
