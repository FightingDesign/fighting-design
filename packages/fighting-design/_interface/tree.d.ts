export interface treeAddLevelReturnInterface {
  label: string
  level: number
  show: boolean
}

export interface dataInterface {
  label: string
  children?: dataInterface[]
  level?: number
  show?: boolean
}
