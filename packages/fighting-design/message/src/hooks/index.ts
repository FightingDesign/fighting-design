import { h, render } from 'vue'
import { FIGHTING_TYPE } from '../../../_tokens'
import type { VNode, ComponentInternalInstance, Component, ComponentPublicInstance, Ref } from 'vue'
import type { MessageProps } from '../interface'
import type { FightingType } from '../../../_interface'

export type MessageOptionalType = {
  [key in FightingType]: (message: string) => ComponentPublicInstance
}

export type MessageBasicType = (options: Partial<MessageProps>) => ComponentPublicInstance

export type MessageType = MessageBasicType & MessageOptionalType

export interface UseMessageReturn {
  Message: MessageType
}

const instances: ComponentInternalInstance[] = []

const getIndexByInstance = (instance: ComponentInternalInstance): number => {
  return instances.findIndex((item: ComponentInternalInstance): boolean => item.uid == instance.uid)
}

const getNextElementInterval = (instance: ComponentInternalInstance): number => {
  const INTERVAL_HEIGHT = 16
  return (instance.vnode.el as HTMLDivElement).offsetHeight + INTERVAL_HEIGHT
}

const updatePosition = (closeInstance: ComponentInternalInstance): void => {
  const currentInstanceIndex: number = getIndexByInstance(closeInstance)

  if (currentInstanceIndex < 0) return

  for (
    let index: number = currentInstanceIndex + 1;
    index < instances.length;
    index++
  ) {
    const instance: ComponentInternalInstance = instances[index]

      ; (instance.exposed as Record<string, Ref<number>>).offsetVal.value -= getNextElementInterval(closeInstance)
  }
}

export const remove = (instance: ComponentInternalInstance): void => {
  updatePosition(instance)
  instances.splice(getIndexByInstance(instance), 1)
}

export const useMessage = (component: Component): UseMessageReturn => {

  const addInstance = (instance: ComponentInternalInstance): void => {
    instances.push(instance)
  }

  const calculateVerticalOffset = (offset = 20): number => {
    let result: number = offset

    instances.forEach((instance: ComponentInternalInstance): void => {
      result += getNextElementInterval(instance)
    })

    return result
  }

  /**
   * 创建组件实例
   * 
   * @param { Object } prop 参数对象
   * @returns { Object } 组件实例
   */
  const createMessageComponentByOptions = (prop: Partial<MessageProps>): ComponentInternalInstance => {
    const vNode: VNode = h(component, prop)
    const container: HTMLDivElement = document.createElement('div')
    render(vNode, container)
    document.body.appendChild(container.firstElementChild as HTMLElement)
    return vNode.component as ComponentInternalInstance
  }

  const createMessage = (options: Partial<MessageProps>): ComponentPublicInstance => {
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
    const defaultOptions = {
      duration: 4500,
      type,
      offset: calculateVerticalOffset(options.offset)
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

  FIGHTING_TYPE.forEach((item: FightingType): void => {
    (Message as unknown as MessageOptionalType)[item] = (message: string): ComponentPublicInstance => {
      return createMessage(mergeOptions({ message }))
    }
  })

  return { Message } as UseMessageReturn
}
