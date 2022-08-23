import type { PropType } from 'vue'

export const Props = {
  icon: {
    type: String,
    default: (): String => 'f-icon-leftarrow'
  },
  iconSize: {
    type: String,
    default: (): String => ''
  },
  backText: {
    type: String,
    default: (): String => '返回'
  },
  title: {
    type: String,
    default: (): String => ''
  },
  titleClass: {
    type: [String, Object, Array] as PropType<
      String | Object | Array<String | Object>
    >,
    default: (): String => ''
  },
  titleBold: {
    type: Boolean,
    default: (): Boolean => false
  },
  titleColor: {
    type: String,
    default: (): String => ''
  },
  titleCenter: {
    type: Boolean,
    default: (): Boolean => false
  },
  subtitle: {
    type: String,
    default: (): String => ''
  },
  subtitleClass: {
    type: [String, Object, Array] as PropType<
      String | Object | Array<String | Object>
    >,
    default: (): String => ''
  }
} as const

export const Emits = {
  back: (): boolean => true
} as const
