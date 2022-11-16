import type { PropType, ExtractPropTypes } from 'vue'
import type { RippleType, RippleOpacityType } from './interface'

export const Props = {
  /**
   * 自定义涟漪颜色
   */
  ripplesColor: {
    type: String,
    default: (): string => ''
  },
  /**
   * 移除涟漪节点的时间
   */
  duration: {
    type: Number,
    default: (): number => 400,
    validator: (val: number): boolean => val > 0
  },
  /**
   * 涟漪类型
   */
  type: {
    type: String as PropType<RippleType>,
    default: (): RippleType => 'default',
    validator: (val: RippleType): boolean => {
      return (
        ['default', 'primary', 'success', 'danger', 'warning'] as const
      ).includes(val)
    }
  },
  /**
   * 是否禁用
   */
  disabled: {
    type: Boolean,
    default: (): boolean => false
  },
  /**
   * 涟漪动画开始的透明度
   */
  startOpacity: {
    type: Number as PropType<RippleOpacityType>,
    default: (): RippleOpacityType => 0.5,
    validator: (val: RippleOpacityType): boolean => {
      return ([0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1] as const).includes(val)
    }
  },
  /**
   * 涟漪动画结束的透明度
   */
  endOpacity: {
    type: Number as PropType<RippleOpacityType>,
    default: (): RippleOpacityType => 0,
    validator: (val: RippleOpacityType): boolean => {
      return ([0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1] as const).includes(val)
    }
  },
  /**
   * 是否禁止选中
   */
  noSelect: {
    type: Boolean,
    default: (): boolean => true
  }
} as const

export type RipplePropsType = ExtractPropTypes<typeof Props>
