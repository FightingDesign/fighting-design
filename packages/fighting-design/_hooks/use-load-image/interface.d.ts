import type { Ref } from 'vue'

/**
 * 开始加载图片方法类型接口
 *
 * @param el img dom 元素
 */
export interface LoadActionInterface {
  (el: Ref<HTMLImageElement>): void
}

/**
 * useLoadImage hook 方法返回值类型接口
 *
 * @param isSuccess 是否加载成功
 * @param isShowNode 是展示 dom 节点
 * @param loadAction 触发加载方法
 */
export interface UseLoadImageReturnInterface {
  isSuccess: Ref<boolean>
  isShowNode: Ref<boolean>
  loadAction: LoadActionInterface
}

/**
 * 加载图片 hook 类型接口
 *
 * @param prop 指定组件的 prop 参数
 * @return { UseLoadImageReturnInterface }
 */
export interface UseLoadImageInterface {
  <T extends { lazy: boolean }>(prop: T): UseLoadImageReturnInterface
}
