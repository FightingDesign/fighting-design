import type { PropType, ExtractPropTypes } from 'vue'

export const Props = {
  content: {
    type: String,
    default: (): string => '暂无数据'
  },
  contentSize: {
    type: String,
    default: (): string => ''
  },
  contentColor: {
    type: String,
    default: (): string => ''
  },
  imageSrc: {
    type: String,
    default: (): string => ''
  },
  imageSize: {
    type: [String, Number] as PropType<string | number>,
    default: (): string => ''
  },
  background: {
    type: String,
    default: (): string => ''
  }
} as const

export type EmptyPropsType = ExtractPropTypes<typeof Props>
