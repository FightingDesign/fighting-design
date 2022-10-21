import type { ExtractPropTypes, InjectionKey, PropType, VNode, Component } from 'vue'

export const Props = {
  separator: {
    type: Object as PropType<VNode | Component>,
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
    type: [String, Number] as PropType<string | number>,
    default: (): string => ''
  }
} as const

export type BreadcrumbPropsType = ExtractPropTypes<typeof Props>

export const BreadcrumbPropsKey: InjectionKey<BreadcrumbPropsType> =
  Symbol('BreadcrumbPropsKey')
