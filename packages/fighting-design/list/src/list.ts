import type { PropType, ExtractPropTypes, InjectionKey } from 'vue'
import type { listSize } from './interface'

export const Props = {
  listStyle: {
    type: String,
    default: (): string => ''
  },
  zebra: {
    type: Boolean,
    default: (): boolean => false
  },
  center: {
    type: Boolean,
    default: (): boolean => false
  },
  // hoverBright: {
  //   type: Boolean,
  //   default: (): boolean => false
  // },
  // important: {
  //   type: Array as PropType<number[]>,
  //   default: (): number[] => []
  // },
  textColor: {
    type: String,
    default: (): string => ''
  },
  borderColor: {
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
  maxHeight: {
    type: String,
    default: (): string => ''
  }
} as const

export type FPropsType = ExtractPropTypes<typeof Props>

export const listPropsKey: InjectionKey<FPropsType> = Symbol('list-props')
