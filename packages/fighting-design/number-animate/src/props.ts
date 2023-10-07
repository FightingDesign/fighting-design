import {
  setBooleanProp,
  setNumberProp,
  setObjectProp,
  setFunctionProp
} from '../../_utils'
import type { ExtractPropTypes, CSSProperties } from 'vue'
import type { AnimationEnd } from './interface'

export const Props = {
  /** 开始的动画数字 */
  from: setNumberProp(0),
  /** 结束的动画数字 */
  to: setNumberProp(),
  /**
   * 执行动画结束的大概时间
   *
   * 准确时间由浏览器的下一侦渲染决定
   */
  approximateTime: setNumberProp(2000),
  /** 对数字决定金额格式化 */
  localeString: setBooleanProp(),
  /** 样式列表 */
  styles: setObjectProp<CSSProperties>(),
  /** 是否初始化自动播放 */
  automatic: setBooleanProp(true),
  /** 动画结束触发函数 */
  onAnimationEnd: setFunctionProp<AnimationEnd>()
}

/** number-animate 组件 props 类型 */
export type NumberAnimateProps = ExtractPropTypes<typeof Props>
