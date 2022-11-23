import type { VNode, PropType, ExtractPropTypes } from 'vue'
import type { NotificationType, NotificationPlacementType } from './interface'

export const Props = {
  id: {
    type: String,
    default: (): null => null
  },
  /**
   * 通知标题
   */
  title: {
    type: [String, Object] as PropType<VNode | string>,
    default: (): null => null
  },
  /**
   * 通知文本
   */
  message: {
    type: [String, Object] as PropType<VNode | string>,
    default: (): null => null,
    required: true
  },
  /**
   * 消息类型
   * 
   * @values default primary success danger warning
   * @defaultValue default
   */
  type: {
    type: String as PropType<NotificationType>,
    default: (): NotificationType => 'default',
    validator: (val: NotificationType): boolean => {
      return (
        ['default', 'primary', 'success', 'danger', 'warning'] as const
      ).includes(val)
    }
  },
  /**
   * 是否可关闭
   */
  close: {
    type: Boolean,
    default: (): boolean => false
  },
  /**
   * 显示时间，单位为毫秒。 设为 0 则不会自动关闭
   */
  duration: {
    type: Number,
    default: (): number => 3000
  },
  /**
   * 是否为圆角类型
   */
  round: {
    type: Boolean,
    default: (): boolean => false
  },
  /**
   * 是否显示按钮
   */
  showIcon: {
    type: Boolean,
    default: (): boolean => true
  },
  /**
   * 自定义前缀 icon
   */
  icon: {
    type: Object as PropType<VNode>,
    default: (): null => null
  },
  /**
   * 自定义字体颜色
   */
  color: {
    type: String,
    default: (): null => null
  },
  /**
   * 自定义背景色
   */
  background: {
    type: String,
    default: (): null => null
  },
  /**
   * 偏移距离
   */
  offset: {
    type: Number,
    default: (): number => 20
  },
  /**
   * 弹出位置
   * 
   * @values top-left top-right bottom-left bottom-right
   * @defaultValue top-right
   */
  placement: {
    type: String as PropType<NotificationPlacementType>,
    default: (): NotificationPlacementType => 'top-right',
    validator: (val: NotificationPlacementType): boolean => {
      return (
        ['top-left', 'top-right', 'bottom-left', 'bottom-right'] as const
      ).includes(val)
    }
  },
  /**
   * 层级
   */
  zIndex: {
    type: Number,
    default: (): number => 1000
  },
  /**
   * 自定义关闭按钮
   */
  closeBtn: {
    type: [String, Object] as PropType<VNode | string>,
    default: (): null => null
  },
  /**
   * 关闭之后回调
   */
  onClose: {
    type: Function,
    default: (): null => null
  }
} as const

export type NotificationPropsType = ExtractPropTypes<typeof Props>
