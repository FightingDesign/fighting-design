import type { ExtractPropTypes, InjectionKey } from 'vue'
import type Breadcrumb from './breadcrumb.vue'

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
    default: (): string => 'gray'
  },
  separatorColor: {
    type: String,
    default: (): string => 'gray'
  }
}
export type BreadcrumbProps = ExtractPropTypes<typeof Props>
export type BreadcrumbInstance = InstanceType<typeof Breadcrumb>

export const breadcrumbKey: InjectionKey<BreadcrumbProps> =
  Symbol('breadcrumbKey')
