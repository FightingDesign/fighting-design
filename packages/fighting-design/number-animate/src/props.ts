import type { ExtractPropTypes } from 'vue'

export const Props = {
  /**
   * 动画数字
   */
  number: {
    type: Number,
    default: 0
  },
  /**
   * 执行动画结束的大概时间
   * 准确时间由浏览器的下一侦渲染决定
   */
  approximateTime: {
    type: Number,
    default: 2000
  },
  /**
   * 对数字决定金额格式化
   */
  localeString: {
    type: Boolean,
    default: false
  },
  /**
   * 动画结束触发函数
   */
  animationEnd: {
    type: Function,
    default: (): null => null
  },
  /**
   * 样式列表
   */
  styles: {
    type: Object,
    default: (): object => ({})
  }
}

export type NumberAnimateProps = ExtractPropTypes<typeof Props>
