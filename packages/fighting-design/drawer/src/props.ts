import { setBooleanProp, setObjectProp, setStringProp, setStringNumberProp } from '../../_utils'
import type { PropType, ExtractPropTypes } from 'vue'
import type { DrawerDirection } from './interface'
import type { HandleEvent, FightingIcon } from '../../_interface'

export const Props = {
  /**绑定值，控制是否展示 */
  visible: setBooleanProp(),
  /** 是否追加到 body */
  appendToBody: setBooleanProp(),
  /** 弹出方向 */
  direction: setStringProp<DrawerDirection>('right', (val: DrawerDirection): boolean => {
    return (['left', 'top', 'right', 'bottom'] as const).includes(val)
  }),
  /** 大小尺寸 */
  size: setStringNumberProp('30%'),
  /** 标题文字内容 */
  title: setStringProp(),
  /** 是否展示遮罩层 */
  showMask: setBooleanProp(true),
  /** 点击遮罩层是否可关闭 */
  maskClose: setBooleanProp(true),
  /** 是否模糊遮罩层 */
  maskBlur: setBooleanProp(),
  /**是否展示关闭按钮 */
  showCloseIcon: setBooleanProp(true),
  /** 自定义关闭按钮 icon */
  closeIcon: setObjectProp<FightingIcon>(),
  /**
   * 层级 原生属性
   *
   * @see z-index https://developer.mozilla.org/zh-CN/docs/Web/CSS/z-index
   */
  zIndex: {
    type: Number,
    default: (): Number => 1999,
    validator: (val: number): boolean => val >= 0
  },
  /** 打开动画开始的回调 */
  onOpen: {
    type: Function as PropType<HandleEvent>,
    default: (): null => null
  },
  /** 打开动画结束的回调 */
  onOpenEnd: {
    type: Function as PropType<HandleEvent>,
    default: (): null => null
  },
  /** 关闭动画开始的回调 */
  onClose: {
    type: Function as PropType<HandleEvent>,
    default: (): null => null
  },
  /** 关闭动画结束的回调 */
  onCloseEnd: {
    type: Function as PropType<HandleEvent>,
    default: (): null => null
  }
} as const

export type DrawerProps = ExtractPropTypes<typeof Props>
