import { h, reactive, render } from 'vue'
import { isArray } from '../../../_utils'
import type { VNode, Component, ComponentInternalInstance } from 'vue'
import type { MessagePlacement, MessageProps } from '../interface'

export type Instances = Partial<{
  [key in MessagePlacement]: ComponentInternalInstance[]
}>

export interface UseMessageReturn {
  remove: (placement: MessagePlacement, uid: number) => void
  renderInstance: (params: MessageProps) => void
}

const instances: Instances = reactive({})

export const useMessage = (component: Component): UseMessageReturn => {

  const getInstanceIndex = (placement: MessagePlacement, uid: number): number => {
    /** 如果组件实例对象中没有找到方位信息数组，则返回 -1 */
    if (!instances[placement] || !isArray(instances[placement])) return -1

    /**
     * 找到满足条件的第一个元素的索引
     *
     * @see Array.prototype.findIndex() https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex
     */
    return (instances[placement] as ComponentInternalInstance[]).findIndex((item: ComponentInternalInstance): boolean => {
      return item.uid === uid
    }
    )
  }

  const remove = (placement: MessagePlacement, uid: number): void => {
    /** 获取到当前元素的索引 */
    const index: number = getInstanceIndex(placement, uid)

    if (instances[placement]) {
      (instances[placement] as ComponentInternalInstance[]).splice(index, 1)
    }

    console.log(instances)
  }

  /**
   * 创建实例
   *
   * @param { Object } instance 组件实例
   * @param { string } placement 弹出位置
   * @returns { Object } 组件实例
   */
  const createInstance = (instance: ComponentInternalInstance, placement: MessagePlacement): ComponentInternalInstance => {
    if (instances[placement]) {
      (instances[placement] as ComponentInternalInstance[]).push(instance)
    } else {
      instances[placement] = [instance]
    }

    return instance
  }

  /**
   * 渲染实例
   * 
   * @param params 
   */
  const renderInstance = (params: MessageProps): void => {
    /** 创建容器盒子 */
    const container: HTMLDivElement = document.createElement('div')

    /**
     * 创建虚拟 DOM 节点
     *
     * @see h https://cn.vuejs.org/api/render-function.html#h
     */
    const vNode: VNode = h(component, params)

    render(vNode, container)

    /** 将组件添加到 body 上 */
    document.body.appendChild(container.firstElementChild as HTMLElement)

    /** 获取组件内部实例 */
    const vm: ComponentInternalInstance | null = vNode.component

    const placement: MessagePlacement = (component as Component).name === 'FMessage' ? 'top' : 'top-right'

    if (vm) {
      createInstance(vm, placement)
    }
  }

  return { renderInstance, remove }
}
