import type { Ref } from 'vue'

/**
 * useOffset 返回值类型接口
 *
 * @param { Object } offset 偏移距离
 * @param { Object } offsetLeft 距离左侧的偏移量
 * @param { Function } setPosition 设置偏移量
 */
export interface UseOffsetReturn {
  offset: Ref<number>
  offsetLeft: Ref<number>
  setPosition: (dot: number) => void
}
