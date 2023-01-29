import { render, h, reactive } from 'vue'
import { useRun } from '..'
import { isString, isArray } from '../../_utils'
import { FIGHTING_TYPE } from '../../_tokens'
import type { FightingType } from '../../_interface'
import type { ComponentInternalInstance, VNode, Component } from 'vue'
import type {
  MessageInstance,
  MessageFn,
  MessageOptions,
  MessageFnWith,
  MessageInstances,
  UseMassageManageReturn
} from './interface'
import type { MessagePlacement } from '../../message'

/** 组件实例对象 */
const instances: MessageInstances = reactive({})

/**
 * 提示类型组件方法
 * 
 * 用于 Message 和 Notification
 * 
 * @param component 组件实例
 */
export const useTips = (component?: Component): UseMassageManageReturn => {
  let seed = 1

  /**
   * 通过方位与 id，获取目标实例
   *
   * @param placement 弹出位置
   * @param id id
   */
  const getInstanceIndex = (placement: MessagePlacement, id: string): number => {
    /** 如果组件实例对象中没有找到方位信息数组，则返回 -1 */
    if (!instances[placement] || !isArray(instances[placement])) return -1

    /**
     * 找到满足条件的第一个元素的索引
     * 
     * @see findIndex https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex
     */
    return (instances[placement] as MessageInstance[]).findIndex((item: MessageInstance): boolean => {
      return item.id === id
    })
  }

  /**
   * 获取偏移距离
   * 
   * @param placement 弹出位置
   * @param id id
   * @param isNext 是否获取下一个元素
   * @returns 组件实例的索引
   */
  const getSiblingOffset = (placement: MessagePlacement, id: string, isNext: boolean): number => {
    /** 获取到当前元素的索引 */
    const idx: number = getInstanceIndex(placement, id)

    /** 如果没有找到则返回 0 */
    if (idx === -1) return 0

    /** 
     * 获取到前一个元素节点
     * 
     * 如果在上方，就获取下一个节点，否则获取前一个节点
     */
    const beforeInstance: MessageInstance | null = instances[placement] && (instances[placement] as MessageInstance[])[isNext ? idx + 1 : idx - 1] || null

    /** 没找到返回 0 */
    if (!beforeInstance) return 0

    /**
     * 在不同 vue 版本的表现不同（vue 版本取决于用户）
     *
     * vue > 3.2.36
     * exposeProxy: 响应式
     * exposed: 原始值
     *
     * vue < 3.2.36
     * exposeProxy: null
     * exposed: 响应式
     */
    return (beforeInstance.vm.exposeProxy || (beforeInstance.vm.exposed as MessageInstance)).bottom
  }

  /**
   * 移除实例对象
   *
   * @param placement 弹出位置
   * @param id 唯一值
   */
  const removeInstance = (placement: MessagePlacement, id: string): void => {
    /** 获取到当前元素的索引 */
    const idx: number = getInstanceIndex(placement, id)
      /**
       * 从数组中移除元素
       * 
       * @see splice https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
       */
      ; (instances[placement] as MessageInstance[]).splice(idx, 1)
  }

  /**
   * 创建实例
   *
   * @param instance 组件实例
   * @param placement 弹出位置
   * @returns 组件实例
   */
  const createInstance = (instance: MessageInstance, placement: MessagePlacement): MessageInstance => {
    if (instances[placement]) {
      (instances[placement] as MessageInstance[]).push(instance)
    } else {
      instances[placement] = [instance]
    }
    return instance
  }

  /**
   * 创建组件实例
   * 
   * @param options 传入的对象参数
   * @returns 组件实例
   */
  const instance: MessageFn & Partial<MessageFnWith> = (options: MessageOptions): MessageInstance => {
    /** 创建容器盒子 */
    const container: HTMLDivElement = document.createElement('div')
    /** 每个 message 的唯一 id */
    const id = `message-${seed}`

    /** 如果是字符串参数，那么直接将 message 赋值即可 */
    if (isString(options)) {
      options = { message: options }
    }

    /** 需要传递的 props 参数列表 */
    const props: MessageOptions = {
      id,
      ...{ placement: (component as Component).name === 'FMessage' ? 'top' : 'top-right' },
      ...options,
      /** 关闭动画结束时，移除 dom */
      onDestroy: (): void => {
        useRun(props.onClose)
        render(null, container)
      }
    } as const

    /**
     * 创建虚拟 DOM 节点
     * 
     * @see h https://cn.vuejs.org/api/render-function.html#h
     */
    const VNode: VNode = h((component as Component), props)

    render(VNode, container)

    /** 将组件添加到 body 上 */
    document.body.appendChild(container.firstElementChild as HTMLElement)

    const vm = VNode.component as ComponentInternalInstance

    seed++

    /** 获取到组件实例 */
    const instance: MessageInstance = createInstance(
      {
        id,
        vm,
        bottom: 0,
        visible: 0,
        close: (): void => {
          ((vm as ComponentInternalInstance).exposed as MessageInstance).close()
        }
      },
      props.placement as MessagePlacement
    )

    return instance
  }

  FIGHTING_TYPE.forEach((type: FightingType): void => {
    instance[type] = (text: string): MessageInstance => {
      return instance({ message: text, type })
    }
  })

  return {
    getSiblingOffset,
    removeInstance,
    createInstance,
    instance
  }
}
