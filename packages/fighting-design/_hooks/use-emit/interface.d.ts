import type { ObjectEmitsOptions } from 'vue'

/**
 * 注册自定义事件 hook 类型接口
 * 
 * callback 处理方法
 * 
 * name 可选参数，配置自定义事件名称
 * 
 */
export interface UseEmitInterface {
  (callback: Function, name?: string): ObjectEmitsOptions
}
