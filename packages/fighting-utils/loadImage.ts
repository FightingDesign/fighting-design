import type {
  LazyInterface,
  LoadInterface,
  loadImageInterface,
  propsInterface
} from '@fighting-design/fighting-type'

/**
 * 图片加载
 */
class Load implements LoadInterface {
  img: HTMLImageElement
  props: propsInterface
  emit: Function
  callback: Function
  constructor(
    img: HTMLImageElement,
    props: propsInterface,
    emit: Function,
    callback: Function
  ) {
    this.img = img
    this.props = props
    this.emit = emit
    this.callback = callback
  }
  // 加载当前的 src 地址图片
  loadCreateImg(): void {
    this.img.src = this.props.src

    this.img.addEventListener('error', (evt: Event): void => {
      this.onerror(evt)
    })
    this.img.addEventListener('load', (evt: Event): void => {
      this.onload(evt)
    })
  }
  onerror(evt: Event): void {
    if (this.props.errSrc) {
      return this.loadNextImg()
    }
    this.emit('error', evt)
    this.callback(false)
  }
  onload(evt: Event): void {
    this.emit('load', evt)
  }
  // 如果加载 src 失败，则进入这里，加载 err-src 的图片地址
  loadNextImg(): void {
    const newImg: HTMLImageElement = new Image()
    newImg.src = this.props.errSrc

    newImg.addEventListener('error', (evt: Event): void => {
      // 进入这里则说明 err-src 的图片也加载失败了
      this.emit('error', evt)
      this.callback(false)
    })

    newImg.addEventListener('load', (evt: Event): void => {
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
    callback: Function
  ) {
    super(img, props, emit, callback)
  }
  observer(): IntersectionObserver {
    const observer: IntersectionObserver = new IntersectionObserver(
      (arr: Array<IntersectionObserverEntry>) => {
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
  lazyCreateImg(): void {
    this.observer().observe(this.img)
  }
}

/**
 * 判断是懒加载还是正常加载
 * @param node img 元素
 * @param prop Props
 * @param emit Emits
 */
export const loadImage: loadImageInterface = (
  node: HTMLImageElement,
  prop: propsInterface,
  emit: Function,
  callback: Function
): void => {
  if (prop.lazy) {
    const lazy: Lazy = new Lazy(node, prop, emit, callback)
    return lazy.lazyCreateImg()
  }
  const load: Load = new Load(node, prop, emit, callback)
  load.loadCreateImg()
}
