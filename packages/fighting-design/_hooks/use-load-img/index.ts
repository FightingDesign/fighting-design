import { ref } from 'vue'
import { sizeChange } from '../../_utils'
import { useRun } from '../../_hooks'
import type { Ref } from 'vue'

/**
 * useLoadImg 所需要的 prop 参数
 *
 * @param src 图片路径
 * @param errSrc 加载失败时要显示的地址
 * @param rootMargin 触发懒加载的距离
 * @param lazy 是否懒加载图片
 * @param onLoad 图片加载成功触发的回调
 * @param onError 图片加载失败触发的回调
 */
export interface UseLoadImgProp {
  src: string
  errSrc: string
  rootMargin: string
  lazy: boolean
  onLoad(evt: Event): void
  onError(evt: Event): void
}

/**
 * useLoadImg 返回值类型接口
 * 
 * @param isSuccess 是否加载成功
 * @param loadImg 开始加载
 */
export interface UseLoadImgReturn {
  isSuccess: Ref<boolean>
  loadImg(node: HTMLImageElement): void
}

/**
 * 加载图片
 * 
 * 用于普通图片加载和懒加载
 * 
 * @param prop prop 参数对象
 * @returns 
 */
export const useLoadImg = (prop: UseLoadImgProp): UseLoadImgReturn => {

  /**
   * 是否加载成功
   */
  const isSuccess = ref<boolean>(true)
  /**
   * 加载的元素
   */
  const el: HTMLImageElement = new Image
  /**
   * 是否加载过 errSrc
   * 
   * 该变量控制无限递归
   */
  let isLoadErrSrc = false

  /**
   * 移除事件监听
   * 
   * @param element 需要移除事件的节点
   */
  const removeNode = (element: HTMLImageElement): void => {
    (element as unknown as null) = null
  }

  /**
   * 加载成功
   * 
   * @param res 加载结果
   */
  const success = (node: HTMLImageElement, res: boolean): void => {
    node.src = el.src
    isSuccess.value = res
    removeNode(el)
    useRun(prop.onLoad, res)
  }

  /**
   * 加载失败
   * 
   * @param res 加载结果
   */
  const failure = (res: boolean): void => {
    isSuccess.value = res
    removeNode(el)
    useRun(prop.onError, res)
  }

  /**
   * 正常加载图片
   * 
   * @param errSrc 
   */
  const load = (node: HTMLImageElement, errSrc?: string): void => {
    new Promise((resolve, reject): void => {
      el.src = errSrc || prop.src

      el.onload = (): void => resolve(true)
      el.onerror = (): void => reject(false)
    })
      // 加载成功
      .then(res => {
        res && success(node, res as boolean)
      })
      // 加载失败
      .catch(err => {
        // 如果没有加载过 errSrc，并且 errSrc 存在，则继续加载
        if (!isLoadErrSrc && prop.errSrc) {
          load(node, prop.errSrc)
          isLoadErrSrc = true
          return
        }
        // 否则调用失败方法
        failure(err)
      })
  }

  /**
   * 懒加载
   * 
   * @param node 元素节点
   * @returns
   */
  const lazy = (node: HTMLImageElement): IntersectionObserver => {
    /**
     * 实例化监测方法
     * 
     * @see IntersectionObserver https://developer.mozilla.org/zh-CN/docs/Web/API/Intersection_Observer_API
     * @see IntersectionObserver.IntersectionObserver https://developer.mozilla.org/zh-CN/docs/Web/API/IntersectionObserver/IntersectionObserver
     */
    const observer = new IntersectionObserver(
      (arr: IntersectionObserverEntry[]): void => {
        // 如果到达区域范围开始加载
        if (arr[0].isIntersecting) {
          load(node)
          observer.unobserve(node)
        }
      },
      { rootMargin: sizeChange(prop.rootMargin) }
    )

    return observer
  }

  /**
   * 开始加载
   * 
   * @param node 元素节点
   */
  const loadImg = (node: HTMLImageElement): void => {
    prop.lazy ? lazy(node).observe(node) : load(node)
  }

  return {
    isSuccess,
    loadImg
  }
}
