export type { TreePropsType } from './tree'

export interface TreeDataItemInterface {
  label: string
  children?: TreeDataItemInterface[]
  level?: number
}

export type TreeDataInterface = TreeDataItemInterface[]
