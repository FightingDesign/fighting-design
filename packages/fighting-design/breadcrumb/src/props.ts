import type {
  ExtractPropTypes,
  InjectionKey,
  PropType,
  VNode,
  Component
} from 'vue'

export const Props = {
  /**
   * @zh 自定义分隔符
   */
  separator: {
    type: Object as PropType<VNode | Component>,
    default: (): null => null
  },
  /**
   * @zh 导航文字颜色
   */
  itemColor: {
    type: String,
    default: (): null => null
  },
  /**
   * @zh icon 颜色
   */
  iconColor: {
    type: String,
    default: (): null => null
  },
  /**
   * @zh 自定义文字大小
   */
  fontSize: {
    type: [String, Number] as PropType<string | number>,
    default: (): null => null
  }
} as const

export type BreadcrumbPropsType = ExtractPropTypes<typeof Props>

export const BREADCRUMB_PROPS_KEY: InjectionKey<BreadcrumbPropsType> = Symbol(
  'breadcrumb-props-key'
)
