export interface ScrollInterface {
  (evt: FocusEvent): void
}

export interface WaterfallRowType {
  src?: string
  _order?: number
  index?: number
  height?: number
}

export type WaterfallType = 'flex' | 'column'
