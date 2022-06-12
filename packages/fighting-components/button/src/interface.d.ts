export type buttonSize = 'large' | 'middle' | 'small' | 'mini'

export type buttonTarget = '_blank' | '_self' | '_parent' | '_top'

export type buttonType =
  | 'default'
  | 'primary'
  | 'success'
  | 'danger'
  | 'warning'

export type buttonNativeType = 'button' | 'submit' | 'reset'

export interface RipplesInterface {
  evt: PointerEvent
  node: HTMLElement
  time: number
  ripplesColor: string
  clickRipples(): void
  renderElement(x: number, y: number): HTMLSpanElement
  removeElement(node: HTMLElement): void
}

export interface buttonStyleInterface {
  fontSize: string
  color: string
}

export interface onClickInterface {
  (evt: PointerEvent): void
}

export interface ordinaryFunctionInterface {
  (): void
}
