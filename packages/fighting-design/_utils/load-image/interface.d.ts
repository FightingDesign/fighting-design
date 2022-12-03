import type {
  HandleEventInterface,
  OrdinaryFunctionInterface
} from '../../_interface'

export type {
  OrdinaryFunctionInterface
} from '../../_interface'

/**
 * Load 加载类所需要的 props 参数
 *
 * @param src 图片路径
 * @param errSrc 加载失败时要显示的地址
 * @param rootMargin 触发懒加载的距离
 * @param lazy 是否懒加载图片
 * @param onLoad 图片加载成功触发的回调
 * @param onError 图片加载失败触发的回调
 */
export interface LoadImagePropsInterface {
  src: string
  errSrc: string
  rootMargin: string
  lazy: boolean
  onLoad: HandleEventInterface
  onError: HandleEventInterface
}

/**
 * Load 加载类的回调函数
 */
export interface LoadCallbackInterface {
  (params: boolean): void
}

/**
 * Load 加载类接口
 *
 * @param node img 元素节点
 * @param props 需要的 props 参数
 * @param callback 回调函数
 * @param loadErrSrc 是否已经加载过失败的地址
 * @param loadCreateImg 开始加载图片
 * @param onerror 用于处理加载失败
 * @param onload 用于处理加载成功
 */
export interface LoadInterface {
  node: HTMLImageElement
  props: LoadImagePropsInterface
  callback: CallbackInterface | null
  loadErrSrc: boolean
  loadCreateImg: LoadCreateImgInterface
  onerror: HandleEventInterface
  onload: LoadOnloadInterface
}

/**
 * 懒加载类接口类型接口
 *
 * @param observer 初始化懒加载构造器
 * @param lazyCreateImg 执行懒加载
 */
export interface LoadLazyInterface {
  observer: LoadLazyObserverInterface
  lazyCreateImg: OrdinaryFunctionInterface
}
