import { isString } from './utils'
import type {
  LazyInterface,
  LoadInterface,
  LoadImageInterface,
  LoadNeedImagePropsInterface,
  CallbackInterface
} from '../_interface'

/**
 * 图片加载
 */
class Load implements LoadInterface {
  node: HTMLImageElement
  props: LoadNeedImagePropsInterface
  emit: Function
  callback: CallbackInterface | null

  /**
   * @param node 图片 dom 节点
   * @param props props 参数
   * @param emit 事件
   * @param callback 回调参数
   */
  constructor (
    node: HTMLImageElement,
    props: LoadNeedImagePropsInterface,
    emit: Function,
    callback: CallbackInterface | null
  ) {
    this.node = node
    this.props = props
    this.emit = emit
    this.callback = callback
  }
  /**
   * 第一步会进入到这里
   * 首先加载当前的 src 地址图片
   * @param errSrc src 失败后的加载路径
   */
  loadCreateImg = (errSrc?: string): void => {
    const newImg: HTMLImageElement = new Image()

    if (errSrc) {
      newImg.src = errSrc
    } else {
      newImg.src = this.props.src
    }

    // src 加载失败
    newImg.addEventListener('error', (evt: Event): void => {
      this.onerror(evt)
    })

    // src 加载成功
    newImg.addEventListener('load', (evt: Event): void => {
      this.onload(evt, newImg.src)
    })
  }
  /**
   * 加载失败
   * @param evt 事件对象
   * @returns
   */
  onerror = (evt: Event): void => {
    // 如果存在 errSrc 则继续尝试加载
    if (this.props.errSrc) {
      this.loadCreateImg(this.props.errSrc)
      this.props.errSrc = ''
      return
    }

    // 否则返回失败回调
    this.emit('error', evt)
    if (this.callback) {
      this.callback(false)
    }
  }
  /**
   * 图片加载
   * @param evt 事件对象
   * @param src 需要加载的 src
   */
  onload = (evt: Event, src: string): void => {
    this.node.src = src
    this.emit('load', evt)

    if (this.callback) {
      this.callback(true)
    }
  }
}

/**
 * 图片懒加载
 * 使用 IntersectionObserver 监视图片
 * https://developer.mozilla.org/zh-CN/docs/Web/API/IntersectionObserver/observe
 */
class Lazy extends Load implements LazyInterface {
  constructor (
    img: HTMLImageElement,
    props: LoadNeedImagePropsInterface,
    emit: Function,
    callback: CallbackInterface | null
  ) {
    super(img, props, emit, callback)
  }
  /**
   * 懒加载函数
   * @returns
   */
  observer = (): IntersectionObserver => {
    const observer: IntersectionObserver = new IntersectionObserver(
      (arr: IntersectionObserverEntry[]): void => {
        if (arr[0].isIntersecting) {
          this.loadCreateImg()
          observer.unobserve(this.node)
        }
      },
      {
        rootMargin: isString(this.props.rootMargin)
          ? this.props.rootMargin
          : this.props.rootMargin + 'px'
      }
    )
    return observer
  }
  /**
   * 执行懒加载
   */
  lazyCreateImg = (): void => {
    this.observer().observe(this.node)
  }
}

/**
 * 判断是懒加载还是正常加载
 * @param node img 元素
 * @param prop Props
 * @param emit Emits
 * @param callback 回调函数
 */
export const loadImage: LoadImageInterface = (
  node: HTMLImageElement,
  prop: LoadNeedImagePropsInterface,
  emit: Function,
  callback: CallbackInterface | null
): void => {
  /**
   * 如果传入了 lazy 则执行懒加载类
   * 否则执行正常加载类
   */
  if (prop.lazy) {
    const lazy: Lazy = new Lazy(node, prop, emit, callback)
    return lazy.lazyCreateImg()
  }
  const load: Load = new Load(node, prop, emit, callback)
  return load.loadCreateImg()
}
