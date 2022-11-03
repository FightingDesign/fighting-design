export interface ScrollInterface {
  (): void
}

export interface WaterfallRowType {
  src?: string
  _order?: number
  index?: number
  height?: number
}

export type WaterfallType = 'flex' | 'column'
