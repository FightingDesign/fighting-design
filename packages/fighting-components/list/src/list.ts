import type { PropType, ExtractPropTypes, InjectionKey } from 'vue'
import type { listSize } from './interface'

export const Props = {
  showNum: {
    type: Boolean,
    default: (): boolean => false
  },
  showDisc: {
    type: Boolean,
    default: (): boolean => false
  },
  zebra: {
    type: Boolean,
    default: (): boolean => false
  },
  single: {
    type: Boolean,
    default: (): boolean => false
  },
  center: {
    type: Boolean,
    default: (): boolean => false
  },
  hoverShow: {
    type: Boolean,
    default: (): boolean => false
  },
  importantList: {
    type: Array as PropType<number[]>,
    default: (): number[] => []
  },
  textColor: {
    type: String,
    default: (): string => ''
  },
  borderColor: {
    type: String,
    default: (): string => ''
  },
  background: {
    type: String,
    default: (): string => ''
  },
  size: {
    type: String as PropType<listSize>,
    default: (): listSize => 'middle',
    validator: (val: listSize): boolean => {
      return (['large', 'middle', 'small'] as const).includes(val)
    }
  },
  split: {
    type: Boolean,
    default: (): boolean => false
  },
  maxHeight: {
    type: String,
    default: (): string => ''
  }
} as const

export type FPropsType = ExtractPropTypes<typeof Props>

export const listPropsKey: InjectionKey<FPropsType> = Symbol('list-props')
