import { isString, isNumber, setBooleanProp, setStringProp, setStringNumberProp } from '../../_utils'
import type { PropType, ExtractPropTypes } from 'vue'
import type { AvatarFit } from './interface'
import type { HandleEvent, FightingSize, FightingIcon } from '../../_interface'

export const Props = {
  /** 图片路径 */
  src: setStringProp(),
  /** 加载失败时要显示的地址 */
  errSrc: setStringProp(),
  /** 图标头像 */
  icon: {
    type: Object as PropType<FightingIcon>,
    default: (): null => null
  },
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
  fit: setStringProp<AvatarFit>(null, (val: AvatarFit): boolean => {
    return (['fill', 'contain', 'cover', 'none', 'scale-down', ''] as const).includes(val)
  }),
  /**
   * 图片大小
   *
   * 可传入字符串使用内置大小
   *
   * 也可以传入数字，数字将自动转换为 px 单位
   *
   * @values large middle small mini
   * @defaultValue middle
   */
  size: {
    type: [String, Number] as PropType<FightingSize | number>,
    default: (): FightingSize => 'middle',
    validator: (val: FightingSize | number): boolean => {
      if (isString(val)) {
        return (['large', 'middle', 'small', 'mini'] as const).includes(val)
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
  rootMargin: {
    type: [String, Number] as PropType<string | number>,
    default: (): string => '100px'
  },
  /** 图片加载成功触发的回调 */
  onLoad: {
    type: Function as PropType<HandleEvent>,
    default: (): null => null
  },
  /** 图片加载失败触发的回调 */
  onError: {
    type: Function as PropType<HandleEvent>,
    default: (): null => null
  }
} as const

export type AvatarProps = ExtractPropTypes<typeof Props>
