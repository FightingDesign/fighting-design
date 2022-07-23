export interface keepDecimalInterface {
  (num: number, no: number): number
}

export interface debounceInterface {
  (handle: Function, delay: number): Function
}

export interface getTypeInterface {
  (target: unknown): boolean
}
