import { PropType } from 'vue'

export const Props = {
  title: {
    type: String as PropType<string>,
    default: (): string => ''
  },
  visible: {
    type: Boolean as PropType<boolean>,
    default: (): boolean => false,
    require: true
  },
  appendToBody: {
    type: Boolean as PropType<boolean>,
    default: (): boolean => false
  },
  width: {
    type: String as PropType<string>,
    default: (): string => '332px'
  },
  height: {
    type: String as PropType<string>,
    default: (): string => '188px'
  },
  fullscreen: {
    type: Boolean as PropType<boolean>,
    default: (): boolean => false
  },
  modal: {
    type: Boolean as PropType<boolean>,
    default: (): boolean => true
  },
  lockScroll: {
    type: Boolean as PropType<boolean>,
    default: (): boolean => true
  },
  showClose: {
    type: Boolean as PropType<boolean>,
    default: (): boolean => true
  },
  modalClose: {
    type: Boolean as PropType<boolean>,
    default: (): boolean => true
  },
  top: {
    type: String as PropType<string>,
    default: (): string => ''
  },
  closeIcon: {
    type: String as PropType<string>,
    default: (): string => ''
  },
  zIndex: {
    type: Number as PropType<number>,
    default: (): Number => 1999,
    validator: (val: number): boolean => val >= 0
  }
} as const

export const Emits = {
  'update:visible': (visible: boolean): boolean => typeof visible === 'boolean',
  open: (event: MouseEvent): MouseEvent => event,
  close: (event: MouseEvent): MouseEvent => event,
  'open-end': (event: MouseEvent): MouseEvent => event,
  'close-end': (event: MouseEvent): MouseEvent => event
} as const
