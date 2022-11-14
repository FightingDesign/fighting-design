import { createApp } from 'vue'
import Loading from './loading.vue'
import type { Directive, ComponentPublicInstance, App, DirectiveBinding } from 'vue'
import type { LoadingPropsType } from './props'
import type { LoadingBackgroundMode } from './interface'

/**
 * FLoading 元素节点类型接口
 */
export interface FLoadingElInterface extends HTMLElement {
  vm: ComponentPublicInstance
  loadingInstance: App | null
  originalPosition: string
  style: CSSStyleDeclaration
}

const optionsOrganizer = (el: FLoadingElInterface, binding: DirectiveBinding): LoadingPropsType => {

  const getBindingProp = <K extends keyof LoadingPropsType>(
    propKey: K
  ): LoadingPropsType[K] => {
    return binding.value[propKey]
  }
  const getProp = <K extends keyof LoadingPropsType>(
    propKey: K
  ): LoadingPropsType[K] | string => {
    return getBindingProp(propKey) || el.getAttribute(`f-loading-${propKey}`) || ''
  }

  const options: LoadingPropsType = {
    visible: !!binding.value,
    text: getProp('text'),
    fontColor: getProp('fontColor'),
    fullscreen: binding.modifiers.fullscreen,
    background: getProp('background'),
    mode: getProp('mode') as LoadingBackgroundMode
  } as unknown as LoadingPropsType

  console.log(options, 'opts')
  return options
}

const insertLoadingDom = (el: FLoadingElInterface, binding: DirectiveBinding): void => {
  /**
   * 判断是否有绝对定位或者固定定位
   * 首先要给容器设置相对定位
   */
  if (el.originalPosition !== 'absolute' && el.originalPosition !== 'fixed') {
    el.style.position = 'relative'
  }
  const options = optionsOrganizer(el, binding)
  const loadingInstance = createApp(Loading, options)
  const _vm = loadingInstance.mount(document.createElement('div')) as ComponentPublicInstance
  el.vm = _vm
  el.loadingInstance = loadingInstance
  el.appendChild(_vm.$el)
}

/**
 * 移除 loading 节点
 * @param el 元素节点
 * @returns { void }
 */
const removeLoading = (el: FLoadingElInterface): void => {
  if (!el.loadingInstance) return
  el.style.position = el.originalPosition
  el?.removeChild(el?.vm?.$el)
  el.loadingInstance.unmount()
  el.loadingInstance = null
}

/**
 * 自定义 loading 指令
 * 
 * https://cn.vuejs.org/guide/reusability/custom-directives.html#directive-hooks
 */
export const vLoading: Directive = {
  /**
   * 在绑定元素的父组件
   * 及他自己的所有子节点都挂载完成后调用
   * @param el 指令绑定到的元素。这可以用于直接操作 DOM
   * @param binding 一个对象，包含一些配置参数
   */
  mounted (el: FLoadingElInterface, binding: DirectiveBinding): void {
    console.log(binding.value, 'mounted')
    // 获取到当前元素的定位样式
    const originalPosition: string = getComputedStyle(el)['position'] || 'static'
    el.originalPosition = originalPosition
    if (binding.value) {
      console.log('开始加载')
      insertLoadingDom(el, binding) // 这个好像没执行
    }
  },
  /**
   * 在绑定元素的父组件
   * 及他自己的所有子节点都更新后调用
   * @param el 指令绑定到的元素。这可以用于直接操作 DOM
   * @param binding 一个对象，包含一些配置参数
   */
  updated (el: FLoadingElInterface, binding: DirectiveBinding): void {
    console.log(binding.value, 'updated')
    if (binding.value !== binding.oldValue) {
      if (!binding.value) {
        removeLoading(el)
      } else {
        insertLoadingDom(el, binding)
      }
    }
  }
} as const
