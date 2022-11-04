import type { ExtractPropTypes, PropType, VNode, Component } from 'vue'
import type { HandleMouseEventInterface } from '../../_interface'

export const Props = {
  icon: {
    type: Object as PropType<VNode | Component>,
    default: (): null => null
  },
  iconSize: {
    type: [String, Number] as PropType<string | number>,
    default: (): string => '16px'
  },
  backText: {
    type: String,
    default: (): string => '返回'
  },
  title: {
    type: String,
    default: (): string => ''
  },
  titleBold: {
    type: Boolean,
    default: (): boolean => false
  },
  titleColor: {
    type: String,
    default: (): string => ''
  },
  titleCenter: {
    type: Boolean,
    default: (): boolean => false
  },
  subtitle: {
    type: String,
    default: (): string => ''
  },
  back: {
    type: Function as PropType<HandleMouseEventInterface>,
    default: (): null => null
  }
} as const

export type PageHeaderPropsType = ExtractPropTypes<typeof Props>
