export type behaviorType = 'smooth' | 'auto'

export interface handleScrollInterface {
  (node: HTMLElement | null)
}

export interface handleClickInterface {
  (evt: MouseEvent): void
}
