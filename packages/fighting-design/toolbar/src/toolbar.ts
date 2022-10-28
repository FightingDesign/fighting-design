import type { PropType, ExtractPropTypes } from 'vue'
import type { ToolbarType, ToolbarClickEmitInterface } from './interface'

export const Props = {
  round: {
    type: Boolean,
    default: (): boolean => false
  },
  size: {
    type: String as PropType<ToolbarType>,
    default: (): ToolbarType => 'large',
    validator: (val: ToolbarType): boolean => {
      return (['large', 'middle', 'small', 'mini'] as const).includes(val)
    }
  },
  block: {
    type: Boolean,
    default: (): boolean => false
  },
  background: {
    type: String,
    default: (): string => ''
  },
  textColor: {
    type: String,
    default: (): string => ''
  },
  fixed: {
    type: Boolean,
    default: (): boolean => false
  },
  width: {
    type: String,
    default: (): string => ''
  },
  height: {
    type: String,
    default: (): string => ''
  }
} as const

export const Emits = {
  click: (target: ToolbarClickEmitInterface): ToolbarClickEmitInterface => target
} as const

export type ToolbarPropsType = ExtractPropTypes<typeof Props>
