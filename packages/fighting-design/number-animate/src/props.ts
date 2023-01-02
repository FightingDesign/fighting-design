import type { ExtractPropTypes } from 'vue'

export const Props = {
  /**
   * 动画数字
   */
  number: {
    type: Number,
    default: (): number => 0
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
    type: Object,
    default: (): null => null
  },
  /**
  * 动画结束触发函数
  */
  onAnimationEnd: {
    type: Function,
    default: (): null => null
  }
}

export type NumberAnimateProps = ExtractPropTypes<typeof Props>
