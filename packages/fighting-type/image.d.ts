export interface LazyInterface {
  observer(): IntersectionObserver
  lazyCreateImg(): void
}

export interface loadImageInterface {
  (node: HTMLImageElement, prop: propsInterface, emit: Function): void
}

export interface LoadInterface {
  img: HTMLImageElement
  props: propsInterface
  emit: Function
  loadCreateImg(): void
  loadNextImg(): void
  onerror(): void
  onload(): void
}

export type imageFit = 'fill' | 'contain' | 'cover' | 'none' | 'scale-down'

export interface propsInterface {
  src: string
  alt?: string
  draggable?: boolean
  lazy?: boolean
  rootMargin?: string
  width?: string
  height?: string
  block?: boolean
  fit?: imageFit
  select?: boolean
  errSrc: string
}

export type callbackType =
  | Close
  | Prev
  | Next
  | Small
  | Big
  | TurnLeft
  | TurnRight

export interface btnClickInterface {
  (callback: callbackType): void
}

export interface ordinaryFunctionInterface {
  (): void
}

export interface onCloseInterface {
  (params: boolean): void
}

export interface switchImageInterface {
  (type: 'next' | 'prev'): void
}

export interface optionClickInterface {
  (evt: Event): void
}
