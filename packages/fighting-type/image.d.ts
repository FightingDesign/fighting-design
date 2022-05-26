export interface LazyInterface {
  img: HTMLImageElement
  props: propsInterface
  emit: Function
  observer(): IntersectionObserver
  createImg(): void
}

export interface loadImageInterface {
  (node: HTMLImageElement, prop: propsInterface, emit: Function): void
}

export interface LoadInterface {
  img: HTMLImageElement
  props: propsInterface
  emit: Function
  createImg(): void
}

export interface creationMethodInterface {
  (instance: Lazy | Load): void
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
}

export interface onerrorInterface {
  (emit: Function): void
}

export interface onloadInterface {
  (emit: Function): void
}

export type callbackType = Close | Prev | Next | Small | Big | TurnLeft | TurnRight

export interface btnClickInterface {
  (callback: callbackType): void
}

export interface optionInterface {
  onCLick(): void
}
