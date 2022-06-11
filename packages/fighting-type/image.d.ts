export interface LazyInterface {
  observer(): IntersectionObserver
  lazyCreateImg(): void
}

export interface loadImageInterface {
  (
    node: HTMLImageElement,
    prop: propsInterface,
    emit: Function,
    callback: callbackInterface
  ): void
}

export interface LoadInterface {
  img: HTMLImageElement
  props: propsInterface
  emit: Function
  callback: callbackInterface
  loadCreateImg(): void
  loadNextImg(): void
  onerror(evt: Event): void
  onload(evt: Event): void
}

export type imageFit = 'fill' | 'contain' | 'cover' | 'none' | 'scale-down' | ''

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

export interface switchImageInterface {
  (type: 'next' | 'prev'): void
}

export interface optionClickInterface {
  (evt: Event): void
}

export interface callbackInterface {
  (params: boolean, width: number): void
}
