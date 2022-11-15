import { isVNode } from 'vue'
import type {
  VNode,
  VNodeNormalizedChildren,
  ComponentInternalInstance,
  Component
} from 'vue';

const isArray = Array.isArray

const isObject = (obj: unknown):boolean => typeof obj === 'object' && obj !== null

/**
 * 将所有子的组件扁平化
 * @param children
 */
export const flattedChildren = (
  children: VNode | VNodeNormalizedChildren
): VNode[] => {
  const vNodes = Array.isArray(children) ? children : [children]
  const result: VNode[] = []

  vNodes.forEach((child) => {
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
 * @param root
 * @param component
 */
export function getChildrenComponent (
  root: ComponentInternalInstance,
  component: string
):VNode[] {
  if (!root.subTree) return []
  const flaChildren = flattedChildren(root.subTree.children)
  return flaChildren.filter(
    (e) => isObject(e.type) && (e.type as Component).name === component
  )
}
