import { createApp } from 'vue'
import Loading from './loading.vue'
import type { Directive, ComponentPublicInstance, DirectiveBinding } from 'vue'
import type { LoadingElInterface, LoadingPropsType } from './interface'

const optionsOrganizer = (
  el: LoadingElInterface,
  binding: DirectiveBinding
): LoadingPropsType => {
  /**
   * 获取 props 中的值
   * @param propKey props 的键
   * @returns { LoadingPropsType[K] }
   */
  const getBindingProp = <K extends keyof LoadingPropsType>(
    propKey: K
  ): LoadingPropsType[K] => {
    return binding.value[propKey]
  }

  /**
   * 获取 props
   * @param propKey props 的键
   * @returns { LoadingPropsType[K] | string } props 或 attribute
   */
  const getProp = <K extends keyof LoadingPropsType>(
    propKey: K
  ): LoadingPropsType[K] | string => {
    return (
      getBindingProp(propKey) || el.getAttribute(`f-loading-${propKey}`) || ''
    )
  }

  return {
    visible: !!binding.value,
    text: getProp('text'),
    fontColor: getProp('fontColor'),
    fullscreen: binding.modifiers.fullscreen,
    background: getProp('background')
  } as LoadingPropsType
}

/**
 * 渲染元素节点
 * @param el 元素节点
 * @param binding 一个对象，包含一些配置参数
 * @return { void }
 */
const renderLoadingDom = (
  el: LoadingElInterface,
  binding: DirectiveBinding
): void => {
  /**
   * 判断是否有绝对定位或者固定定位
   * 首先要给容器设置相对定位
   */
  if (el.originalPosition !== 'absolute' && el.originalPosition !== 'fixed') {
    el.style.position = 'relative'
  }
  const options = optionsOrganizer(el, binding)
  const loadingInstance = createApp(Loading, options)
  const _vm = loadingInstance.mount(
    document.createElement('div')
  ) as ComponentPublicInstance
  el.vm = _vm
  el.loadingInstance = loadingInstance
  el.appendChild(_vm.$el)
}

/**
 * 移除 loading 节点
 * @param el 元素节点
 * @returns { void }
 */
const removeLoadingDom = (el: LoadingElInterface): void => {
  if (!el.loadingInstance) return
  el.style.position = el.originalPosition
  el.removeChild(el.vm.$el)
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
  mounted (el: LoadingElInterface, binding: DirectiveBinding): void {
    // 获取到当前元素的定位样式
    const originalPosition: string =
      getComputedStyle(el)['position'] || 'static'
    el.originalPosition = originalPosition
    if (binding.value) {
      renderLoadingDom(el, binding) // 这个好像没执行
    }
  },
  /**
   * 在绑定元素的父组件
   * 及他自己的所有子节点都更新后调用
   * @param el 指令绑定到的元素。这可以用于直接操作 DOM
   * @param binding 一个对象，包含一些配置参数
   */
  updated (el: LoadingElInterface, binding: DirectiveBinding): void {
    if (binding.value !== binding.oldValue) {
      if (!binding.value) {
        removeLoadingDom(el)
      } else {
        renderLoadingDom(el, binding)
      }
    }
  }
} as const
