import type { Ref } from 'vue'

/**
 * useLoadImg 所需要的 prop 参数
 *
 * @param { string } src 图片路径
 * @param { string } errSrc 加载失败时要显示的地址
 * @param { string | number } rootMargin 触发懒加载的距离
 * @param { boolean } lazy 是否懒加载图片
 * @param { Function } onLoad 图片加载成功触发的回调
 * @param { Function } onError 图片加载失败触发的回调
 */
export interface UseLoadImgProp {
  src: string
  errSrc: string
  rootMargin: string | number
  lazy: boolean
  onLoad: (evt: Event) => void
  onError: (evt: Event) => void
}

/**
 * useLoadImg 返回值类型接口
 *
 * @param { Object } isSuccess 是否加载成功
 * @param { Object } isShowNode 是否加展示 img 元素
 * @param { Function } loadImg 开始加载
 */
export interface UseLoadImgReturn {
  isSuccess: Ref<boolean>
  isShowNode: Ref<boolean>
  loadImg: (node: HTMLImageElement) => void
}
