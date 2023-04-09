import { h, render } from 'vue'
import type { VNode, ComponentInternalInstance, Component, ComponentPublicInstance, Ref } from 'vue'
import type { MessageProps } from '../interface'
import type { FightingType } from '../../../_interface'

export interface UseMessageReturn {
  Message: (opts: MessageProps) => ComponentPublicInstance
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

    return { ...defaultOptions, ...opts }
  }

  const Message = (opts: MessageProps): ComponentPublicInstance => {
    return createMessage(mergeOptions(opts))
  }

  return { Message }
}
