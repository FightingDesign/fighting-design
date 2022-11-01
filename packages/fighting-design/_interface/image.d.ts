/**
 * Load 类所需要的 props 参数
 */
export interface LoadNeedImagePropsInterface {
  src: string
  errSrc: string
  rootMargin: string
  lazy: boolean
  load: Function
  error: Function
}

export interface CallbackInterface {
  (params: boolean): void
}

export interface LazyInterface {
  observer(): IntersectionObserver
  lazyCreateImg(): void
}

export interface LoadImageInterface {
  (
    node: HTMLImageElement,
    prop: LoadNeedImagePropsInterface,
    callback: CallbackInterface | null
  ): void
}

export interface LoadInterface {
  node: HTMLImageElement
  props: LoadNeedImagePropsInterface
  callback: CallbackInterface | null
  loadCreateImg(errSrc?: string): void
  onerror(evt: Event): void
  onload(evt: Event, src: string): void
}
