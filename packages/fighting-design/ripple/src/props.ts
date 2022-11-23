import type { PropType, ExtractPropTypes } from 'vue'
import type { RippleType } from './interface'

export const Props = {
  /**
   * 自定义涟漪颜色
   */
  ripplesColor: {
    type: String,
    default: (): null => null
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
   * 
   * @values default primary success danger warning
   * @defaultValue default
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
    type: Number,
    default: (): number => 0.5
  },
  /**
   * 涟漪动画结束的透明度
   */
  endOpacity: {
    type: Number,
    default: (): number => 0
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
