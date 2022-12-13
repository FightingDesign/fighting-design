import type { PropType, ExtractPropTypes } from 'vue'
import type { ProgressType } from './interface'

export const Props = {
  /**
   * 百分比
   */
  percentage: {
    type: Number,
    default: (): number => 10,
    validator: (val: number): boolean => {
      return val >= 0 && val <= 100
    }
  },
  /**
   * 进度条类型
   */
  type: {
    type: String as PropType<ProgressType>,
    default: (): ProgressType => 'primary',
    validator: (val: ProgressType): boolean => {
      return (['primary', 'success', 'danger', 'warning'] as const).includes(val)
    }
  },
  /**
   * 方形
   */
  square: {
    type: Boolean,
    default: (): boolean => false
  },
  /**
   * 线性
   */
  linear: {
    type: Boolean,
    default: (): boolean => false
  },
  /**
   * 是否显示百分比文字内容
   */
  showText: {
    type: Boolean,
    default: (): boolean => true
  },
  /**
   * 百分比文字的颜色
   */
  textColor: {
    type: String,
    default: (): null => null
  },
  /**
   * 进度条颜色
   */
  color: {
    type: String,
    default: (): null => null
  },
  /**
   * 进度条背景色
   */
  background: {
    type: String,
    default: (): null => null
  },
  /**
   * 自定义宽度
   */
  width: {
    type: [String, Number] as PropType<string | number>,
    default: (): null => null
  },
  /**
   * 自定义高度
   */
  height: {
    type: [String, Number] as PropType<string | number>,
    default: (): string => '6px'
  },
  /**
   * 是否开启条纹效果
   */
  stripe: {
    type: Boolean,
    default: (): boolean => false
  },
  /**
   * 百分比文字是否在进度条内显示
   */
  textInside: {
    type: Boolean,
    default: (): boolean => false
  }
} as const

export type ProgressProps = ExtractPropTypes<typeof Props>
