import { ref } from 'vue'
import { keepDecimal } from '../../_utils'
import type { Ref } from 'vue'

/**
 * useOperationImg 返回值类型接口
 *
 * 用于 image-preview 组件的方法封装
 *
 * @param scale 放大倍数
 * @param rotate 旋转角度
 * @param smaller 放大操作
 * @param bigger 缩小操作
 * @param scrollZoom 滚轮缩放
 * @param recovery 还原图片
 * @param rotateClockwise 顺时针旋转
 * @param rotateCounterClock 逆时针旋转
 */
export interface UseOperationImgReturn {
  scale: Ref<number>
  rotate: Ref<number>
  smaller(): void
  bigger(): void
  scrollZoom(evt: WheelEvent): void
  recovery(): void
  rotateClockwise(): void
  rotateCounterClock(): void
}

/**
 * 用于 image-preview 组件的图片操作 hook
 *
 * 主要用作图片的放大、缩小、滚轮缩放
 */
export const useOperationImg = (): UseOperationImgReturn => {
  /**
   * 放大倍数
   */
  const scale: Ref<number> = ref<number>(1)
  /**
   * 旋转度数
   */
  const rotate: Ref<number> = ref<number>(0)

  /**
   * 图片缩小
   */
  const smaller = (): void => {
    keepDecimal(scale.value, 1) >= 0.2 && (scale.value -= 0.2)
  }

  /**
   * 图片放大
   */
  const bigger = (): void => {
    scale.value <= 10 && (scale.value += 0.2)
  }

  /**
   * 滚轮缩放
   * @param evt 鼠标滚轮事件对象
   */
  const scrollZoom = (evt: WheelEvent): void => {
    evt.preventDefault()
    evt.deltaY > 1 ? smaller() : bigger()
  }

  /**
   * 还原图片
   */
  const recovery = (): void => {
    scale.value = 1
    rotate.value = 0
  }

  /**
   * 顺时针旋转
   */
  const rotateClockwise = (): void => {
    rotate.value += 90
  }

  /**
   * 逆时针旋转
   */
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
  } as UseOperationImgReturn
}
