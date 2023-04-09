import { h, render, reactive } from 'vue'
import { FIGHTING_TYPE } from '../../../_tokens'
import type { VNode, ComponentInternalInstance, Component, ComponentPublicInstance, Ref } from 'vue'
import type { MessageProps, MessagePlacement } from '../interface'
import type { FightingType } from '../../../_interface'

export type MessageOptionalType = {
  [key in FightingType]: (message: string) => ComponentPublicInstance
}

export type MessageBasicType = (options: Partial<MessageProps>) => ComponentPublicInstance

export type MessageType = MessageBasicType & MessageOptionalType

export interface UseMessageReturn {
  Message: MessageType
}

export type MessageInstances = Partial<{
  [key in MessagePlacement]: ComponentInternalInstance[]
}>

/**
 * 组件实例集合
 * 
 * 以方位信息为键，指定方位实例数组集合为值进行存储
 */
const instances: MessageInstances = reactive({})

/**
 * 获取当前组件的方位信息
 * 
 * @param { Object } instance 组件实例
 * @returns { string } 方位信息
 */
const getPlacement = (instance: ComponentInternalInstance): MessagePlacement => {
  return (instance.props as MessageProps).placement
}

/**
 * 按实例获取索引
 * 
 * @param { Object } instance 组件实例
 * @returns { number } 实例的索引
 */
const getIndexByInstance = (instance: ComponentInternalInstance): number => {
  /** 获取当前方位 */
  const placement: MessagePlacement = getPlacement(instance)

  /**
   * @see Array.prototype.findIndex() https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex
   */
  return (instances[placement] as ComponentInternalInstance[]).findIndex((item: ComponentInternalInstance): boolean => item.uid == instance.uid)
}

/**
 * 获取到下一个元素之间的间隔
 * 
 * @param { Object } instance 组件实例
 * @returns { number } 间隔尺寸信息
 */
const getNextElementInterval = (instance: ComponentInternalInstance): number => {
  /** 间隔高度 */
  const INTERVAL_HEIGHT = 16
  return (instance.vnode.el as HTMLDivElement).offsetHeight + INTERVAL_HEIGHT
}

/**
 * 更新组件偏移量
 * 
 * @param { Object } closeInstance 组件实例
 * @returns
 */
const updatePosition = (closeInstance: ComponentInternalInstance): void => {
  /** 获取当前组件实例索引值 */
  const currentInstanceIndex: number = getIndexByInstance(closeInstance)
  /** 获取当前方位 */
  const placement: MessagePlacement = getPlacement(closeInstance)

  if (currentInstanceIndex < 0) return

  for (
    let index: number = currentInstanceIndex + 1;
    index < (instances[placement] as ComponentInternalInstance[]).length;
    index++
  ) {
    /** 获取到当前实例之后的实例对象，因为只需要更新后面的实例偏移位置 */
    const instance: ComponentInternalInstance = (instances[placement] as ComponentInternalInstance[])[index]

      /** 减少后面的组件实例偏移量 */
      ; (instance.exposed as Record<string, Ref<number>>).offsetVal.value -= getNextElementInterval(closeInstance)
  }
}

/**
 * 移除组件实例对象
 * 
 * @param { Object } instance 组件实例
 */
export const remove = (instance: ComponentInternalInstance): void => {
  updatePosition(instance)

  /** 当前组件的方位 */
  const placement: MessagePlacement = getPlacement(instance)

    /**
     * @see Array.prototype.splice() https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
     */
    ; (instances[placement] as ComponentInternalInstance[]).splice(getIndexByInstance(instance), 1)
}

export const useMessage = (component: Component): UseMessageReturn => {

  /**
   * 添加组件实例对象
   * 
   * @param { Object } instance 组件实例
   */
  const addInstance = (instance: ComponentInternalInstance): void => {
    /** 当前组件的方位 */
    const placement: MessagePlacement = getPlacement(instance)

    if (instances[placement]) {
      /** 如果对象中存在当前方位数组，则往数组中追加组件实例 */
      (instances[placement] as ComponentInternalInstance[]).push(instance)
    } else {
      /** 否则新建一个数组存储当前组件实例 */
      instances[placement] = [instance]
    }
  }

  /**
   * 计算垂直偏移量
   * 
   * @param { Object } options 配置对象
   * @returns { number } 垂直偏移量
   */
  const calculateVerticalOffset = (options: Partial<MessageProps>): number => {
    /** 偏移量 */
    let result: number = options.offset || 20
    /** 获取到当前方位的组件实例集合 */
    const placementInstance: ComponentInternalInstance[] | undefined = instances[options.placement || 'top']

    if (placementInstance) {
      placementInstance.forEach((instance: ComponentInternalInstance): void => {
        result += getNextElementInterval(instance)
      })
    }

    return result
  }

  /**
   * 创建组件实例
   * 
   * @param { Object } prop 参数对象
   * @returns { Object } 组件实例
   */
  const createMessageComponentByOptions = (prop: Partial<MessageProps>): ComponentInternalInstance => {
    /**
     * 创建虚拟 DOM 节点
     *
     * @see h https://cn.vuejs.org/api/render-function.html#h
     */
    const vNode: VNode = h(component, prop)

    /** 创建容器节点 */
    const container: HTMLDivElement = document.createElement('div')

    render(vNode, container)

    /**
     * @see Node.appendChild https://developer.mozilla.org/zh-CN/docs/Web/API/Node/appendChild
     * @see Element.firstElementChild https://developer.mozilla.org/zh-CN/docs/Web/API/Element/firstElementChild
     * @see Node.appendChild https://developer.mozilla.org/zh-CN/docs/Web/API/Node/appendChild
     */
    document.body.appendChild(container.firstElementChild as HTMLElement)
    return vNode.component as ComponentInternalInstance
  }

  /**
   * 创建组件实例对象
   * 
   * @param { Object } options 配置对象
   * @returns { Object } 组件实例对象
   */
  const createMessage = (options: Partial<MessageProps>): ComponentPublicInstance => {
    /** 组件实例 */
    const instance = createMessageComponentByOptions(options) as ComponentInternalInstance
    addInstance(instance)
    return instance.proxy as ComponentPublicInstance
  }

  /**
   * 合并参数对象
   * 
   * @param { Object } options 参数对象
   * @param { string } [type = 'default'] 类型
   * @returns { Object } 配置对象
   */
  const mergeOptions = (options: Partial<MessageProps>, type: FightingType = 'default'): Partial<MessageProps> => {
    /** 默认配置对象 */
    const defaultOptions: Partial<MessageProps> = {
      duration: 2500,
      type,
      placement: 'top',
      offset: calculateVerticalOffset(options)
    }

    return { ...defaultOptions, ...options }
  }

  /**
   * 创建组件实例
   * 
   * Partial<MessageProps> 代表仅需要部分的参数传递即可
   * 
   * @see Partial https://www.typescriptlang.org/docs/handbook/utility-types.html#partialtype
   * 
   * @param { Object } options 配置对象
   * @returns { Object } Message 组件实例
   */
  const Message: MessageBasicType = (options: Partial<MessageProps>): ComponentPublicInstance => {
    return createMessage(mergeOptions(options))
  }

  /**
   * 用于直接传入字符串使用
   *
   * @example FNotification.primary('xxx')
   */
  FIGHTING_TYPE.forEach((item: FightingType): void => {
    (Message as unknown as MessageOptionalType)[item] = (message: string): ComponentPublicInstance => {
      return createMessage(mergeOptions({ message }))
    }
  })

  return { Message } as UseMessageReturn
}
