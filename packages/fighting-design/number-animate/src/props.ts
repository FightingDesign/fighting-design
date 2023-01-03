import type { ExtractPropTypes, PropType, CSSProperties } from 'vue'
import type { AnimationEnd } from './interface'

export const Props = {
  /**
   * 开始的动画数字
   */
  from: {
    type: Number,
    default: (): number => 0
  },
  /**
   * 结束的动画数字
   */
  to: {
    type: Number,
    default: (): null => null
  },
  /**
   * 执行动画结束的大概时间
   *
   * 准确时间由浏览器的下一侦渲染决定
   */
  approximateTime: {
    type: Number,
    default: (): number => 2000
  },
  /**
   * 对数字决定金额格式化
   */
  localeString: {
    type: Boolean,
    default: (): boolean => false
  },
  /**
   * 样式列表
   */
  styles: {
    type: Object as PropType<CSSProperties>,
    default: (): null => null
  },
  /**
   * 是否初始化自动播放
   */
  automatic: {
    type: Boolean,
    default: (): boolean => true
  },
  /**
   * 动画结束触发函数
   */
  onAnimationEnd: {
    type: Function as PropType<AnimationEnd>,
    default: (): null => null
  }
}

export type NumberAnimateProps = ExtractPropTypes<typeof Props>
