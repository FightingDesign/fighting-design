import { isObject, isArray } from '../../_utils'
import type { Component, VNode } from 'vue'
import type { GetChildrenInterface } from './interface'

/**
 * 寻找所需的子元素列表
 *
 * @param children 孩子节点
 * @param componentName 子元素的名字
 * @returns { VNode[] } 所需要的所有孩子节点列表
 */
export const getChildren: GetChildrenInterface = (
  children: VNode[],
  componentName: string
): VNode[] => {
  let components: VNode[] = []

  // 传入的子节点必须是一个有效数组
  if (isArray(children) && children.length) {
    children.forEach((child: VNode): void => {
      // 获取到每个组件的 name
      const name: string | undefined | boolean =
        isObject(child.type) && (child.type as Component).name

      // 如果是 FOption 则的亲孩子节点
      if (name === componentName) {
        components.push(child)
      }

      /**
       * 否则不是亲孩子就继续判断，孩子的孩子是不是一个有效数组
       *
       * 如果是则继续递归遍历
       *
       */
      if (name !== componentName && child.children && isArray(child.children)) {
        const childChildren: VNode[] = getChildren(
          child.children,
          componentName
        )
        /**
         * 将得到的返回值和 components 合并
         *
         * @see https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/concat
         */
        components = components.concat(childChildren)
      }
    })
  }

  return components
}
