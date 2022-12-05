import type { PropType, ExtractPropTypes, VNode, Component } from 'vue'
import type { AvatarFit, AvatarSize } from './interface'
import type { HandleEventInterface } from '../../_interface'
import { isString, isNumber } from '../../_utils'

export const Props = {
  /**
   * 图片路径
   */
  src: {
    type: String,
    default: (): null => null
  },
  /**
   * 加载失败时要显示的地址
   */
  errSrc: {
    type: String,
    default: (): null => null
  },
  /**
   * 图标头像
   */
  icon: {
    type: Object as PropType<VNode | Component>,
    default: (): null => null
  },
  /**
   * 原生 alt 属性
   *
   * @see alt https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/img#attr-alt
   */
  alt: {
    type: String,
    default: (): null => null
  },
  /**
   * 是否为圆角
   */
  round: {
    type: Boolean,
    default: (): boolean => false
  },
  /**
   * 是否懒加载头像
   */
  lazy: {
    type: Boolean,
    default: (): boolean => false
  },
  /**
   * 如何适应容器
   *
   * 原生样式属性
   *
   * @see object-fit https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit#try_it
   * @values fill contain cover none scale-down
   */
  fit: {
    type: String as PropType<AvatarFit>,
    default: (): null => null,
    validator: (val: AvatarFit): boolean => {
      return (
        ['fill', 'contain', 'cover', 'none', 'scale-down', ''] as const
      ).includes(val)
    }
  },
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
    type: [String, Number] as PropType<AvatarSize | number>,
    default: (): AvatarSize => 'middle',
    validator: (val: AvatarSize | number): boolean => {
      if (isString(val)) {
        return (['large', 'middle', 'small', 'mini'] as const).includes(val)
      } else if (isNumber(val)) {
        return val >= 1
      }
      return false
    }
  },
  /**
   * 背景色
   */
  background: {
    type: String,
    default: (): null => null
  },
  /**
   * 字体大小
   */
  fontSize: {
    type: [String, Number] as PropType<string | number>,
    default: (): string => '15px'
  },
  /**
   * 字体的颜色
   */
  fontColor: {
    type: String,
    default: (): string => '#333'
  },
  /**
   * 文字头像
   */
  text: {
    type: String,
    default: (): null => null
  },
  /**
   * 触发懒加载的距离
   */
  rootMargin: {
    type: [String, Number] as PropType<string | number>,
    default: (): string => '100px'
  },
  /**
   * 图片加载成功触发的回调
   */
  onLoad: {
    type: Function as PropType<HandleEventInterface>,
    default: (): null => null
  },
  /**
   * 图片加载失败触发的回调
   */
  onError: {
    type: Function as PropType<HandleEventInterface>,
    default: (): null => null
  }
} as const

export type AvatarProps = ExtractPropTypes<typeof Props>
