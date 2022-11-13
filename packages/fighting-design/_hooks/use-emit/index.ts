import type { ObjectEmitsOptions } from 'vue'
import type { UseEmitInterface } from './interface'

/**
 * 注册自定义事件
 * 我不希望在每个组件的 props.ts 中写入一些 emit 相关的代码
 * 所以封装了这个 hook
 * 
 * https://cn.vuejs.org/api/options-state.html#emits
 * 
 * @param callback 回调函数
 * @param name 自定义事件名称，不需要加 update:
 * @returns { ObjectEmitsOptions } 自定义事件对象
 */
export const useEmit: UseEmitInterface = (callback: Function, name = 'modelValue'): ObjectEmitsOptions => {
  return {
    [`update:${name}`]: callback
  } as ObjectEmitsOptions
}
