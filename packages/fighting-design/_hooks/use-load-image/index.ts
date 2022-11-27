import { ref } from 'vue'
import { useProps } from '../index'
import { loadImage } from '../../_utils'
import type { Ref } from 'vue'
import type {
  LoadImagePropsInterface,
  LoadCallbackInterface
} from '../../_utils/load-image/interface'
import type {
  UseLoadImageInterface,
  UseLoadImageReturnInterface,
  LoadActionInterface
} from './interface'

export const useLoadImage: UseLoadImageInterface = <
  T extends { lazy: boolean }
>(
  prop: T
): UseLoadImageReturnInterface => {
  /**
   * 判断是否加载成功
   * 如果失败则会展示失败的状态
   */
  const isSuccess: Ref<boolean> = ref<boolean>(true)

  /**
   * 是否展示 dom 元素
   * 在加载还未完成之前，因为 src 是空，所以会展示一个 撕裂的图片
   * 所以在加载期间先隐藏，加载完成之后再显示
   *
   * 这里涉及到懒加载，那么如果在懒加载状态下将图片隐藏掉，是不会触发懒加载的
   * 所以这里通过懒加载来判断，如果懒加载为 true 则不隐藏
   * 为 false 的时候代表不是懒加载，所以可以先隐藏
   */
  const isShowNode: Ref<boolean> = ref<boolean>(prop.lazy)

  /**
   * 开始触发加载
   *
   * @param el img dom 元素
   */
  const loadAction: LoadActionInterface = (el: Ref<HTMLImageElement>): void => {
    /**
     * 图片加载需要的回调函数
     *
     * @param params 回调返回值
     */
    const callback: LoadCallbackInterface = (params: boolean): void => {
      isSuccess.value = params
      isShowNode.value = params
    }

    const { filter } = useProps(prop)

    loadImage(el.value, filter(['src', 'errSrc', 'rootMargin', 'lazy', 'onLoad', 'onError']) as unknown as LoadImagePropsInterface, callback)
  }

  return {
    isSuccess,
    isShowNode,
    loadAction
  } as UseLoadImageReturnInterface
}
