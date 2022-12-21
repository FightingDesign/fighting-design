export interface TreeAddLevelReturn {
  label: string
  level: number
  index: number
  show: boolean
}

export interface TreeData {
  label: string
  children?: TreeData[]
  level?: number
  index?: number
  show?: boolean
}
