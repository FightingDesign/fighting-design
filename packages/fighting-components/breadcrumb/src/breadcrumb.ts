
import { ExtractPropTypes,  InjectionKey } from 'vue'
import type Breadcrumb from './breadcrumb.vue'

export const breadcrumbProps = {
  separator: {
    type: String,
    default: '/',
  },
  separatorIcon: {
    type: String,
    default: '',
  },
  itemColor: {
    type: String,
    default: "gray"
  },
  separatorColor: {
    type: String,
    default: "gray"
  }
}
export type BreadcrumbProps = ExtractPropTypes<typeof breadcrumbProps>
export type BreadcrumbInstance = InstanceType<typeof Breadcrumb>

export const breadcrumbKey: InjectionKey<BreadcrumbProps> =
  Symbol('breadcrumbKey')