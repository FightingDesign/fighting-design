import type { PropType } from 'vue'

export const Props = {
  icon: {
    type: String,
    default: (): string => 'f-icon-leftarrow'
  },
  iconSize: {
    type: String,
    default: (): string => ''
  },
  backText: {
    type: String,
    default: (): string => '返回'
  },
  title: {
    type: String,
    default: (): string => ''
  },
  titleClass: {
    type: [String, Object, Array] as PropType<
      string | object | (string | object)[]
    >,
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
