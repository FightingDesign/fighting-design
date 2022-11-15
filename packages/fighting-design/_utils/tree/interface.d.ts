export interface TreeAddLevelReturnInterface {
  label: string
  level: number
  index: number
  show: boolean
}

export interface TreeDataInterface {
  label: string
  children?: TreeDataInterface[]
  level?: number
  index?: number
  show?: boolean
}
