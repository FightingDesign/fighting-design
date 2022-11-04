/**
 * Load 加载类所需要的 props 参数
 * 
 * src 图片路径
 * 
 * errSrc 加载失败时要显示的地址
 * 
 * rootMargin 触发懒加载的距离
 * 
 * lazy 是否懒加载图片
 * 
 * load 图片加载成功触发的回调
 * 
 * error 图片加载失败触发的回调
 */
export interface LoadNeedImagePropsInterface {
  src: string
  errSrc: string
  rootMargin: string
  lazy: boolean
  load: Function
  error: Function
}

/**
 * Load 加载类的回调函数
 */
export interface LoadCallbackInterface {
  (params: boolean): void
}

/**
 * 懒加载类接口
 */
export interface LoadLazyInterface {
  observer(): IntersectionObserver
  lazyCreateImg(): void
}

/**
 * 加载图片方法接口
 * 
 * node 所需要设置的 img 节点
 * 
 * prop props 参数
 * 
 * callback 回调函数
 */
export interface LoadImageInterface {
  (
    node: HTMLImageElement,
    prop: LoadNeedImagePropsInterface,
    callback: CallbackInterface | null
  ): void
}

/**
 * Load 加载类接口
 */
export interface LoadInterface {
  node: HTMLImageElement
  props: LoadNeedImagePropsInterface
  callback: CallbackInterface | null
  loadCreateImg(errSrc?: string): void
  onerror(evt: Event): void
  onload(evt: Event, src: string): void
}
