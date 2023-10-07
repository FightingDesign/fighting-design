import {
  setBooleanProp,
  setStringProp,
  setNumberProp,
  setFunctionProp
} from '../../_utils'
import { FIGHTING_SIZE, FIGHTING_TYPE } from '../../_tokens'
import type { InputUpdate } from '../../input'
import type { ExtractPropTypes } from 'vue'
import type { InputNumberModel } from './interface'
import type {
  HandleEvent,
  FightingSize,
  InputChange,
  FightingType
} from '../../_interface'

export const Props = {
  /**
   * 绑定值
   *
   * @default 1
   */
  modelValue: setNumberProp(0),
  /**
   * 模式
   *
   * @values default button switch
   * @default default
   */
  model: setStringProp<InputNumberModel>('default', (val: InputNumberModel): boolean => {
    return (['default', 'button', 'switch'] as const).includes(val)
  }),
  /**
   * 数值精度
   *
   * @default 0
   */
  precision: setNumberProp(0),
  /** 切换的按钮类型 */
  /**
   * 按钮的类型（非自定义按钮颜色时有效）
   *
   * @values default primary success danger warning
   */
  buttonType: setStringProp<FightingType>(undefined, (val: FightingType): boolean => {
    return FIGHTING_TYPE.includes(val)
  }),
  /**
   * 步长
   *
   * @default 1
   */
  step: setNumberProp(1),
  /**
   * 尺寸
   *
   * @values large middle small mini
   * @default middle
   */
  size: setStringProp<FightingSize>('middle', (val: FightingSize): boolean => {
    return FIGHTING_SIZE.includes(val)
  }),
  /** 是否禁用 */
  disabled: setBooleanProp(),
  /** 最大值 */
  max: setNumberProp(),
  /** 最小值 */
  min: setNumberProp(),
  /** 最大输入长度 */
  maxLength: setNumberProp(),
  /** 是否自动聚焦 */
  autofocus: setBooleanProp(),
  /**
   * 原生 name 属性
   *
   * @see name https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/Input#attr-name
   */
  name: setStringProp<string>('f-input-number'),
  /**
   * 占位符
   *
   * @see placeholder https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/Input#attr-placeholder
   */
  placeholder: setStringProp(),
  /** 是否可清除 */
  clear: setBooleanProp(),
  /** 是否只读 */
  readonly: setBooleanProp(),
  /** 绑定值发生改变时触发的回调 */
  onChange: setFunctionProp<InputChange>(),
  /** 失去焦点时触发的回调 */
  onBlur: setFunctionProp<HandleEvent>(),
  /** 获得焦点时触发的回调 */
  onFocus: setFunctionProp<HandleEvent>(),
  /** input 事件触发的回调 */
  onInput: setFunctionProp<InputUpdate>()
} as const

/** input-number 组件 props 类型 */
export type InputNumberProps = ExtractPropTypes<typeof Props>
