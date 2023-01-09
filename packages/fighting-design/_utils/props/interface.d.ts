import type { PropType } from 'vue'

export type Validator = (val) => boolean

export interface SetBooleanPropReturn {
  type: BooleanConstructor
  default: boolean
}

export interface SetStringPropReturn {
  type: StringConstructor | PropType
  default: string | null,
  validator?: Validator
}

export interface SetStringNumberPropReturn {
  type: PropType<string | number>,
  default: string | number | null | T
}

export interface SetObjectPropReturn {
  type: PropType
  default: () => null
}

export interface SetFunctionPropReturn {
  type: PropType
  default: () => null
}
