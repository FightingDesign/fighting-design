import { reactive, toRefs, render, h } from 'vue'
import type { Component, ComponentInternalInstance } from 'vue'
import type { ConfirmBoxProps } from '../../confirm-box'

export const useConfirmBox = (component: Component) => {

  const create = (options: Partial<ConfirmBoxProps>): ComponentInternalInstance => {
    const vNode = h(component, options)

    const container: HTMLDivElement = document.createElement('div')

    render(vNode, container)

    return vNode.component as ComponentInternalInstance
  }

  const confirmBox = (options: Partial<ConfirmBoxProps>): ComponentInternalInstance => {
    return create(reactive({ ...options, show: true }))
  }

  return { confirmBox }
}
