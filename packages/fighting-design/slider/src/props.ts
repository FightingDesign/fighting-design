import type { PropType, ExtractPropTypes, VNode, Component } from 'vue'

export const Props = {
  /**
   * v-model / modelValue 绑定值
   */
  modelValue: {
    type: [Number, Array] as PropType<number | number[]>,
    default: (): number => 0
  },
  /**
   * 步长
   */
  step: {
    type: [Number, String] as PropType<number | string>,
    default: (): number => 1
  },
  /**
   * 最小值
   */
  min: {
    type: [Number, String] as PropType<number | string>,
    default: (): number => 0
  },
  /**
   * 最大值
   */
  max: {
    type: [Number, String] as PropType<number | string>,
    default: (): number => 100
  },
  /**
   * 是否禁用
   */
  disabled: {
    type: Boolean,
    default: (): boolean => false
  },
  /**
   * 是否可范围性取值
   */
  range: {
    type: Boolean,
    default: (): boolean => false
  },
  /**
   * 自定义颜色（选中的颜色）
   */
  color: {
    type: String,
    default: (): string => ''
  },
  /**
   * 自定义滑块背景色
   */
  bgColor: {
    type: String,
    default: (): string => '#eeeeee'
  },
  /**
   * 是否可垂直
   */
  vertical: {
    type: Boolean,
    default: (): boolean => false
  },
  /**
   * 自定义小球上的 icon
   */
  icon: {
    type: Object as PropType<VNode | Component>,
    default: (): null => null
  }
} as const

export type SliderPropsType = ExtractPropTypes<typeof Props>
