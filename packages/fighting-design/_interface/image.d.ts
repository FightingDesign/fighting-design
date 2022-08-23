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
  node: HTMLImageElement
  props: propsInterface
  emit: Function
  callback: callbackInterface | null
  loadCreateImg(errSrc?: string): void
  // loadNextImg(): void
  onerror(evt: Event): void
  onload(evt: Event, src: string): void
}

export interface callbackInterface {
  (params: boolean, width: number): void
}
