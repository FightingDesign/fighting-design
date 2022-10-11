import type { PropType, ExtractPropTypes } from 'vue'
import type { DividerPositionType, DividerType } from './interface'

export const Props = {
  position: {
    type: String as PropType<DividerPositionType>,
    default: (): DividerPositionType => 'center',
    validator: (value: DividerPositionType): boolean => {
      return (['left', 'center', 'right'] as const).includes(value)
    }
  },
  vertical: {
    type: Boolean,
    default: (): boolean => false
  },
  color: {
    type: String,
    default: (): string => ''
  },
  fontColor: {
    type: String,
    default: (): string => ''
  },
  margin: {
    type: String,
    default: (): string => ''
  },
  background: {
    type: String,
    default: (): string => ''
  },
  type: {
    type: String as PropType<DividerType>,
    validator: (value: DividerType): boolean => {
      return (['dashed', 'dotted', 'double', 'solid'] as const).includes(value)
    },
    default: (): DividerType => 'solid'
  }
} as const

export type DividerPropsType = ExtractPropTypes<typeof Props>
