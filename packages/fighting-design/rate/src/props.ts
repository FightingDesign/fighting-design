import { setBooleanProp, setStringProp } from '../../_utils'
import type { PropType, ExtractPropTypes } from 'vue'
import type { RateChange } from './interface'
import type { FightingIcon } from '../../_interface'

export const Props = {
  /** 绑定值 */
  modelValue: {
    type: Number,
    default: (): number => 0,
    validator: (val: number): boolean => val >= 0
  },
  /** 最大分值，展示的星星数量 */
  max: {
    type: Number,
    default: (): number => 5,
    validator: (val: number): boolean => val > 0
  },
  /** 选中颜色 */
  effectColor: {
    type: String,
    default: (): string => '#fcc202'
  },
  /** 未选中的颜色 */
  invalidColor: {
    type: String,
    default: (): string => '#eef'
  },
  /** 是否只读 */
  readonly: setBooleanProp(),
  /** 自定义 icon */
  icon: {
    type: Object as PropType<FightingIcon>,
    default: (): null => null
  },
  /** 图标尺寸 */
  size: {
    type: [String, Number] as PropType<string | number>,
    default: (): number => 25
  },
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
  textSize: {
    type: [String, Number] as PropType<string | number>,
    default: (): null => null
  },
  /** 当分数发生改变时触发 */
  onChange: {
    type: Function as PropType<RateChange>,
    default: (): null => null
  }
} as const

export type RateProps = ExtractPropTypes<typeof Props>
