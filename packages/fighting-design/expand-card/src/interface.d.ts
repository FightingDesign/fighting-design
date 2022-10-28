export type { ExpandCardPropsType } from './expand-card'

export interface ExpandCardImageListItemInterface {
  url: string
  text?: string
}

export type ExpandCardImageListType = ExpandCardImageListItemInterface[] | string[]

export interface ExpandCardISwitchExpandCardInterface {
  (index: number): void
}
