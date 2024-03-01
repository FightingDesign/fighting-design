import { h, render, reactive } from 'vue'
import { FIGHTING_TYPE } from '../../_tokens'
import { isNumber, warning, isString } from '../../_utils'
import type {
  VNode,
  ComponentInternalInstance,
  Component,
  ComponentPublicInstance,
  Ref
} from 'vue'
import type { MessageProps, MessagePlacement } from '../../message'
import type { NotificationProps, NotificationPlacement } from '../../notification'
import type { FightingType } from '../../_interface'

/** 可选的 message 类型 */
export type MessageOptionalType = {
  [key in FightingType]: (message: string) => ComponentPublicInstance
}

/**
 * 基本的 message 类型
 *
 * @param { Object } params 参数对象
 */
export type MessageBasicType = (
  params: Partial<MessageProps | NotificationProps> | string
) => ComponentPublicInstance

/** message 类型 */
export type MessageType = MessageBasicType & MessageOptionalType

/**
 * useMessage 返回值类型接口
 *
 * @param { Function } Message 组件方法
 */
export interface UseMessageReturn {
  Message: MessageType
}

/** 组件实例对象集合 */
export type MessageInstances = Partial<{
  [key in MessagePlacement | NotificationPlacement]: ComponentInternalInstance[]
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
const getPlacement = (
  instance: ComponentInternalInstance
): MessagePlacement | NotificationPlacement => {
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
  const placement: MessagePlacement | NotificationPlacement = getPlacement(instance)

  /**
   * @see Array.prototype.findIndex() https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex
   */
  return (instances[placement] as ComponentInternalInstance[]).findIndex(
    (item: ComponentInternalInstance): boolean => item.uid == instance.uid
  )
}

/**
 * 获取到下一个元素之间的间隔
 *
 * @param { Object } instance 组件实例
 * @returns { number } 间隔尺寸信息
 */
const getNextElementInterval = (instance: ComponentInternalInstance): number => {
  /** 每个提示框之间的间隔高度 */
  const INTERVAL_HEIGHT = 16

  /**
   * @see HTMLElement.offsetHeight https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLElement/offsetHeight
   */
  return (instance.vnode.el as HTMLDivElement).offsetHeight + INTERVAL_HEIGHT
}

/**
 * 更新组件偏移量
 *
 * @param { Object } closeInstance 组件实例

 */
const updatePosition = (closeInstance: ComponentInternalInstance): void => {
  /** 获取当前组件实例索引值 */
  const currentInstanceIndex: number = getIndexByInstance(closeInstance)
  /** 获取当前方位 */
  const placement: MessagePlacement | NotificationPlacement = getPlacement(closeInstance)

  if (currentInstanceIndex < 0) return

  for (
    let index: number = currentInstanceIndex + 1;
    index < (instances[placement] as ComponentInternalInstance[]).length;
    index++
  ) {
    /** 获取到当前实例之后的实例对象，因为只需要更新后面的实例偏移位置 */
    const instance: ComponentInternalInstance = (
      instances[placement] as ComponentInternalInstance[]
    )[index]

    /** 减少后面的组件实例偏移量 */
    ;(instance.exposed as Record<string, Ref<number>>).offsetVal.value -=
      getNextElementInterval(closeInstance)
  }
}

/**
 * 移除组件实例对象
 *
 * @param { Object } instance 组件实例
 */
export const removeInstance = (instance: ComponentInternalInstance): void => {
  updatePosition(instance)

  /** 当前组件的方位 */
  const placement: MessagePlacement | NotificationPlacement = getPlacement(instance)

  /**
   * @see Array.prototype.splice() https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
   */
  ;(instances[placement] as ComponentInternalInstance[]).splice(
    getIndexByInstance(instance),
    1
  )
}

/**
 * 提示类型组件方法
 *
 * 用于 Message 和 Notification
 *
 * @author Tyh2001 <https://github.com/Tyh2001>
 * @param { Object } component 组件
 * @param { string } name 组件名
 * @returns { Object }
 */
export const useMessage = (
  component: Component,
  name: 'message' | 'notification'
): UseMessageReturn => {
  /**
   * 添加组件实例对象
   *
   * @param { Object } instance 组件实例
   */
  const addInstance = (instance: ComponentInternalInstance): void => {
    /** 当前组件的方位 */
    const placement: MessagePlacement | NotificationPlacement = getPlacement(instance)

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
  const calculateVerticalOffset = (
    options: Partial<MessageProps | NotificationProps>
  ): number => {
    /** 偏移量 */
    let result: number = options.offset || 20
    /** 获取到当前方位的组件实例集合 */
    const placementInstance: ComponentInternalInstance[] | undefined =
      instances[
        options.placement ? options.placement : name === 'message' ? 'top' : 'top-right'
      ]

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
  const createMessageComponentByOptions = (
    prop: Partial<MessageProps | NotificationProps>
  ): ComponentInternalInstance => {
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
  const createMessage = (
    options: Partial<MessageProps | NotificationProps>
  ): ComponentPublicInstance => {
    /** 组件实例 */
    const instance = createMessageComponentByOptions(options) as ComponentInternalInstance
    /** 存储组件实例对象 */
    addInstance(instance)
    return instance.proxy as ComponentPublicInstance
  }

  /**
   * 合并参数对象
   *
   * @param { Object } options 参数对象
   * @returns { Object } 配置对象
   */
  const mergeOptions = (
    options: Partial<MessageProps | NotificationProps>
  ): Partial<MessageProps | NotificationProps> => {
    /** 默认配置对象 */
    const defaultOptions = {
      duration: 2500,
      placement: name === 'message' ? 'top' : 'top-right',
      offset: calculateVerticalOffset(options),
      ...options
    }

    /** 如何传入的时间不是一个数字，则强制修改成为数字类型 */
    if (!isNumber(defaultOptions.duration)) {
      defaultOptions.duration = 2500

      /**
       * 如果不是数字参数，则报错
       *
       * Parameters `duration` is not a number.The default value has been used 2500.
       */
      warning(
        `F${name}`,
        'Parameters `duration` is not a number.The default value has been used 2500.'
      )
    }

    return defaultOptions as Partial<MessageProps | NotificationProps>
  }

  /**
   * 创建组件实例
   *
   * Partial<MessageProps | NotificationProps> 代表仅需要部分的参数传递即可
   *
   * @see Partial https://www.typescriptlang.org/docs/handbook/utility-types.html#partialtype
   *
   * @param { Object } params 配置对象
   * @returns { Object } Message 组件实例
   */
  const Message: MessageBasicType = (
    params: Partial<MessageProps | NotificationProps> | string
  ): ComponentPublicInstance => {
    /** 配置对象 */
    const options: Partial<MessageProps | NotificationProps> = isString(params)
      ? { message: params }
      : params
    return createMessage(mergeOptions(options))
  }

  /**
   * 用于直接传入字符串使用
   *
   * @example FNotification.primary('xxx')
   */
  FIGHTING_TYPE.forEach((type: FightingType): void => {
    (Message as unknown as MessageOptionalType)[type] = (
      message: string
    ): ComponentPublicInstance => {
      return createMessage(mergeOptions({ message, type }))
    }
  })

  return { Message } as UseMessageReturn
}
