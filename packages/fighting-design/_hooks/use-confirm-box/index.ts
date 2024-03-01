import { reactive, render, h } from 'vue'
import type { Component, ComponentInternalInstance } from 'vue'
import type { ConfirmBoxProps } from '../../confirm-box'

/**
 * useConfirmBox 返回值类型接口
 *
 * @param { Function } confirmBox 确认框方法
 */
export interface UseConfirmBoxReturn {
  confirmBox: (options: Partial<ConfirmBoxProps>) => ComponentInternalInstance
}

/**
 * 确认框组件方法
 *
 * @author Tyh2001 <https://github.com/Tyh2001>
 * @param { Object } component 组件实例
 */
export const useConfirmBox = (component: Component): UseConfirmBoxReturn => {
  /**
   * 创建组件
   *
   * @param { Object } options 配置参数
   */
  const create = (options: Partial<ConfirmBoxProps>): ComponentInternalInstance => {
    const vNode = h(component, options)

    const container: HTMLDivElement = document.createElement('div')

    render(vNode, container)

    return vNode.component as ComponentInternalInstance
  }

  /**
   * 暴露出去的方法
   *
   * @param { Object } options 配置对象
  
   */
  const confirmBox = (options: Partial<ConfirmBoxProps>): ComponentInternalInstance => {
    return create(reactive({ ...options, show: true }))
  }

  return { confirmBox }
}
