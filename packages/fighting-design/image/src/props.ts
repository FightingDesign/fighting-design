import type { PropType, ExtractPropTypes } from 'vue'
import type { ImageFit } from './interface'
import type { HandleMouseEvent } from '../../_interface'

export const Props = {
  /**
   * 图片路径
   */
  src: {
    type: String,
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
   * 是否可以拖动
   */
  draggable: {
    type: Boolean,
    default: (): boolean => true
  },
  /**
   * 是否懒加载图片
   */
  lazy: {
    type: Boolean,
    default: (): boolean => false
  },
  /**
   * 触发懒加载的距离
   */
  rootMargin: {
    type: [String, Number] as PropType<string | number>,
    default: (): string => '100px'
  },
  /**
   * 图片的宽度
   */
  width: {
    type: [String, Number] as PropType<string | number>,
    default: (): null => null
  },
  /**
   * 图片的高度
   */
  height: {
    type: [String, Number] as PropType<string | number>,
    default: (): null => null
  },
  /**
   * 是否为块级元素
   */
  block: {
    type: Boolean,
    default: (): boolean => false
  },
  /**
   * 如何适应容器，原生 object-fit 属性
   *
   * @see object-fit https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit#try_it
   */
  fit: {
    type: String as PropType<ImageFit>,
    default: (): null => null,
    validator: (val: ImageFit): boolean => {
      return (
        ['fill', 'contain', 'cover', 'none', 'scale-down', ''] as const
      ).includes(val)
    }
  },
  /**
   * 是否禁止选择
   */
  noSelect: {
    type: Boolean,
    default: (): boolean => false
  },
  /**
   * 原生 referrerPolicy 属性
   *
   * @see Referrer-Policy https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referrer-Policy#syntax
   */
  referrerPolicy: {
    type: String,
    default: (): null => null
  },
  /**
   * 配置圆角，传入一个数值
   */
  round: {
    type: [String, Number] as PropType<string | number>,
    default: (): number => 0
  },
  /**
   * 加载失败时要显示的地址
   */
  errSrc: {
    type: String,
    default: (): null => null
  },
  /**
   * img 的 title
   */
  title: {
    type: String,
    default: (): null => null
  },
  /**
   * 图片加载成功触发的回调
   */
  onLoad: {
    type: Function as PropType<HandleMouseEvent>,
    default: (): null => null
  },
  /**
   * 图片加载失败触发的回调
   */
  onError: {
    type: Function as PropType<HandleMouseEvent>,
    default: (): null => null
  }
} as const

export type ImageProps = ExtractPropTypes<typeof Props>
