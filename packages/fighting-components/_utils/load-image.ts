import type {
  LazyInterface,
  LoadInterface,
  loadImageInterface,
  propsInterface,
  callbackInterface
} from '../_interface'

/**
 * 图片加载
 */
class Load implements LoadInterface {
  img: HTMLImageElement
  props: propsInterface
  emit: Function
  callback: callbackInterface | null

  constructor(
    img: HTMLImageElement,
    props: propsInterface,
    emit: Function,
    callback: callbackInterface | null
  ) {
    this.img = img
    this.props = props
    this.emit = emit
    this.callback = callback
  }
  /**
   * 加载当前的 src 地址图片
   */
  loadCreateImg = (): void => {
    this.img.src = this.props.src

    this.img.addEventListener('error', (evt: Event): void => {
      this.onerror(evt)
    })
    this.img.addEventListener('load', (evt: Event): void => {
      this.onload(evt)
    })
  }
  /**
   * 加载失败
   * @param evt 事件对象
   * @returns
   */
  onerror = (evt: Event): void => {
    if (this.props.errSrc) {
      return this.loadNextImg()
    }
    this.emit('error', evt)
    if (this.callback) {
      this.callback(false, 0)
    }
  }
  /**
   * 加载图片
   * @param evt 事件对象
   */
  onload = (evt: Event): void => {
    this.emit('load', evt)
    if (this.callback) {
      this.callback(true, this.img.width)
    }
  }
  /**
   * 尝试加载 err-src 的图片
   *
   * 如果加载 src 失败，则进入这里，加载 err-src 的图片地址
   */
  loadNextImg = (): void => {
    const newImg: HTMLImageElement = new Image()
    newImg.src = this.props.errSrc

    newImg.addEventListener('error', (evt: Event): void => {
      // 进入这里则说明 err-src 的图片也加载失败了
      this.emit('error', evt)
      if (this.callback) {
        this.callback(false, 0)
      }
    })

    newImg.addEventListener('load', (): void => {
      this.img.src = newImg.src
    })
  }
}

/**
 * 图片懒加载
 * 使用 IntersectionObserver 监视图片
 * https://developer.mozilla.org/zh-CN/docs/Web/API/IntersectionObserver/observe
 */
class Lazy extends Load implements LazyInterface {
  constructor(
    img: HTMLImageElement,
    props: propsInterface,
    emit: Function,
    callback: callbackInterface | null
  ) {
    super(img, props, emit, callback)
  }
  /**
   * 懒加载函数
   * @returns
   */
  observer = (): IntersectionObserver => {
    const observer: IntersectionObserver = new IntersectionObserver(
      (arr: Array<IntersectionObserverEntry>): void => {
        if (arr[0].isIntersecting) {
          this.img.src = this.props.src

          this.img.addEventListener('error', (evt: Event): void => {
            this.onerror(evt)
          })
          this.img.addEventListener('load', (evt: Event): void => {
            this.onload(evt)
          })

          observer.unobserve(this.img)
        }
      },
      { rootMargin: this.props.rootMargin }
    )
    return observer
  }
  /**
   * 执行懒加载
   */
  lazyCreateImg = (): void => {
    this.observer().observe(this.img)
  }
}

/**
 * 判断是懒加载还是正常加载
 * @param node img 元素
 * @param prop Props
 * @param emit Emits
 * @param callback 回调函数
 */
export const loadImage: loadImageInterface = (
  node: HTMLImageElement,
  prop: propsInterface,
  emit: Function,
  callback: callbackInterface | null
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
  load.loadCreateImg()
}
