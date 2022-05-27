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
  constructor(img: HTMLImageElement, props: propsInterface, emit: Function) {
    this.img = img
    this.props = props
    this.emit = emit
  }
  // 加载当前的 src 地址图片
  loadCreateImg(): void {
    this.img.src = this.props.src
    this.img.onerror = (): void => this.onerror()
    this.img.onload = (): void => this.onload()
  }
  // 如果加载 src 失败，则进入这里，加载 err-src 的图片地址
  loadNextImg(): void {
    const newImg = new Image()
    newImg.src = this.props.errSrc
    newImg.onerror = () => {
      console.log('全部失败。。。。。')
      this.emit('error')
    }
    newImg.onload = () => {
      this.img.src = newImg.src
    }
  }
  onerror(): void {
    if (this.props.errSrc) {
      return this.loadNextImg()
    }
    this.emit('error')
  }
  onload(): void {
    this.emit('load')
  }
}

/**
 * 图片懒加载
 * 使用 IntersectionObserver 监视图片
 * https://developer.mozilla.org/zh-CN/docs/Web/API/IntersectionObserver/observe
 */
class Lazy extends Load implements LazyInterface {
  constructor(img: HTMLImageElement, props: propsInterface, emit: Function) {
    super(img, props, emit)
  }
  observer(): IntersectionObserver {
    const observer: IntersectionObserver = new IntersectionObserver(
      (arr: Array<IntersectionObserverEntry>) => {
        if (arr[0].isIntersecting) {
          this.img.src = this.props.src

          this.img.onerror = (): void => this.onerror()
          this.img.onload = (): void => this.onload()

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
  emit: Function
): void => {
  if (prop.lazy) {
    const lazy = new Lazy(node, prop, emit)
    lazy.lazyCreateImg()
    return
  }
  const load = new Load(node, prop, emit)
  load.loadCreateImg()
}
