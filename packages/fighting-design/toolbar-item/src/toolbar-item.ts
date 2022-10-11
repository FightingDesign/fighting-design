import type { PropType, ExtractPropTypes } from 'vue'

export const Props = {
  color: {
    type: String,
    default: (): string => ''
  },
  icon: {
    type: String,
    default: (): string => ''
  },
  iconSize: {
    type: [String, Number] as PropType<string | number>,
    default: (): string => '16px'
  },
  dataKey: {
    type: [String, Number] as PropType<string | number>,
    default: (): string => ''
  }
} as const

export const Emits = {
  click: (evt: MouseEvent): MouseEvent => evt
} as const

export type ToolbarItemPropsType = ExtractPropTypes<typeof Props>
