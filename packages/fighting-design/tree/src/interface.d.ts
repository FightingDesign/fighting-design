export interface dataInterface {
  label: string
  children?: dataInterface[]
  level?: number
}

export interface itemInterface {
  label: string
  level: number
}
