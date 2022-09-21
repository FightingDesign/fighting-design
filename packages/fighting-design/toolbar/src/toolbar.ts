import type { PropType, CSSProperties } from 'vue'
import type { toolbarTypeType, clickEmitInterface, toolbarFixedStyleInterface } from './interface'

export const Props = {
  round: {
    type: Boolean,
    default: (): boolean => false
  },
  size: {
    type: String as PropType<toolbarTypeType>,
    default: (): toolbarTypeType => 'large',
    validator: (val: toolbarTypeType): boolean => {
      return (['large', 'middle', 'small', 'mini'] as const).includes(val)
    }
  },
  block: {
    type: Boolean,
    default: (): boolean => false
  },
  background: {
    type: String,
    default: (): string => ''
  },
  textColor: {
    type: String,
    default: (): string => ''
  },
  fixed: {
    type: Boolean,
    default: (): boolean => false
  },
  fixedStyle: {
    type: Object as PropType<toolbarFixedStyleInterface> as PropType<unknown> as PropType<CSSProperties>,
    default: (): null | object | toolbarFixedStyleInterface => null,
    validator: (val: CSSProperties): boolean => {
      if (val.bottom || val.left || val.right || val.top) {
        return true
      }
      return false
    }
  },
  width: {
    type: String,
    default: (): string => ''
  },
  height: {
    type: String,
    default: (): string => ''
  }
} as const

export const Emits = {
  click: (target: clickEmitInterface): clickEmitInterface => target
} as const
