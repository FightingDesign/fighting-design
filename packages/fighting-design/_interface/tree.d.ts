export interface treeAddLevelReturnInterface {
  label: string
  level: number
}

export interface dataInterface {
  label: string
  children?: dataInterface[]
  level?: number
}
