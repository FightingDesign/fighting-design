export interface keepDecimalInterface {
  (num: number, no: number): number
}

export interface debounceInterface {
  (handle: Function, delay: number): Function
}

export interface getTypeInterface {
  (target: unknown): boolean
}

export interface pastTimeInterface {
  (time: string, format?: string): string
}

export type pastTimeConfigInterface = Record<string, string>
