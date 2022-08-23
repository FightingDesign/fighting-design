import type { PropType, ExtractPropTypes } from 'vue'
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
  withHeader: {
    type: Boolean,
    default: (): boolean => true
  },
  zIndex: {
    type: Number,
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

export type FPropsType = ExtractPropTypes<typeof Props>
