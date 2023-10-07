import {
  setBooleanProp,
  setStringProp,
  setStringNumberProp,
  setObjectProp,
  setNumberProp,
  setFunctionProp
} from '../../_utils'
import { FIGHTING_SIZE } from '../../_tokens'
import type { ExtractPropTypes } from 'vue'
import type { InputType, InputUpdate, InputEnter } from './interface'
import type { HandleEvent, FightingSize, FightingIcon } from '../../_interface'

export const Props = {
  /** 绑定值 */
  modelValue: setStringNumberProp(),
  /**
   * 类型
   *
   * 文字输入框或者密码输入框
   *
   * @values text password number
   * @default text
   */
  type: setStringProp<InputType>('text', (val: InputType): boolean => {
    return (['text', 'password', 'number'] as const).includes(val)
  }),
  /**
   * 尺寸
   *
   * @values large middle small mini
   */
  size: setStringProp<FightingSize>(undefined, (val: FightingSize): boolean => {
    return FIGHTING_SIZE.includes(val)
  }),
  /**
   * 是否禁用
   *
   * @see disabled https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/Input#attr-disabled
   */
  disabled: setBooleanProp(),
  /**
   * 最大（数字或日期时间）值
   *
   * @see max https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/Input#attr-max
   */
  max: setNumberProp(),
  /**
   * 最小（数字或日期时间）值
   *
   * @see min https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/Input#attr-min
   */
  min: setNumberProp(),
  /**
   * 最大输入长度
   *
   * @see maxLength https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/Input#attr-maxlength
   */
  maxLength: setNumberProp(),
  /**
   * 设置字体大小
   *
   * @see font-size https://developer.mozilla.org/zh-CN/docs/Web/CSS/font-size
   */
  fontSize: setStringNumberProp(),
  /**
   * 是否自动获取焦点
   *
   * @see autofocus https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/Input#attr-autofocus
   */
  autofocus: setBooleanProp(),
  /**
   * 原生 name 属性
   *
   * @see name https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/Input#attr-name
   */
  name: setStringProp<string>('f-input'),
  /**
   * 占位符
   *
   * @see placeholder https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/Input#attr-placeholder
   */
  placeholder: setStringProp(),
  /** 占位符颜色 */
  placeholderColor: setStringProp(),
  /** 是否可清除 */
  clear: setBooleanProp(),
  /** 自定义宽度 */
  width: setStringNumberProp(),
  /** 自定义高度 */
  height: setStringNumberProp(),
  /** 是否可搜索 */
  search: setBooleanProp(),
  /** 自定义文字颜色 */
  textColor: setStringProp(),
  /**
   * 是否只读
   *
   * @see readonly https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/Input#attr-readonly
   */
  readonly: setBooleanProp(),
  /** 是否显示查看密码的按钮 */
  showPassword: setBooleanProp(),
  /** 是否按下回车进行搜索 */
  enterSearch: setBooleanProp(),
  /** 自定义 icon */
  icon: setObjectProp<FightingIcon>(),
  /** 后缀 icon */
  afterIcon: setObjectProp<FightingIcon>(),
  /**
   * 是否开启自动填充特性提示
   *
   * 注意这不是一个布尔属性！
   *
   * 详情配置可参考
   *
   * @see HTML属性autocomplete https://developer.mozilla.org/zh-CN/docs/Web/HTML/Attributes/autocomplete
   * @see autocomplete https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/Input#autocomplete
   */
  autocomplete: setStringProp('off'),
  /** 点击搜索之后触发的回调 */
  onSearch: setFunctionProp<InputUpdate>(),
  /** 绑定值发生改变时触发的回调 */
  onChange: setFunctionProp<InputUpdate>(),
  /** input 事件触发的回调 */
  onInput: setFunctionProp<InputUpdate>(),
  /** 失去焦点时触发的回调 */
  onBlur: setFunctionProp<HandleEvent>(),
  /** 获得焦点时触发的回调 */
  onFocus: setFunctionProp<HandleEvent>(),
  /** 按下回车触发的 */
  onEnter: setFunctionProp<InputEnter>()
} as const

/** input 组件 props 类型 */
export type InputProps = ExtractPropTypes<typeof Props>
