// import type { PropType } from 'vue'
import type BreadcrumbItem from './breadcrumb-item.vue'
// export const definePropType = <T>(val: any): PropType<T> => val

export const Props = {
  to: {
    // type: definePropType([String, Object]),
    type: [String, Object],
    default: (): string => ''
  },
  replace: {
    type: Boolean,
    default: (): boolean => false
  }
}

export type BreadcrumbItemInstance = InstanceType<typeof BreadcrumbItem>
