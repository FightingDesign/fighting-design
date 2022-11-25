import { ref } from 'vue'
import { keepDecimal } from '../../_utils'
import type { Ref } from 'vue'
import type {
  OrdinaryFunctionInterface,
  HandleWheelEventInterface,
  UseOperationImgReturnInterface,
  UseOperationImgInterface
} from './interface'

/**
 * 用于 image-preview 组件的图片操作 hook
 *
 * 主要用作图片的放大、缩小、滚轮缩放
 *
 * @returns { UseOperationImgReturnInterface }
 */
export const useOperationImg: UseOperationImgInterface =
  (): UseOperationImgReturnInterface => {
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
    const smaller: OrdinaryFunctionInterface = (): void => {
      keepDecimal(scale.value, 1) >= 0.2 && (scale.value -= 0.2)
    }

    /**
     * 图片放大
     */
    const bigger: OrdinaryFunctionInterface = (): void => {
      scale.value <= 10 && (scale.value += 0.2)
    }

    /**
     * 滚轮缩放
     * @param evt 鼠标滚轮事件对象
     */
    const scrollZoom: HandleWheelEventInterface = (evt: WheelEvent): void => {
      evt.preventDefault()
      evt.deltaY > 1 ? smaller() : bigger()
    }

    /**
     * 还原图片
     */
    const recovery: OrdinaryFunctionInterface = (): void => {
      scale.value = 1
      rotate.value = 0
    }

    /**
     * 顺时针旋转
     */
    const rotateClockwise: OrdinaryFunctionInterface = (): void => {
      rotate.value += 90
    }

    /**
     * 逆时针旋转
     */
    const rotateCounterClock: OrdinaryFunctionInterface = (): void => {
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
    } as UseOperationImgReturnInterface
  }
