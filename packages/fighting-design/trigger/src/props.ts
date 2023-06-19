import {
  setBooleanProp,
  setStringNumberProp,
  setNumberProp,
  setStringProp,
  setFunctionProp
} from '../../_utils'
import type { ExtractPropTypes, InjectionKey, PropType } from 'vue'
import type { TriggerTrigger, TriggerProvide, TriggerChange } from './interface'

export const Props = {
  /** 触发器和内容之间的间距 */
  spacing: setStringNumberProp(),
  /** 是否禁用 */
  disabled: setBooleanProp(),
  /**
   * 触发方式：移入、点击
   *
   * @values hover click
   * @default hover
   */
  trigger: setStringProp<TriggerTrigger>('hover', (val: TriggerTrigger): boolean => {
    return (['hover', 'click'] as const).includes(val)
  }),
  width: {
    type: [Number, String] as PropType<number | string>,
    default: (): null => null
  },
  /** 是否带有箭头 */
  arrow: setBooleanProp(),
  /** 弹出动画持续时间 */
  enterDuration: setNumberProp(),
  /** 关闭动画持续时间 */
  leaveDuration: setNumberProp(),
  /** 弹窗状态改变时触发的回调 */
  onChange: setFunctionProp<TriggerChange>(),
  /** 弹窗状态打开时触发的回调 */
  onOpen: setFunctionProp<TriggerChange>(),
  /** 弹窗状态关闭时触发的回调 */
  onClose: setFunctionProp<TriggerChange>()
} as const

/** trigger 组件 props 类型 */
export type TriggerProps = ExtractPropTypes<typeof Props>

/** trigger 组件注入的关闭方法依赖项 */
export const TRIGGER_CLOSE_KEY: InjectionKey<TriggerProvide> = Symbol('trigger-close-key')
