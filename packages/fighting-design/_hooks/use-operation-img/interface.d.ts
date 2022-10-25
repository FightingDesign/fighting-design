import type { Ref } from 'vue'
import type { OrdinaryFunctionInterface as a } from '../../_interface'
import type { OnImgMousewheelInterface as b } from './interface'

export interface OnImgMousewheelInterface {
  (evt: WheelEvent): void
}

export interface UseOperationImgReturnInterface {
  scale: Ref<number>
  rotate: Ref<number>
  smaller: a
  bigger: a
  onImgMousewheel: b
  recovery: a
}
