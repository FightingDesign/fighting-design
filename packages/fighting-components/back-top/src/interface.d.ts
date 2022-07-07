export type backTopBehavior = 'smooth' | 'auto'

export interface handleScrollInterface {
  (node: HTMLElement | null)
}

export interface handleClickInterface {
  (evt: MouseEvent): void
}
