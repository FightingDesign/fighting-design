/**
 * Load 类所需要的 props 参数
 */
export interface LoadNeedImagePropsInterface {
  src: string
  errSrc: string
  rootMargin: string
  lazy: boolean
}

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

export interface callbackInterface {
  (params: boolean, width: number): void
}
