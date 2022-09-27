export interface imageListItemInterface {
  url: string
  text?: string
}

export type ExpandCardImageListType = imageListInterface[] | string[]

export interface switchExpandCardInterface {
  (index: number): void
}
