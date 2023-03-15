import { isVNode, shallowRef } from 'vue'
import { isArray, isObject } from '..'
import type {
  VNode,
  VNodeNormalizedChildren,
  ComponentInternalInstance,
  Component,
  ShallowRef
} from 'vue'

/**
 * 将所有子的组件扁平化
 *
 * @param { Object } children
 * @returns { Array }
 */
export const flattedChildren = (children: VNode | VNodeNormalizedChildren): VNode[] => {
  const vNodes = isArray(children) ? children : [children]
  const result: VNode[] = []

  vNodes.forEach((child): void => {
    if (isArray(child)) {
      result.push(...flattedChildren(child))
    } else if (isVNode(child) && isArray(child.children)) {
      result.push(...flattedChildren(child.children))
    } else {
      if (isVNode(child) && child.component) {
        result.push(child)
      }
    }
  })
  return result
}

/**
 * 筛选出根组件下所有名称符合的组件
 *
 * @param { Object } root 组件实例
 * @param { string } component 组件名
 * @returns { Array }
 */
export const getChildrenComponent = (
  root: ComponentInternalInstance,
  component: string
): VNode[] => {
  if (!root.subTree) return []
  const flaChildren = flattedChildren(root.subTree.children)
  return flaChildren.filter(
    e => isObject(e.type) && (e.type as Component).name === component
  )
}

/**
 * @param { Object } children 已注册的子组件列表
 * @param { Function } registerChild 注册子组件
 * @param { Function } unRegisterChild 卸载子组件
 */
export interface UseChildrenReturn<T> {
  children: ShallowRef<T[]>
  registerChild: (child: T) => void
  unRegisterChild: (child: T) => void
}

/**
 * 维护子组件
 *
 * @param { Object } root 实例对象
 * @param { string } component 组件名
 * @returns { Object }
 */
export const useChildren = <T extends { uid: number }>(
  root: ComponentInternalInstance,
  component: string
): UseChildrenReturn<T> => {
  const childrenMap = new Map<number, T>()

  const children = shallowRef<T[]>([])

  const registerChild = (child: T): void => {
    childrenMap.set(child.uid, child)
    const componentList = getChildrenComponent(root, component)

    const componentUid: number[] = componentList
      .map(e => {
        return e.component ? e.component.uid : null
      })
      .filter(Boolean) as number[]

    children.value = componentUid
      .map((e: number) => childrenMap.get(e))
      .filter(Boolean) as T[]
  }

  const unRegisterChild = (child: T): void => {
    childrenMap.delete(child.uid)

    children.value = children.value.filter(item => item.uid !== child.uid)
  }

  return {
    children,
    registerChild,
    unRegisterChild
  }
}
