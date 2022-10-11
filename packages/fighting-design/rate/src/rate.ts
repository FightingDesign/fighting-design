import type { PropType, ExtractPropTypes } from 'vue'

export const Props = {
  modelValue: {
    type: Number,
    default: (): number => 0,
    validator: (val: number): boolean => val >= 0
  },
  max: {
    type: Number,
    default: (): number => 5,
    validator: (val: number): boolean => val > 0
  },
  effectColor: {
    type: String,
    default: (): string => '#fcc202'
  },
  invalidColor: {
    type: String,
    default: (): string => '#eef'
  },
  readonly: {
    type: Boolean,
    default: (): boolean => false
  },
  // half: {
  //   type: Boolean,
  //   default: (): boolean => false
  // },
  icon: {
    type: String,
    default: (): string => 'f-icon-collection-fill'
  },
  size: {
    type: [String, Number] as PropType<string | number>,
    default: (): string => '25px'
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
    default: (): string[] => ['极差', '失望', '一般', '不错', '很棒']
  },
  textSize: {
    type: [String, Number] as PropType<string | number>,
    default: (): string => ''
  }
} as const

export const Emits = {
  change: (val: number): number => val,
  'update:modelValue': (val: number): number => val
} as const

export type RatePropsType = ExtractPropTypes<typeof Props>
