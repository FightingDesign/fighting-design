import type { ExtractPropTypes, PropType } from 'vue'

export const Props = {
  show: {
    type: Boolean as PropType<boolean>,
    default: (): boolean => false
  },
  close: {
    type: Boolean as PropType<boolean>,
    default: (): boolean => false
  },
  text: {
    type: String as PropType<string>,
    default: (): string => ''
  },
  icon: {
    type: String as PropType<string>,
    default: (): string => ''
  },
  textColor: {
    type: String as PropType<string>,
    default: (): string => ''
  },
  textSize: {
    type: String as PropType<string>,
    default: (): string => ''
  },
  background: {
    type: String as PropType<string>,
    default: (): string => ''
  },
  opacity: {
    type: Number as PropType<number>,
    default: (): number | null => null
  }
} as const

export const Emits = {
  close: (evt: MouseEvent): MouseEvent => evt
} as const

export type FPropsType = ExtractPropTypes<typeof Props>
