export type { ExpandCardPropsType } from './props'

export interface ExpandCardImageListItemInterface {
  url: string
  text?: string
}

export type ExpandCardImageListType = ExpandCardImageListItemInterface[] | string[]

export interface ExpandCardISwitchExpandCardInterface {
  (index: number): void
}
