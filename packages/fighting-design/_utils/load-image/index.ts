import { isString } from '../index'
import { useRun } from '../../_hooks'
import type {
  LoadLazyInterface,
  LoadInterface,
  LoadImagePropsInterface,
  LoadCallbackInterface
} from './interface'

/**
 * 图片加载
 */
class Load implements LoadInterface {
  node: HTMLImageElement
  props: LoadImagePropsInterface
  callback: LoadCallbackInterface | null
  loadErrSrc: boolean

  /**
   * @param node 图片 dom 节点
   * @param props props 参数
   * @param callback 回调参数
   */
  constructor (
    node: HTMLImageElement,
    props: LoadImagePropsInterface,
    callback: LoadCallbackInterface | null
  ) {
    this.node = node
    this.props = props
    this.callback = callback
    this.loadErrSrc = false
  }
  /**
   * 第一步会进入到这里
   *
   * 首先加载当前的 src 地址图片
   *
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
   *
   * @param evt 事件对象
   */
  onerror = (evt: Event): void => {
    /**
     * 如果存在 errSrc 并且没有加载过则继续尝试加载
     *
     * this.loadErrSrc 用于避免无限死循环
     */
    if (this.props.errSrc && !this.loadErrSrc) {
      this.loadCreateImg(this.props.errSrc)
      this.loadErrSrc = true
      return
    }

    // 否则返回失败回调
    useRun(this.props.onError, evt)
    useRun(this.callback, false)
  }
  /**
   * 图片加载
   * @param evt 事件对象
   * @param src 需要加载的 src
   */
  onload = (evt: Event, src: string): void => {
    this.node.src = src
    useRun(this.props.onLoad, evt)
    useRun(this.callback, true)
  }
}

/**
 * 图片懒加载
 *
 * 使用 IntersectionObserver 监视图片
 *
 * @see IntersectionObserver https://developer.mozilla.org/zh-CN/docs/Web/API/IntersectionObserver/observe
 */
class Lazy extends Load implements LoadLazyInterface {
  constructor (
    img: HTMLImageElement,
    props: LoadImagePropsInterface,
    callback: LoadCallbackInterface | null
  ) {
    super(img, props, callback)
  }
  /**
   * 初始化懒加载构造器
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
 * @param callback 回调函数
 */
export const loadImage = (
  node: HTMLImageElement,
  prop: LoadImagePropsInterface,
  callback: LoadCallbackInterface | null
): void => {
  /**
   * 如果传入了 lazy 则执行懒加载类
   * 否则执行正常加载类
   */
  if (prop.lazy) {
    const lazy: Lazy = new Lazy(node, prop, callback)
    return lazy.lazyCreateImg()
  }
  const load: Load = new Load(node, prop, callback)
  return load.loadCreateImg()
}
