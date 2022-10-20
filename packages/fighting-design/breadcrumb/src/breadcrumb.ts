import type { ExtractPropTypes, InjectionKey, PropType, VNode } from 'vue'

export const Props = {
  separator: {
    type: Object as PropType<VNode>,
    default: (): null => null
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
