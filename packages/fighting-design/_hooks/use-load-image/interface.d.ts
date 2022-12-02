import type { Ref } from 'vue'

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
