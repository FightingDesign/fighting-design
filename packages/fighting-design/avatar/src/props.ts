import {
  isString,
  isNumber,
  setBooleanProp,
  setStringProp,
  setStringNumberProp,
  setObjectProp,
  setFunctionProp
} from '../../_utils'
import { FIGHTING_SIZE, FIGHTING_FIT } from '../../_tokens'
import type { PropType, ExtractPropTypes } from 'vue'
import type {
  HandleEvent,
  FightingSize,
  FightingIcon,
  FightingFit
} from '../../_interface'

export const Props = {
  /** 图片路径 */
  src: setStringProp(),
  /** 加载失败时要显示的地址 */
  errSrc: setStringProp(),
  /** 图标头像 */
  icon: setObjectProp<FightingIcon>(),
  /**
   *原生 alt 属性
   *
   * @see alt https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/img#attr-alt
   */
  alt: setStringProp(),
  /** 是否为圆角 */
  round: setBooleanProp(),
  /** 是否懒加载头像 */
  lazy: setBooleanProp(),
  /**
   * 如何适应容器
   *
   * 原生样式属性
   *
   * @see object-fit https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit#try_it
   * @values fill contain cover none scale-down
   */
  fit: setStringProp<FightingFit>(undefined, (val: FightingFit): boolean => {
    return FIGHTING_FIT.includes(val)
  }),
  /**
   * 头像大小
   *
   * 可传入字符串使用内置大小
   *
   * 也可以传入数字，数字将自动转换为 px 单位
   *
   * @values large middle small mini
   * @default middle
   */
  size: {
    type: [String, Number] as PropType<FightingSize | number>,
    default: (): FightingSize => 'middle',
    validator: (val: FightingSize | number): boolean => {
      if (isString(val)) {
        return FIGHTING_SIZE.includes(val)
      } else if (isNumber(val)) {
        return val >= 1
      }
      return false
    }
  },
  /** 自定义背景色 */
  background: setStringProp(),
  /** 字体大小 */
  fontSize: setStringNumberProp(),
  /** 字体的颜色 */
  fontColor: setStringProp(),
  /** 文字头像 */
  text: setStringProp(),
  /** 触发懒加载的距离 */
  rootMargin: setStringNumberProp('100px'),
  /** 图片加载成功触发的回调 */
  onLoad: setFunctionProp<HandleEvent>(),
  /** 图片加载失败触发的回调 */
  onError: setFunctionProp<HandleEvent>()
} as const

/** avatar 组件 props 类型 */
export type AvatarProps = ExtractPropTypes<typeof Props>
