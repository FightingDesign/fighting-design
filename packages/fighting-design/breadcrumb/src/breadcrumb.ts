import type { ExtractPropTypes, InjectionKey, PropType } from 'vue'

export const Props = {
  separator: {
    type: String as PropType<string>,
    default: (): string => '/'
  },
  separatorIcon: {
    type: String as PropType<string>,
    default: (): string => ''
  },
  itemColor: {
    type: String as PropType<string>,
    default: (): string => ''
  },
  separatorColor: {
    type: String as PropType<string>,
    default: (): string => ''
  },
  fontSize: {
    type: String as PropType<string>,
    default: (): string => ''
  }
} as const

export type FPropsType = ExtractPropTypes<typeof Props>

export const BreadcrumbPropsKey: InjectionKey<FPropsType> =
  Symbol('BreadcrumbPropsKey')
