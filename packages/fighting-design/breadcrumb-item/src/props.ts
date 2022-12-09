import type { ExtractPropTypes, PropType } from 'vue'
import type { BreadcrumbItemToInterface } from './interface'
import type { FightingIcon } from '../../_interface'

export const Props = {
  /**
   * 自定义文字颜色
   */
  fontColor: {
    type: String,
    default: (): null => null
  },
  /**
   * 自定义分隔符颜色
   */
  iconColor: {
    type: String,
    default: (): null => null
  },
  /**
   * 自定义分隔符
   */
  separator: {
    type: Object as PropType<FightingIcon>,
    default: (): null => null
  },
  /**
   * 跳转的路径参数
   */
  to: {
    type: [String, Object] as PropType<string | BreadcrumbItemToInterface>,
    default: (): null => null
  }
}

export type BreadcrumbItemProps = ExtractPropTypes<typeof Props>
