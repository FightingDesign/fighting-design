export interface ImageListItemInterface {
  url: string
  text?: string
}

export type ExpandCardImageListType = imageListInterface[] | string[]

export interface SwitchExpandCardInterface {
  (index: number): void
}
