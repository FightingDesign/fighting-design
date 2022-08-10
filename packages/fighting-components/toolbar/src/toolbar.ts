import type { PropType, CSSProperties, ExtractPropTypes } from 'vue'
import type { toolbarType } from './interface'
import type { fixedStyleInterface } from '../../alert/src/interface'

export const Props = {
  round: {
    type: Boolean,
    default: (): boolean => false
  },
  size: {
    type: String as PropType<toolbarType>,
    default: (): toolbarType => 'large',
    validator: (val: toolbarType): boolean => {
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
    type: Object as PropType<fixedStyleInterface> as PropType<unknown> as PropType<CSSProperties>,
    default: (): void | object | fixedStyleInterface => {},
    validator: (val: CSSProperties): boolean => {
      if (val.bottom || val.left || val.right || val.top) {
        return true
      }
      console.warn('fighting-design (Toolbar): fixed-style parameter error')
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
  },
  vague: {
    type: Boolean,
    default: (): boolean => false
  }
} as const

export type FPropsType = ExtractPropTypes<typeof Props>
