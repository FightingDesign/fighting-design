import { setObjectProp, setStringProp } from '../../_utils'
import type { ExtractPropTypes, PropType } from 'vue'
import type { BreadcrumbItemTo } from './interface'
import type { FightingIcon } from '../../_interface'

export const Props = {
  /** 自定义文字颜色 */
  fontColor: setStringProp(),
  /** 自定义分隔符颜色 */
  iconColor: setStringProp(),
  /** 自定义分隔符 */
  separator: setObjectProp<FightingIcon>(),
  /** 跳转的路径参数 */
  to: {
    type: [String, Object] as PropType<string | BreadcrumbItemTo>,
    default: (): null => null
  }
}

/** breadcrumb-item 组件 props 类型 */
export type BreadcrumbItemProps = ExtractPropTypes<typeof Props>
