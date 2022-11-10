import type { HandleEventInterface, OrdinaryFunctionInterface } from '../../_interface'

export type { HandleEventInterface, OrdinaryFunctionInterface } from '../../_interface'

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
export interface LoadImagePropsInterface {
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
    prop: LoadImagePropsInterface,
    callback: CallbackInterface | null
  ): void
}

/**
 * 开始加载图片类型接口
 * 
 * 用于 Load 的 loadCreateImg 类方法
 * 
 * 可接收一个可选的 errSrc 参数
 * 
 * 如果有 errSrc 则加载备用地址，否则加载 src
 */
export interface LoadCreateImgInterface {
  (errSrc?: string): void
}

/**
 * 加载图片方法类型接口
 * 
 * evt 事件对象
 * 
 * src 图片地址
 */
export interface LoadOnloadInterface {
  (evt: Event, src: string): void
}

/**
 * 懒加载函数类型接口
 * 
 * 无参数，返回 IntersectionObserver
 * 
 * https://developer.mozilla.org/zh-CN/docs/Web/API/IntersectionObserver/IntersectionObserver
 */
export interface LoadLazyObserverInterface {
  (): IntersectionObserver
}

/**
 * Load 加载类接口
 */
export interface LoadInterface {
  node: HTMLImageElement
  props: LoadImagePropsInterface
  callback: CallbackInterface | null
  loadCreateImg: LoadCreateImgInterface
  onerror: HandleEventInterface
  onload: LoadOnloadInterface
}

/**
 * 懒加载类接口
 */
export interface LoadLazyInterface {
  observer: LoadLazyObserverInterface
  lazyCreateImg: OrdinaryFunctionInterface
}
