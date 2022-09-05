import type { CSSProperties, PropType } from 'vue'

export const Props = {
  content: {
    type: String,
    default: (): string => ''
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
    type: String,
    default: (): string => ''
  },
  background: {
    type: String,
    default: (): string => ''
  },
  styleList: {
    type: Object as PropType<CSSProperties>,
    default: (): CSSProperties => {
      return {} as const
    }
  }
} as const
