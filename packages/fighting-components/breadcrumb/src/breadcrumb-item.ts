// import type { PropType } from 'vue'
import type BreadcrumbItem from './breadcrumb-item.vue'
// export const definePropType = <T>(val: any): PropType<T> => val

export const Props = {
  to: {
    // type: definePropType([String, Object]),
    type: [String, Object],
    default: '',
  },
  replace: {
    type: Boolean,
    default: false,
  },
}
export type BreadcrumbItemInstance = InstanceType<typeof BreadcrumbItem>
