import { createApp } from 'vue'
import loadingVue from '../../loading/src/loading.vue'
import type { Directive, ComponentPublicInstance, DirectiveBinding, App } from 'vue'
import type { LoadingProps } from '../../loading'

/**
 * FLoading 元素节点类型接口
 *
 * @param { Object } vm
 * @param { Object | null } loadingInstance
 * @param { string } originalPosition
 * @param { Object } style
 */
export interface LoadingElInterface extends HTMLElement {
  vm: ComponentPublicInstance
  loadingInstance: App | null
  originalPosition: string
  style: CSSStyleDeclaration
}

export const useLoading = (): Directive => {
  const optionsOrganizer = (
    el: LoadingElInterface,
    binding: DirectiveBinding
  ): LoadingProps => {
    /**
     * 获取 props 中的值
     *
     * @param { string } propKey props 的键
     */
    const getBindingProp = <K extends keyof LoadingProps>(
      propKey: K
    ): LoadingProps[K] => {
      return binding.value[propKey]
    }

    /**
     * 获取 props
     *
     * @param { string } propKey props 的键
     * @returns { string } props 或 attribute
     */
    const getProp = <K extends keyof LoadingProps>(
      propKey: K
    ): LoadingProps[K] | string => {
      return getBindingProp(propKey) || el.getAttribute(`f-loading-${propKey}`) || ''
    }

    return {
      visible: !!binding.value,
      fullscreen: binding.modifiers.fullscreen,
      text: getProp('text'),
      color: getProp('color'),
      background: getProp('background')
    } as LoadingProps
  }

  /**
   * 渲染元素节点
   *
   * @param { Object } el 元素节点
   * @param { Object } binding 一个对象，包含一些配置参数
   */
  const renderLoadingDom = (el: LoadingElInterface, binding: DirectiveBinding): void => {
    /**
     * 判断是否有绝对定位或者固定定位
     *
     * 首先要给容器设置相对定位
     */
    if (el.originalPosition !== 'absolute' && el.originalPosition !== 'fixed') {
      el.style.position = 'relative'
    }
    const options = optionsOrganizer(el, binding)
    const loadingInstance = createApp(loadingVue, options)
    const _vm = loadingInstance.mount(
      document.createElement('div')
    ) as ComponentPublicInstance

    el.vm = _vm
    el.loadingInstance = loadingInstance
    el.appendChild(_vm.$el)
  }

  /**
   * 移除 loading 节点
   *
   * @param { Object } el 元素节点
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
   * @see 自定义指令 https://cn.vuejs.org/guide/reusability/custom-directives.html#directive-hooks
   */
  const vLoading: Directive = {
    /**
     * 在绑定元素的父组件
     *
     * 及他自己的所有子节点都挂载完成后调用
     *
     * @param { Object } el 指令绑定到的元素。这可以用于直接操作 DOM
     * @param { Object } binding 一个对象，包含一些配置参数
     */
    mounted: (el: LoadingElInterface, binding: DirectiveBinding): void => {
      /** 获取到当前元素的定位样式 */
      const originalPosition: string = getComputedStyle(el)['position'] || 'static'

      el.originalPosition = originalPosition
      binding.value && renderLoadingDom(el, binding)
    },
    /**
     * 在绑定元素的父组件
     *
     * 及他自己的所有子节点都更新后调用
     *
     * @param { Object } el 指令绑定到的元素。这可以用于直接操作 DOM
     * @param { Object } binding 一个对象，包含一些配置参数
     */
    updated: (el: LoadingElInterface, binding: DirectiveBinding): void => {
      if (binding.value !== binding.oldValue) {
        if (!binding.value) {
          removeLoadingDom(el)
        } else {
          renderLoadingDom(el, binding)
        }
      }
    }
  } as const

  return vLoading
}
