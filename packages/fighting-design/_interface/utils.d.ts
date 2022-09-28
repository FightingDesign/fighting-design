export interface KeepDecimalInterface {
  (num: number, no: number): number
}

export interface DebounceInterface {
  (handle: Function, delay: number): Function
}

export interface GetTypeInterface {
  (target: unknown): boolean
}

export interface PastTimeInterface {
  (time: string, format?: string): string
}

export type PastTimeConfigInterface = Record<string, string>
