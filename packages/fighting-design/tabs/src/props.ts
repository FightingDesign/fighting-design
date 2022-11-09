import type { ExtractPropTypes, PropType } from 'vue'
import { TabsPaneName, TabsPosition } from './interface'

export const Props = {
  position: {
    type: String as PropType<TabsPosition>,
    default: 'top'
  },
  modelValue: [String, Number] as PropType<TabsPaneName>,
} as const

export const Emits = {
  'update:modelValue': (val: String | Number):typeof val => val
} as const

export type TabsPropsType = ExtractPropTypes<typeof Props>

export const TabsProvideKey = Symbol('f-tabs')