import { PropType } from 'vue'

type Size = 'large' | 'middle' | 'small' | 'mini' | ''

export const prop = {
  // 是否加粗
  blob: {
    type: Boolean,
    default: (): boolean => false
  },
  // 是否为圆角
  round: {
    type: Boolean,
    default: (): boolean => false
  },
  // 字体大小
  fontSize: {
    type: String,
    default: (): string => '14px'
  },
  // 字体颜色
  fontColor: {
    type: String,
    default: (): string => ''
  },
  // 按钮尺寸
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
  // 按钮的颜色
  color: {
    type: String,
    default: (): string => ''
  },
  // 是否韦块级元素
  block: {
    type: Boolean,
    default: (): boolean => false
  },
  // 按钮点击跳转的链接地址
  link: {
    type: String,
    default: (): string => ''
  },
  // link 类型
  target: {
    type: String,
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