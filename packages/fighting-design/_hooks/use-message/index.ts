import { render, createVNode } from 'vue'
import { useMassageManage, useRun } from '..'
import { isString } from '../../_utils'
import { FIGHTING_TYPE } from '../../_tokens'
import type { FightingType } from '../../_interface'
import type { ComponentInternalInstance, VNode, Component } from 'vue'
import type {
  MessageInstance,
  MessageFn,
  MessageOptions,
  MessageFnWithType,
  UseMessageReturnInterface
} from './interface'
import type { MessagePlacement } from '../../message'

export * from './interface.d'

export const massageManage = useMassageManage()

/**
 * message 和 notification 公共方法
 * 
 * @param component 组件
 * @returns 组件实例
 */
export const useMessage = (component: Component): UseMessageReturnInterface => {
  let seed = 1

  /**
   * 创建组件实例
   * 
   * @param options 传入的对象参数
   * @returns 
   */
  const instance: MessageFn & Partial<MessageFnWithType> = (options: MessageOptions): MessageInstance => {
    /** 创建容器盒子 */
    const container: HTMLDivElement = document.createElement('div')
    /** 每个 message 的唯一 id */
    const id = `message-${seed}`

    /** 如果是字符串参数，那么直接将 message 赋值即可 */
    if (isString(options)) {
      options = { message: options }
    }

    const props: MessageOptions = {
      id,
      ...{ placement: component.name === 'FMessage' ? 'top' : 'top-right' },
      ...options,
      /** 关闭动画结束时，移除 dom */
      onDestroy: (): void => {
        useRun(props.onClose)
        render(null, container)
      }
    } as const

    /**
     * 创建一个 vNode
     * 
     * @see createVNode 
     */
    const VNode: VNode = createVNode(component, props)

    render(VNode, container)

    document.body.appendChild(container.firstElementChild as HTMLElement)

    const vm = VNode.component as ComponentInternalInstance

    seed++

    const instance: MessageInstance = massageManage.createInstance(
      {
        id,
        vm,
        close: (): void => {
          ((vm as ComponentInternalInstance).exposed as MessageInstance).close()
        },
        bottom: 0,
        visible: 0
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

  return { instance } as {
    instance: MessageFn & MessageFnWithType
  }
}
