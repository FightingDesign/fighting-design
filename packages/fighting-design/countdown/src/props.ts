import type {
  CSSProperties,
  ExtractPropTypes
} from 'vue'

import {
  setFunctionProp,
  setObjectProp,
  setStringNumberProp
} from '../../_utils'
import type {
  endCallback,
  timingCallback
} from './interface'

export const Props = {
  styles: setObjectProp<CSSProperties>(),
  target: setStringNumberProp(),
  timingCallback: setFunctionProp<timingCallback>(),
  endCallback: setFunctionProp<endCallback>()
} as const

export type CountdownProps = ExtractPropTypes<typeof Props>
