import { createApp } from 'vue'
import Loading from './loading.vue'
import type { Directive, ComponentPublicInstance, App, DirectiveBinding } from 'vue'
import type { LoadingPropsType } from './props'
import type { LoadingBackgroundMode } from './interface'

export interface FLoadingEl extends HTMLElement {
  vm: ComponentPublicInstance
  loadingInstance: App | null
  originalPosition: string
  style: CSSStyleDeclaration
}

const optionsOrganizer = (
  el: FLoadingEl,
  binding: DirectiveBinding
): LoadingPropsType => {
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

  // const getIcon = async (binding) => {
  //   const f = import('@fighting-design/fighting-icon')
  //   const res = await f
  //   const k = binding.value.icon
  //   return res[k]
  // }
  const options: LoadingPropsType = {
    visible: !!binding.value,
    text: getProp('text'),
    fontColor: getProp('fontColor'),
    fullscreen: binding.modifiers.fullscreen,
    background: getProp('background'),
    mode: getProp('mode') as LoadingBackgroundMode
    // icon: null
    // icon: getIcon(binding)
    // icon: require()
    // icon: getProp('icon')
  }
  console.log(options, 'opts')
  return options
}

const insertLoadingDom = (
  el: FLoadingEl,
  binding: DirectiveBinding
): void => {
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

const destoryLoading = (el: FLoadingEl): void => {
  if (!el.loadingInstance) return
  el.style.position = el.originalPosition
  el?.removeChild(el?.vm?.$el)
  el.loadingInstance.unmount()
  el.loadingInstance = null
}

export const vLoading: Directive = {
  mounted (el, binding) {
    console.log(binding.value, 'mounted')
    const originalPosition = getComputedStyle(el)['position'] || 'static'
    el.originalPosition = originalPosition
    if (binding.value) {
      insertLoadingDom(el, binding)
    }
  },
  updated (el, binding) {
    console.log(binding.value, 'updated')
    if (binding.value !== binding.oldValue) {
      if (!binding.value) {
        destoryLoading(el)
      } else {
        insertLoadingDom(el, binding)
      }
    }
  }
}
