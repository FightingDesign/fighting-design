import type { Ref } from 'vue'
import type { OrdinaryFunctionInterface, HandleWheelEventInterface } from '../../_interface'
export type { OrdinaryFunctionInterface, HandleWheelEventInterface } from '../../_interface'

export interface UseOperationImgReturnInterface {
  scale: Ref<number>
  rotate: Ref<number>
  smaller: OrdinaryFunctionInterface
  bigger: OrdinaryFunctionInterface
  onImgMousewheel: HandleWheelEventInterface
  recovery: OrdinaryFunctionInterface
}

export interface UseOperationImgInterface {
  (): UseOperationImgReturnInterface
}
