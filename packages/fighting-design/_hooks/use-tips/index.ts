import { render, h, reactive } from 'vue'
import { useRun } from '..'
import { isString, isArray } from '../../_utils'
import { FIGHTING_TYPE } from '../../_tokens'
import type { FightingType } from '../../_interface'
import type { ComponentInternalInstance, VNode, Component } from 'vue'
import type { MessagePlacement, MessageProps } from '../../message'

/** 参数列表，也就是 props 参数列表类型 */
export type TipsOptions = Partial<MessageProps> & {
  onDestroy?: () => void
}

/**
 * 组件实例
 *
 * @param { number } visible 是否展示
 * @param { number } bottom 底部偏移量
 * @param { string } id 唯一值
 * @param { Object } vm 组件组件内部实例
 * @param { Function } close 关闭之后的回调
 */
export interface TipsInstance {
  visible: number
  bottom: number
  id: string
  vm: ComponentInternalInstance
  close: () => void
}

/**
 * 组件实例集合类型
 *
 * 由方位信息作为键，实例数组集合为值的对象类型
 */
export type TipsInstances = Partial<{
  [key in MessagePlacement]: TipsInstance[]
}>

/**
 * renderInstance 方法状态
 *
 * @param { Object | string } options 传入选项参数或者字符串
 */
export type RenderInstanceFn = (options: TipsOptions | string) => TipsInstance

/**
 * renderInstance 方法状态
 *
 * @param { string } text 提示信息
 */
export type RenderInstanceFnWith = {
  [key in FightingType]: (text: string) => void
}

/**
 * renderInstance 方法类型
 *
 * 具有两种状态
 */
export type RenderInstance = RenderInstanceFn & Partial<RenderInstanceFnWith>

/**
 * useMassageManage 返回值类型接口
 *
 * @param { Function } getSiblingOffset 通过方位与 id，获取目标实例
 * @param { Function } removeInstance 移除实例对象
 * @param { Function } createInstance 创建实例
 * @param { Function } renderInstance 创建组件实例
 */
export interface UseTipsReturn {
  getSiblingOffset: (
    placement: MessagePlacement,
    id: string,
    isNext: boolean
  ) => number
  removeInstance: (placement: MessagePlacement, id: string) => void
  createInstance: (instance: TipsInstance, placement: MessagePlacement) => TipsInstance
  renderInstance: RenderInstance
}

/** 组件实例对象 */
const instances: TipsInstances = reactive({})

/**
 * 提示类型组件方法
 *
 * 用于 Message 和 Notification
 *
 * @author Tyh2001 <https://github.com/Tyh2001>
 * @param { Object } [component] 组件实例
 * @returns { Object }
 */
export const useTips = (component?: Component): UseTipsReturn => {
  const { run } = useRun()

  /** 层级标识 */
  let seed = 1

  /**
   * 通过方位与 id，获取目标实例
   *
   * @param { string } placement 弹出位置
   * @param { string } id id
   * @returns { number } 和传入 id 相同的实例对象
   */
  const getInstanceIndex = (placement: MessagePlacement, id: string): number => {
    /** 如果组件实例对象中没有找到方位信息数组，则返回 -1 */
    if (!instances[placement] || !isArray(instances[placement])) return -1

    /**
     * 找到满足条件的第一个元素的索引
     *
     * @see Array.prototype.findIndex() https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex
     */
    return (instances[placement] as TipsInstance[]).findIndex(
      (item: TipsInstance): boolean => {
        return item.id === id
      }
    )
  }

  /**
   * 获取偏移距离
   *
   * @param { string } placement 弹出位置
   * @param { string } id id
   * @param { boolean } isNext 是否获取下一个元素
   * @returns { number } 组件实例的索引
   */
  const getSiblingOffset = (
    placement: MessagePlacement,
    id: string,
    isNext: boolean
  ): number => {
    /** 获取到当前元素的索引 */
    const idx: number = getInstanceIndex(placement, id)

    /** 如果没有找到则返回 0 */
    if (idx === -1) return 0

    /**
     * 获取到前一个元素节点
     *
     * 如果在上方，就获取下一个节点，否则获取前一个节点
     */
    const beforeInstance: TipsInstance | null =
      (instances[placement] &&
        (instances[placement] as TipsInstance[])[isNext ? idx + 1 : idx - 1]) ||
      null

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
    return (beforeInstance.vm.exposeProxy || (beforeInstance.vm.exposed as TipsInstance))
      .bottom
  }

  /**
   * 移除实例对象
   *
   * @param { string } placement 弹出位置
   * @param { string } id 唯一值
   */
  const removeInstance = (placement: MessagePlacement, id: string): void => {
    /** 获取到当前元素的索引 */
    const idx: number = getInstanceIndex(placement, id)
      /**
       * 从数组中移除元素
       *
       * @see Array.prototype.splice() https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
       */
      ; (instances[placement] as TipsInstance[]).splice(idx, 1)
  }

  /**
   * 创建实例
   *
   * @param { Object } instance 组件实例
   * @param { string } placement 弹出位置
   * @returns { Object } 组件实例
   */
  const createInstance = (
    instance: TipsInstance,
    placement: MessagePlacement
  ): TipsInstance => {
    if (instances[placement]) {
      (instances[placement] as TipsInstance[]).push(instance)
    } else {
      instances[placement] = [instance]
    }
    return instance
  }

  /**
   * 创建组件实例
   *
   * @param { Object } options 传入的对象参数
   * @returns { Object } 组件实例
   */
  const renderInstance: RenderInstance = (options: TipsOptions | string): TipsInstance => {
    /** 创建容器盒子 */
    const container: HTMLDivElement = document.createElement('div')
    /** 每个 message 的唯一 id */
    const id = `message-${seed}`

    /** 如果是字符串参数，那么直接将 message 赋值即可 */
    if (isString(options)) {
      options = { message: options }
    }

    /** 需要传递的 props 参数列表 */
    const props: TipsOptions = {
      id,
      /** 不同的组件会有不同的展示位置 */
      ...{
        placement: (component as Component).name === 'FMessage' ? 'top' : 'top-right'
      },
      ...options,
      /** 关闭动画结束时，移除 DOM */
      onDestroy: (): void => {
        run(props.onClose)
        render(null, container)
      }
    } as const

    /**
     * 创建虚拟 DOM 节点
     *
     * @see h https://cn.vuejs.org/api/render-function.html#h
     */
    const VNode: VNode = h(component as Component, props)

    render(VNode, container)

    /** 将组件添加到 body 上 */
    document.body.appendChild(container.firstElementChild as HTMLElement)

    /** 获取组件组件内部实例 */
    const vm = VNode.component as ComponentInternalInstance

    seed++

    /** 获取到组件实例 */
    const instance: TipsInstance = createInstance(
      {
        id,
        vm,
        bottom: 0,
        visible: 0,
        close: (): void => {
          ((vm as ComponentInternalInstance).exposed as TipsInstance).close()
        }
      },
      props.placement as MessagePlacement
    )

    return instance
  }

  /**
   * 用于直接传入字符串使用
   *
   * @example FNotification.primary('xxx')
   */
  FIGHTING_TYPE.forEach((type: FightingType): void => {
    (renderInstance as Partial<RenderInstanceFnWith>)[type] = (text: string): TipsInstance => {
      return renderInstance({ message: text, type })
    }
  })

  return {
    getSiblingOffset,
    removeInstance,
    createInstance,
    renderInstance
  }
}
