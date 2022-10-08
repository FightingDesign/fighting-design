import type { PropType, ExtractPropTypes } from 'vue'

export const Props = {
  effectColor: {
    type: String,
    default: (): string => ''
  },
  invalidColor: {
    type: String,
    default: (): string => ''
  },
  readonly: {
    type: Boolean,
    default: (): boolean => false
  },
  max: {
    type: Number,
    default: (): number => 5
  },
  half: {
    type: Boolean,
    default: (): boolean => false
  },
  icon: {
    type: String,
    default: (): string => ''
  },
  doubleClear: {
    type: Boolean,
    default: (): boolean => false
  },
  size: {
    type: [String, Number] as PropType<string | number>,
    default: (): string => '26px'
  },
  textShow: {
    type: Boolean,
    default: (): boolean => false
  },
  textColor: {
    type: String,
    default: (): string => ''
  },
  textArr: {
    type: Array as PropType<string[]>,
    default: (): [] => []
  },
  textSize: {
    type: [String, Number] as PropType<string | number>,
    default: (): string => ''
  },
  modelValue: {
    type: Number,
    default: (): number => 0
  }
} as const

export const Emits = {
  change: (val: number) => val,
  'update:modelValue': (val: number) => val
} as const

export type RatePropsType = ExtractPropTypes<typeof Props>
