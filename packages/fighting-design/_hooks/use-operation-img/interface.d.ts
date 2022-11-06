import type { Ref } from 'vue'
import type { OrdinaryFunctionInterface, HandleWheelEventInterface } from '../../_interface'
export type { OrdinaryFunctionInterface, HandleWheelEventInterface } from '../../_interface'

/**
 * useOperationImg 返回值类型接口
 * 
 * 用于 image-preview 组件的方法封装
 * 
 * scale 放大倍数
 * 
 * rotate 旋转角度
 * 
 * smaller 放大操作
 * 
 * bigger 缩小操作
 * 
 * onImgMousewheel 滚轮缩放
 * 
 * recovery 还原图片
 * 
 */
export interface UseOperationImgReturnInterface {
  scale: Ref<number>
  rotate: Ref<number>
  smaller: OrdinaryFunctionInterface
  bigger: OrdinaryFunctionInterface
  onImgMousewheel: HandleWheelEventInterface
  recovery: OrdinaryFunctionInterface
}

/**
 * useOperationImg 方法类型接口
 * 
 * 无参数，返回 UseOperationImgReturnInterface 类型
 */
export interface UseOperationImgInterface {
  (): UseOperationImgReturnInterface
}
