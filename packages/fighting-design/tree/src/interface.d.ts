export interface treeDataInterface {
  label: string
  children?: treeDataInterface[]
  level?: number
}

export interface itemInterface {
  label: string
  level: number
}
