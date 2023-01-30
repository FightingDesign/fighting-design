import { setBooleanProp, setStringProp, setStringNumberProp, setNumberProp, setFunctionProp } from '../../_utils'
import type { ExtractPropTypes } from 'vue'
import type { TextareaResize } from './interface'
import type { InputChange, HandleEvent } from '../../_interface'

export const Props = {
  /** 绑定值 */
  modelValue: setStringProp(),
  /**
   * 元素的输入文本的行数
   *
   * @see rows https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/textarea#attr-rows
   */
  rows: setStringNumberProp(3),
  /**
   * 是否禁用
   *
   * @see disabled https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/textarea#attr-disabled
   */
  disabled: setBooleanProp(),
  /**
   * 最大输入长度
   *
   * @see maxLength https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/textarea#attr-maxlength
   */
  maxLength: setNumberProp(),
  /**
   * 是否自动获取焦点
   *
   * @see autofocus https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/textarea#attr-autofocus
   */
  autofocus: setBooleanProp(),
  /**
   * 原生 name 属性
   *
   * @see name https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/textarea#attr-name
   */
  name: setStringProp<string>('f-textarea'),
  /**
   * 占位符
   *
   * @see placeholder https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/textarea#attr-placeholder
   */
  placeholder: setStringProp(),
  /**
   * 是否只读
   *
   * @see readonly https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/textarea#attr-readonly
   */
  readonly: setBooleanProp(),
  /** input 事件触发的回调 */
  onInput: setFunctionProp<HandleEvent>(),
  /**
   * 拉伸方式
   *
   * @see resize https://developer.mozilla.org/zh-CN/docs/Web/CSS/resize
   * @values none both horizontal vertical
   * @default none
   */
  resize: setStringProp<TextareaResize>('none', (val: TextareaResize): boolean => {
    return (['none', 'both', 'horizontal', 'vertical'] as const).includes(val)
  }),
  /** 是否可清空 */
  clear: setBooleanProp(),
  /** 绑定值发生变化时触发的回调 */
  onChange: setFunctionProp<InputChange>(),
  /** 失去焦点时触发的回调 */
  onBlur: setFunctionProp<HandleEvent>(),
  /** 获取焦点时触发的回调 */
  onFocus: setFunctionProp<HandleEvent>()
} as const

export type TextareaProps = ExtractPropTypes<typeof Props>
