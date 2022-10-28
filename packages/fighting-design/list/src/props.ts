import type { PropType, ExtractPropTypes, InjectionKey } from 'vue'
import type { ListSizeType } from './interface'

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
  textColor: {
    type: String,
    default: (): string => ''
  },
  borderColor: {
    type: String,
    default: (): string => ''
  },
  size: {
    type: String as PropType<ListSizeType>,
    default: (): ListSizeType => 'middle',
    validator: (val: ListSizeType): boolean => {
      return (['large', 'middle', 'small'] as const).includes(val)
    }
  },
  maxHeight: {
    type: [String, Number] as PropType<string | number>,
    default: (): string => ''
  }
} as const

export type ListPropsType = ExtractPropTypes<typeof Props>

export const listPropsKey: InjectionKey<ListPropsType> = Symbol('list-props')
