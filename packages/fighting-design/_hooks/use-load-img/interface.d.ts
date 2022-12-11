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
  rootMargin: string | number
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
