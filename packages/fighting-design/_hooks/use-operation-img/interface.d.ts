import type { Ref } from 'vue'
import type { OrdinaryFunctionInterface } from '../../_interface'
import type { OnImgMousewheelInterface } from './interface'
export type { OrdinaryFunctionInterface, HandleWheelEventInterface } from '../../_interface'

export interface UseOperationImgReturnInterface {
  scale: Ref<number>
  rotate: Ref<number>
  smaller: OrdinaryFunctionInterface
  bigger: OrdinaryFunctionInterface
  onImgMousewheel: OnImgMousewheelInterface
  recovery: OrdinaryFunctionInterface
}

export interface UseOperationImgInterface {
  (): UseOperationImgReturnInterface
}
