import { setBooleanProp, setStringProp, setObjectProp } from '../../_utils'
import type { ExtractPropTypes, PropType } from 'vue'
import type { HandleEvent, FightingIcon } from '../../_interface'

export const Props = {
  /** 返回图标 */
  icon: setObjectProp<FightingIcon>(),
  /** 返回图标大小 */
  iconSize: {
    type: [String, Number] as PropType<string | number>,
    default: (): string => '16px'
  },
  /** 返回文本 */
  backText: setStringProp(),
  /** 标题文本 */
  title: setStringProp(),
  /** 标题是否粗体 */
  titleBold: setBooleanProp(),
  /** 标题颜色 */
  titleColor: setStringProp(),
  /**标题是否居中 */
  titleCenter: setBooleanProp(),
  /** 副标题文本 */
  subtitle: setStringProp(),
  /** 点击左侧区域触发 */
  onBack: {
    type: Function as PropType<HandleEvent>,
    default: (): null => null
  }
} as const

export type PageHeaderProps = ExtractPropTypes<typeof Props>
