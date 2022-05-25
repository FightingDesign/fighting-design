import type {
  LazyInterface,
  LoadInterface,
  creationMethodInterface,
  loadImageInterface,
  propsInterface,
  onerrorInterface,
  onloadInterface
} from '@fighting-design/fighting-type'

/**
 * 图片加载失败的回调错
 * @param emit Emit
 */
const onerror: onerrorInterface = (emit: Function): void => {
  emit('error')
}

/**
 * 图片加载成功的回调
 * @param emit Emit
 */
const onload: onloadInterface = (emit: Function): void => {
  emit('load')
}

/**
 * 懒加载类
 * 使用 IntersectionObserver 监视图片
 * https://developer.mozilla.org/zh-CN/docs/Web/API/IntersectionObserver/observe
 */
class Lazy implements LazyInterface {
  img: HTMLImageElement
  props: propsInterface
  emit: Function
  constructor(img: HTMLImageElement, props: propsInterface, emit: Function) {
    this.img = img
    this.props = props
    this.emit = emit
  }
  observer(): IntersectionObserver {
    const observer: IntersectionObserver = new IntersectionObserver(
      (arr: Array<IntersectionObserverEntry>) => {
        if (arr[0].isIntersecting) {
          this.img.src = this.props.src
          this.img.onerror = (): void => onerror(this.emit)
          this.img.onload = (): void => onload(this.emit)
          observer.unobserve(this.img)
        }
      },
      { rootMargin: this.props.rootMargin }
    )
    return observer
  }
  createImg(): void {
    this.observer().observe(this.img)
  }
}

/**
 * 正常加载类
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
  createImg(): void {
    this.img.src = this.props.src
    this.img.onerror = (): void => onerror(this.emit)
    this.img.onload = (): void => onload(this.emit)
  }
}

/**
 * 调用加载方法
 * @param instance 类实例
 */
const creationMethod: creationMethodInterface = (
  instance: Lazy | Load
): void => {
  instance.createImg()
}

/**
 * 判断是懒加载还是正常加载
 * 根据不同而传入不同的实例
 * @param node img 元素
 * @param prop Props
 * @param emit Emits
 * @returns
 */
export const loadImage: loadImageInterface = (node: HTMLImageElement, prop: propsInterface, emit: Function): void => {
  if (prop.lazy) {
    return creationMethod(new Lazy(node, prop, emit))
  }
  creationMethod(new Load(node, prop, emit))
}
