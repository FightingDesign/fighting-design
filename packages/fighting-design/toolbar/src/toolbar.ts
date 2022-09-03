import type { PropType, CSSProperties, ExtractPropTypes } from 'vue'
import type { toolbarType } from './interface'
import type { fixedStyleInterface } from '../../alert/src/interface'

export const Props = {
  round: {
    type: Boolean as PropType<boolean>,
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
    type: Boolean as PropType<boolean>,
    default: (): boolean => false
  },
  background: {
    type: String as PropType<string>,
    default: (): string => ''
  },
  textColor: {
    type: String as PropType<string>,
    default: (): string => ''
  },
  fixed: {
    type: Boolean as PropType<boolean>,
    default: (): boolean => false
  },
  fixedStyle: {
    type: Object as PropType<fixedStyleInterface> as PropType<unknown> as PropType<CSSProperties>,
    default: (): null | object | fixedStyleInterface => null,
    validator: (val: CSSProperties): boolean => {
      if (val.bottom || val.left || val.right || val.top) {
        return true
      }
      return false
    }
  },
  width: {
    type: String as PropType<string>,
    default: (): string => ''
  },
  height: {
    type: String as PropType<string>,
    default: (): string => ''
  },
  vague: {
    type: Boolean as PropType<boolean>,
    default: (): boolean => false
  }
} as const

export type FPropsType = ExtractPropTypes<typeof Props>
