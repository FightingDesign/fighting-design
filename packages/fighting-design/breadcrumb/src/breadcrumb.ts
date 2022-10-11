import type { ExtractPropTypes, InjectionKey } from 'vue'

export const Props = {
  separator: {
    type: String,
    default: (): string => '/'
  },
  separatorIcon: {
    type: String,
    default: (): string => ''
  },
  itemColor: {
    type: String,
    default: (): string => ''
  },
  separatorColor: {
    type: String,
    default: (): string => ''
  },
  fontSize: {
    type: String,
    default: (): string => ''
  }
} as const

export type BreadcrumbPropsType = ExtractPropTypes<typeof Props>

export const BreadcrumbPropsKey: InjectionKey<BreadcrumbPropsType> =
  Symbol('BreadcrumbPropsKey')
