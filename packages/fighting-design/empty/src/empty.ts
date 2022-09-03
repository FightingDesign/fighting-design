import type { ExtractPropTypes, CSSProperties, PropType } from 'vue'

export const Props = {
  content: {
    type: String as PropType<string>,
    default: (): string => ''
  },
  contentSize: {
    type: String as PropType<string>,
    default: (): string => ''
  },
  contentColor: {
    type: String as PropType<string>,
    default: (): string => ''
  },
  imageSrc: {
    type: String as PropType<string>,
    default: (): string => ''
  },
  imageSize: {
    type: String as PropType<string>,
    default: (): string => ''
  },
  background: {
    type: String as PropType<string>,
    default: (): string => ''
  },
  styleList: {
    type: Object as PropType<CSSProperties>,
    default: (): CSSProperties => {
      return {} as const
    }
  }
} as const

export type FPropsType = ExtractPropTypes<typeof Props>
