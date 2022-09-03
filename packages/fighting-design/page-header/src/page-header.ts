import type { PropType } from 'vue'

export const Props = {
  icon: {
    type: String as PropType<string>,
    default: (): string => 'f-icon-leftarrow'
  },
  iconSize: {
    type: String as PropType<string>,
    default: (): string => ''
  },
  backText: {
    type: String as PropType<string>,
    default: (): string => '返回'
  },
  title: {
    type: String as PropType<string>,
    default: (): string => ''
  },
  titleClass: {
    type: [String, Object, Array] as PropType<
      string | object | (string | object)[]
    >,
    default: (): string => ''
  },
  titleBold: {
    type: Boolean as PropType<boolean>,
    default: (): boolean => false
  },
  titleColor: {
    type: String as PropType<string>,
    default: (): string => ''
  },
  titleCenter: {
    type: Boolean as PropType<boolean>,
    default: (): boolean => false
  },
  subtitle: {
    type: String as PropType<string>,
    default: (): string => ''
  },
  subtitleClass: {
    type: [String, Object, Array] as PropType<
      string | object | (string | object)[]
    >,
    default: (): string => ''
  }
} as const

export const Emits = {
  back: (): boolean => true
} as const
