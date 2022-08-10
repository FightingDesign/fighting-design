import type { ExtractPropTypes } from 'vue'

export const Props = {
  content: {
    type: String,
    default: (): string => ''
  },
  width: {
    type: Number,
    default: (): number => 280
  },
  height: {
    type: Number,
    default: (): number => 200
  },
  fontSize: {
    type: String,
    default: (): string => '30px'
  },
  fontColor: {
    type: String,
    default: (): string => '#333'
  },
  image: {
    type: String,
    default: (): string => ''
  },
  block: {
    type: Boolean,
    default: (): boolean => false
  },
  zIndex: {
    type: Number,
    default: (): number => 100
  }
} as const

export type FPropsType = ExtractPropTypes<typeof Props>
