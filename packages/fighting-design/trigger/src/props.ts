import type { ExtractPropTypes, PropType } from 'vue'
import type { TriggerTriggerType } from './interface'

export const Props = {
  /**
  * 触发器和内容直接的间距
  */
  spacing: {
    type: [String, Number] as PropType<string | number>,
    default: (): null => null
  },
  /**
   * 是否禁用
   */
  disabled: {
    type: Boolean,
    default: (): boolean => false
  },
  /**
   * 触发方式：移入、点击
   *
   * @values hover click
   * @defaultValue hover
   */
  trigger: {
    type: String as PropType<TriggerTriggerType>,
    default: (): TriggerTriggerType => 'hover',
    validator: (val: TriggerTriggerType): boolean => {
      return (['hover', 'click'] as const).includes(val)
    }
  },
  /**
   * 是否带有箭头
   */
  arrow: {
    type: Boolean,
    default: (): boolean => false
  },
  /**
   * 弹出动画持续时间
   */
  enterDuration: {
    type: Number,
    default: (): null => null
  },
  /**
  * 关闭动画持续时间
  */
  leaveDuration: {
    type: Number,
    default: (): null => null
  }
} as const

export type TriggerPropsType = ExtractPropTypes<typeof Props>
