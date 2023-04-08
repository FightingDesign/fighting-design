import { h, render } from 'vue'
import type { VNode, ComponentInternalInstance, Component, ComponentPublicInstance } from 'vue'
import type { MessageProps } from '../interface'
import type { FightingType } from '../../../_interface'

export interface UseMessageReturn {
  Message: (opts: MessageProps) => ComponentPublicInstance
}

const instances: ComponentInternalInstance[] = []

export const remove = (instance: ComponentInternalInstance): void => {
  const index: number = instances.findIndex((item: ComponentInternalInstance) => item.uid == instance.uid)
  instances.splice(index, 1)
}

export const useMessage = (component: Component): UseMessageReturn => {

  const getNextElementInterval = (instance: ComponentInternalInstance): number => {
    const INTERVAL_HEIGHT = 16
    return instance.vnode.el?.offsetHeight + INTERVAL_HEIGHT
  }

  const addInstance = (instance: ComponentInternalInstance): void => {
    instances.push(instance)
  }

  const calculateVerticalOffset = (offset = 20): number => {
    let result = offset

    instances.forEach((instance: ComponentInternalInstance): void => {
      result += getNextElementInterval(instance)
    })

    return result
  }

  // 创建组件实例
  const createMessageComponentByOpts = (prop: MessageProps): ComponentInternalInstance => {
    const vNode: VNode = h(component, prop)

    const container: HTMLDivElement = document.createElement('div')

    render(vNode, container)

    document.body.appendChild(container.firstElementChild as HTMLElement)

    return vNode.component as ComponentInternalInstance
  }

  const createMessage = (opts: MessageProps): ComponentPublicInstance => {
    const instance = createMessageComponentByOpts(opts) as ComponentInternalInstance
    addInstance(instance)
    return instance.proxy as ComponentPublicInstance
  }

  const mergeOptions = (opts: MessageProps, type: FightingType = 'default'): MessageProps => {
    const defaultOptions = {
      duration: 4500,
      type,
      offset: calculateVerticalOffset(opts.offset)
    }

    return Object.assign({}, defaultOptions, opts)
  }

  const Message = (opts: MessageProps): ComponentPublicInstance => {
    return createMessage(mergeOptions(opts))
  }

  return { Message }
}
