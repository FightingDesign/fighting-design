export interface UtilsKeepDecimalInterface {
  (num: number, no: number): number
}

export interface UtilsDebounceInterface {
  (handle: Function, delay: number): Function
}

export interface UtilsGetTypeInterface {
  (target: unknown): boolean
}

export interface UtilsPastTimeInterface {
  (time: string, format?: string): string
}

export type UtilsPastTimeConfigInterface = Record<string, string>

export interface UtilsAddZeroInterface {
  (num: number): string
}

export interface UtilsSizeChangeInterface {
  (size: string | number, target = 'px'): string
}
