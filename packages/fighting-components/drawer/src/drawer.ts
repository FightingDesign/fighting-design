import type { PropType } from 'vue'
import type { drawerDirectionType } from './interface'

export const Props = {
  visible: {
    type: Boolean,
    default: (): boolean => true
  },
  appendToBody: {
    type: Boolean,
    default: (): boolean => false
  },
  lockScroll: {
    type: Boolean,
    default: (): boolean => true
  },
  modal: {
    type: Boolean,
    default: (): boolean => true
  },
  direction: {
    type: String as PropType<drawerDirectionType>,
    default: (): drawerDirectionType => 'right',
    validator: (val: drawerDirectionType): boolean => {
      return (['left', 'top', 'right', 'bottom'] as const).includes(val)
    }
  },
  size: {
    type: String,
    default: (): string => '30%'
  },
  title: {
    type: String,
    default: (): string => ''
  },
  // beforeClose: {
  //   type: Function
  // },
  withHeader: {
    type: Boolean,
    default: (): boolean => true
  }
} as const

export const Emits = {
  'update:visible': (visible: boolean) => visible,
  open: (event: Event): Event => event,
  close: (event: Event): Event => event
} as const
