export interface LazyInterface {
  observer(): IntersectionObserver
  lazyCreateImg(): void
}

export interface loadImageInterface {
  (
    node: HTMLImageElement,
    prop: propsInterface,
    emit: Function,
    callback: Function
  ): void
}

export interface LoadInterface {
  img: HTMLImageElement
  props: propsInterface
  emit: Function
  callback: Function
  loadCreateImg(): void
  loadNextImg(): void
  onerror(evt: Event): void
  onload(evt: Event): void
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

export interface onCloseInterface {
  (params: boolean): void
}

export interface switchImageInterface {
  (type: 'next' | 'prev'): void
}

export interface optionClickInterface {
  (evt: PointerEvent): void
}
