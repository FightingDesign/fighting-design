export interface treeAddLevelReturnInterface {
  label: string
  level: number
  index: number
  show: boolean
}

export interface dataInterface {
  label: string
  children?: dataInterface[]
  level?: number
  index?: number
  show?: boolean
}
