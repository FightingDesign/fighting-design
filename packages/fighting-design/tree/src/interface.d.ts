export type { TreeProps } from './props'

export interface TreeDataItemInterface {
  label: string
  children?: TreeDataItemInterface[]
  level?: number
}

export type TreeDataInterface = TreeDataItemInterface[]
