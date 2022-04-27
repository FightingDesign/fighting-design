import { PropType } from 'vue'

type Size = 'large' | 'middle' | 'small' | 'mini' | ''
type Target = '_blank' | '_self' | '_parent' | '_top'
type IconPosition = 'left' | 'right'

export const prop = {
  blob: {
    type: Boolean,
    default: (): boolean => false
  },
  round: {
    type: Boolean,
    default: (): boolean => false
  },
  fontSize: {
    type: String,
    default: (): string => '14px'
  },
  fontColor: {
    type: String,
    default: (): string => ''
  },
  size: {
    type: String as PropType<Size>,
    default: (): string => 'middle',
    validator(val: string): boolean {
      return [
        'large',
        'middle',
        'small',
        'mini',
        ''
      ].includes(val)
    }
  },
  color: {
    type: String,
    default: (): string => ''
  },
  block: {
    type: Boolean,
    default: (): boolean => false
  },
  link: {
    type: String,
    default: (): string => ''
  },
  target: {
    type: String as PropType<Target>,
    default: (): string => '_self',
    validator(val: string): boolean {
      return [
        '_blank',
        '_self',
        '_parent',
        '_top',
        ''
      ].includes(val)
    }
  },
  loading: {
    type: Boolean,
    default: (): boolean => false
  },
  disabled: {
    type: Boolean,
    default: (): boolean => false
  },
  icon: {
    type: String,
    default: (): string => ''
  },
  loadingIcon: {
    type: String,
    default: (): string => ''
  },
  iconPosition: {
    type: String as PropType<IconPosition>,
    default: (): string => 'right',
    validator(val: string): boolean {
      return [
        'right',
        'left',
        ''
      ].includes(val)
    }
  },
  type: {
    type: String,
    default: (): string => 'default',
    validator(val: string): boolean {
      return [
        'default',
        'primary',
        'success',
        'danger',
        'warning',
        'info',
        ''
      ].includes(val)
    }
  },
  autofocus: {
    type: Boolean,
    default: (): boolean => false
  },
  name: {
    type: String,
    default: (): string => ''
  },
  shadow: {
    type: String,
    default: (): string => ''
  },
  linearGradient: {
    type: String,
    default: (): string => ''
  },
  text: {
    type: Boolean,
    default: (): boolean => false
  }
} as const

/**
 * 按钮是否显示 border
 * 按钮边框是否为虚线
 * 按钮是否禁用
 * 按钮是否可以被聚焦
 * 按钮是否透明
 * 按钮中图标的位置
 * 是否支持键盘操作
 * 按钮是否显示加载状态
 * 按钮是否显示圆角
 * 是否是次要按钮
 * 是否是三级按钮
 * 是否显示为文本按钮
 * 按钮的类型
 * 点击跳转的地址
 * 相当于 a 链接的 target 属性，href 存在时生效
 */