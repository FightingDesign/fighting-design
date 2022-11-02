import { ref } from 'vue'
import { keepDecimal } from '../../_utils'
import type { Ref } from 'vue'
import type {
  OrdinaryFunctionInterface as a,
  OnImgMousewheelInterface as b,
  UseOperationImgReturnInterface as c
} from './interface'

/**
 * 用于 image-preview 组件的图片操作 hooks
 * @returns { UseOperationImgReturnInterface }
 */
export const useOperationImg = (): c => {
  const scale: Ref<number> = ref<number>(1)
  const rotate: Ref<number> = ref<number>(0)

  /**
   * 图片缩小
   * @returns 
   */
  const smaller: a = (): void => {
    if (keepDecimal(scale.value, 1) <= 0.2) {
      return
    }
    scale.value -= 0.2
  }

  /**
   * 图片放大
   * @returns 
   */
  const bigger: a = (): void => {
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
  const onImgMousewheel: b = (evt: WheelEvent): void => {
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
  const recovery: a = (): void => {
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
  } as c
}
