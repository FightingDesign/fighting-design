import type { PropType, ExtractPropTypes, VNode, Component } from 'vue'
import type { RateChangeInterface } from './interface'

export const Props = {
  /**
   * 绑定值
   */
  modelValue: {
    type: Number,
    default: (): number => 0,
    validator: (val: number): boolean => val >= 0
  },
  /**
   * 最大分值，展示的星星数量
   */
  max: {
    type: Number,
    default: (): number => 5,
    validator: (val: number): boolean => val > 0
  },
  /**
   * 选中颜色
   */
  effectColor: {
    type: String,
    default: (): string => '#fcc202'
  },
  /**
   * 未选中的颜色
   */
  invalidColor: {
    type: String,
    default: (): string => '#eef'
  },
  /**
   * 是否只读
   */
  readonly: {
    type: Boolean,
    default: (): boolean => false
  },
  /**
   * 自定义 icon
   */
  icon: {
    type: Object as PropType<VNode | Component>,
    default: (): null => null
  },
  /**
   * 图标尺寸
   */
  size: {
    type: [String, Number] as PropType<string | number>,
    default: (): string => '25px'
  },
  /**
   * 是否展示辅助文字
   */
  textShow: {
    type: Boolean,
    default: (): boolean => false
  },
  /**
   * 辅助文字颜色
   */
  textColor: {
    type: String,
    default: (): string => ''
  },
  /**
   * 辅助文字数组
   */
  textArr: {
    type: Array as PropType<string[]>,
    default: (): string[] => ['极差', '失望', '一般', '不错', '很棒']
  },
  /**
   * 辅助文字尺寸
   */
  textSize: {
    type: [String, Number] as PropType<string | number>,
    default: (): string => ''
  },
  /**
   * 当分数发生改变时触发
   */
  change: {
    type: Function as PropType<RateChangeInterface>,
    default: (): null => null
  }
} as const

export type RatePropsType = ExtractPropTypes<typeof Props>
