import { setBooleanProp, setStringNumberProp, setStringProp } from '../../_utils'
import type { PropType, ExtractPropTypes } from 'vue'
import type { ImageFit } from './interface'
import type { HandleEvent } from '../../_interface'

export const Props = {
  /** 图片路径 */
  src: setStringProp(),
  /**
   * 原生 alt 属性
   *
   * @see alt https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/img#attr-alt
   */
  alt: setStringProp(),
  /** 是否可以拖动 */
  draggable: setBooleanProp(true),
  /** 是否懒加载图片 */
  lazy: setBooleanProp(),
  /** 触发懒加载的距离 */
  rootMargin: {
    type: [String, Number] as PropType<string | number>,
    default: (): string => '100px'
  },
  /** 图片的宽度 */
  width: setStringNumberProp(),
  /** 图片的高度 */
  height: setStringNumberProp(),
  /** 是否为块级元素 */
  block: setBooleanProp(),
  /**
   * 如何适应容器，原生 object-fit 属性
   *
   * @see object-fit https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit#try_it
   */
  fit: {
    type: String as PropType<ImageFit>,
    default: (): null => null,
    validator: (val: ImageFit): boolean => {
      return (['fill', 'contain', 'cover', 'none', 'scale-down', ''] as const).includes(val)
    }
  },
  /** 是否禁止选择 */
  noSelect: setBooleanProp(),
  /**
   * 原生 referrerPolicy 属性
   *
   * @see Referrer-Policy https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referrer-Policy#syntax
   */
  referrerPolicy: setStringProp(),
  /** 配置圆角，传入一个数值 */
  round: setStringNumberProp(),
  /** 加载失败时要显示的地址 */
  errSrc: setStringProp(),
  /** img 的 title */
  title: setStringProp(),
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

export type ImageProps = ExtractPropTypes<typeof Props>
