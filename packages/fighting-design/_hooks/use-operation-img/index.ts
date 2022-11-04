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
 * 用于 image-preview 组件的图片操作 hooks
 * @returns { UseOperationImgReturnInterface }
 */
export const useOperationImg: UseOperationImgInterface = (): UseOperationImgReturnInterface => {
  const scale: Ref<number> = ref<number>(1)
  const rotate: Ref<number> = ref<number>(0)

  /**
   * 图片缩小
   * @returns 
   */
  const smaller: OrdinaryFunctionInterface = (): void => {
    if (keepDecimal(scale.value, 1) <= 0.2) {
      return
    }
    scale.value -= 0.2
  }

  /**
   * 图片放大
   * @returns 
   */
  const bigger: OrdinaryFunctionInterface = (): void => {
    if (scale.value >= 10) {
      return
    }
    scale.value += 0.2
  }

  /**
   * 滚轮缩放
   * @param evt 事件对象
   * @returns 
   */
  const onImgMousewheel: HandleWheelEventInterface = (evt: WheelEvent): void => {
    evt.preventDefault()
    if (evt.deltaY > 1) {
      smaller()
      return
    }
    bigger()
  }

  /**
   * 还原图片
   */
  const recovery: OrdinaryFunctionInterface = (): void => {
    scale.value = 1
    rotate.value = 0
  }

  return {
    scale,
    rotate,
    smaller,
    bigger,
    onImgMousewheel,
    recovery
  } as UseOperationImgReturnInterface
}
