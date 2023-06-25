import {
  setBooleanProp,
  setStringProp,
  setStringNumberProp,
  setNumberProp,
  setFunctionProp
} from '../../_utils'
import type { ExtractPropTypes } from 'vue'
import type { TextareaResize } from './interface'
import type { InputChange, HandleEvent } from '../../_interface'
import type { InputEnter } from '../../input'

export const Props = {
  /** 绑定值 */
  modelValue: {
    ...setStringNumberProp(),
    required: true
  },
  /**
   * 元素的输入文本的行数
   *
   * @see rows https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/textarea#attr-rows
   */
  rows: setStringNumberProp(),
  /**
   * 是否禁用
   *
   * @see disabled https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/textarea#attr-disabled
   */
  disabled: setBooleanProp(),
  /** 是否自适应高度 */
  autoHeight: setBooleanProp(),
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
  /**
   * 设置字体大小
   *
   * @see font-size https://developer.mozilla.org/zh-CN/docs/Web/CSS/font-size
   */
  fontSize: setStringNumberProp(),
  /** input 事件触发的回调 */
  onInput: setFunctionProp<HandleEvent>(),
  /**
   * 拉伸方式
   *
   * @see resize https://developer.mozilla.org/zh-CN/docs/Web/CSS/resize
   * @values none both horizontal vertical
   */
  resize: setStringProp<TextareaResize>(undefined, (val: TextareaResize): boolean => {
    return (['none', 'both', 'horizontal', 'vertical'] as const).includes(val)
  }),
  /** 是否可清空 */
  clear: setBooleanProp(),
  /** 绑定值发生变化时触发的回调 */
  onChange: setFunctionProp<InputChange>(),
  /** 失去焦点时触发的回调 */
  onBlur: setFunctionProp<HandleEvent>(),
  /** 获取焦点时触发的回调 */
  onFocus: setFunctionProp<HandleEvent>(),
  /** 按下回车触发的 */
  onEnter: setFunctionProp<InputEnter>()
} as const

/** textarea 组件 props 类型 */
export type TextareaProps = ExtractPropTypes<typeof Props>
