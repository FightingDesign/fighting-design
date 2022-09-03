import type { ExtractPropTypes, PropType } from 'vue'

export const Props = {
  content: {
    type: String as PropType<string>,
    default: (): string => ''
  },
  width: {
    type: Number as PropType<number>,
    default: (): number => 280
  },
  height: {
    type: Number as PropType<number>,
    default: (): number => 200
  },
  fontSize: {
    type: String as PropType<string>,
    default: (): string => '30px'
  },
  fontColor: {
    type: String as PropType<string>,
    default: (): string => '#333'
  },
  image: {
    type: String as PropType<string>,
    default: (): string => ''
  },
  block: {
    type: Boolean as PropType<boolean>,
    default: (): boolean => false
  },
  zIndex: {
    type: Number as PropType<number>,
    default: (): number => 100
  }
} as const

export type FPropsType = ExtractPropTypes<typeof Props>
