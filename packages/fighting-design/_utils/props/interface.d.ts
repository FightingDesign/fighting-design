export interface SetBooleanPropReturn {
  type: BooleanConstructor
  default: boolean
}

export interface SetStringPropReturn {
  type: StringConstructor
  default: string | null,
  validator?: Function
}
