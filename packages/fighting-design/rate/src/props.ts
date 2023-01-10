import {
  setBooleanProp,
  setStringProp,
  setStringNumberProp,
  setObjectProp,
  setNumberProp,
  setFunctionProp
} from '../../_utils'
import type { PropType, ExtractPropTypes } from 'vue'
import type { RateChange } from './interface'
import type { FightingIcon } from '../../_interface'

export const Props = {
  /** 绑定值 */
  modelValue: setNumberProp(0),
  /** 最大分值，展示的星星数量 */
  max: setNumberProp(5),
  /** 选中颜色 */
  effectColor: setStringProp('#fcc202'),
  /** 未选中的颜色 */
  invalidColor: setStringProp('#eef'),
  /** 是否只读 */
  readonly: setBooleanProp(),
  /** 自定义 icon */
  icon: setObjectProp<FightingIcon>(),
  /** 图标尺寸 */
  size: setStringNumberProp(25),
  /** 是否展示辅助文字 */
  textShow: setBooleanProp(),
  /** 辅助文字颜色 */
  textColor: setStringProp(),
  /** 辅助文字数组 */
  textArr: {
    type: Array as PropType<string[]>,
    default: (): string[] => ['极差', '失望', '一般', '不错', '很棒']
  },
  /** 辅助文字尺寸 */
  textSize: setStringNumberProp(),
  /** 当分数发生改变时触发 */
  onChange: setFunctionProp<RateChange>()
} as const

export type RateProps = ExtractPropTypes<typeof Props>
