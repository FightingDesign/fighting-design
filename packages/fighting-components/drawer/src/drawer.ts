import type { PropType } from 'vue'
import type { drawerDirectionType } from './interface'
export const Props = {
  visible: {
    type: Boolean,
    default: () => true
  },
  appendToBody: {
    type: Boolean,
    default: () => false
  },
  lockScroll: {
    type: Boolean,
    default: () => true
  },
  modal: {
    type: Boolean,
    default: () => true
  },
  direction: {
    type: String as PropType<drawerDirectionType>,
    default: (): drawerDirectionType => 'bottom',
    validator: (val: drawerDirectionType): boolean => {
      return (['left', 'top', 'right', 'bottom'] as const).includes(val)
    }
  },
  size: {
    type: String,
    default: () => '30%'
  },
  title: {
    type: String,
    default: () => ''
  },
  beforeClose: {
    type: Function
  }
} as const

export const Emits = {
  'update:visible': (visible: boolean) => visible,
  open: (event: Event): Event => event,
  close: (event: Event): Event => event
}
