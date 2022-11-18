import type { Ref } from 'vue'
import type {
  OrdinaryFunctionInterface,
  HandleWheelEventInterface
} from '../../_interface'
export type {
  OrdinaryFunctionInterface,
  HandleWheelEventInterface
} from '../../_interface'

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
export interface UseOperationImgReturnInterface {
  scale: Ref<number>
  rotate: Ref<number>
  smaller: OrdinaryFunctionInterface
  bigger: OrdinaryFunctionInterface
  scrollZoom: HandleWheelEventInterface
  recovery: OrdinaryFunctionInterface
  rotateClockwise: OrdinaryFunctionInterface
  rotateCounterClock: OrdinaryFunctionInterface
}

/**
 * useOperationImg 方法类型接口
 *
 * 无参数，返回 UseOperationImgReturnInterface 类型
 */
export interface UseOperationImgInterface {
  (): UseOperationImgReturnInterface
}
