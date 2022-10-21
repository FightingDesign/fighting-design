import type { PropType, ExtractPropTypes, VNode, Component } from 'vue'
import type { DrawerDirectionType, DrawerCallbackInterface } from './interface'

export const Props = {
  visible: {
    type: Boolean,
    default: (): boolean => true
  },
  appendToBody: {
    type: Boolean,
    default: (): boolean => false
  },
  direction: {
    type: String as PropType<DrawerDirectionType>,
    default: (): DrawerDirectionType => 'right',
    validator: (val: DrawerDirectionType): boolean => {
      return (['left', 'top', 'right', 'bottom'] as const).includes(val)
    }
  },
  size: {
    type: [String, Number] as PropType<string | number>,
    default: (): string => '30%'
  },
  title: {
    type: String,
    default: (): string => ''
  },
  showMask: {
    type: Boolean,
    default: (): boolean => true
  },
  maskClose: {
    type: Boolean,
    default: (): boolean => true
  },
  maskBlur: {
    type: Boolean,
    default: (): boolean => false
  },
  showCloseIcon: {
    type: Boolean,
    default: (): boolean => true
  },
  closeIcon: {
    type: Object as PropType<VNode | Component>,
    default: (): null => null
  },
  zIndex: {
    type: Number,
    default: (): Number => 1999,
    validator: (val: number): boolean => val >= 0
  },
  open: {
    type: Function as PropType<DrawerCallbackInterface>,
    default: (): null => null
  },
  openEnd: {
    type: Function as PropType<DrawerCallbackInterface>,
    default: (): null => null
  },
  close: {
    type: Function as PropType<DrawerCallbackInterface>,
    default: (): null => null
  },
  closeEnd: {
    type: Function as PropType<DrawerCallbackInterface>,
    default: (): null => null
  }
} as const

export const Emits = {
  'update:visible': (visible: boolean): boolean => typeof visible === 'boolean'
} as const

export type DrawerPropsType = ExtractPropTypes<typeof Props>
