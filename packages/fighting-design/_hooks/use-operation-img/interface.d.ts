import type { Ref } from 'vue'
import type { OrdinaryFunctionInterface } from '../../_interface'
import type { OnImgMousewheelInterface } from './interface'
export type { OrdinaryFunctionInterface } from '../../_interface'

export interface OnImgMousewheelInterface {
  (evt: WheelEvent): void
}

export interface UseOperationImgReturnInterface {
  scale: Ref<number>
  rotate: Ref<number>
  smaller: OrdinaryFunctionInterface
  bigger: OrdinaryFunctionInterface
  onImgMousewheel: OnImgMousewheelInterface
  recovery: OrdinaryFunctionInterface
}
