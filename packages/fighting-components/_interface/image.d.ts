import type { imageFit } from '../image/src/interface'

export interface LazyInterface {
  observer(): IntersectionObserver
  lazyCreateImg(): void
}

export interface loadImageInterface {
  (
    node: HTMLImageElement,
    prop: propsInterface,
    emit: Function,
    callback: callbackInterface | null
  ): void
}

export interface LoadInterface {
  img: HTMLImageElement
  props: propsInterface
  emit: Function
  callback: callbackInterface | null
  loadCreateImg(): void
  loadNextImg(): void
  onerror(evt: Event): void
  onload(evt: Event): void
}

export interface propsInterface {
  src: string
  alt?: string
  draggable?: boolean
  lazy?: boolean
  rootMargin?: string
  errSrc: string
  width?: string
  height?: string
  block?: boolean
  fit?: imageFit
  select?: boolean
  fontSize?: string
  fontColor?: string
  text?: string
  size?: string | number
}

export interface callbackInterface {
  (params: boolean, width: number): void
}
