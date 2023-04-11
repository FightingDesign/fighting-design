import messageComponent from './Message.vue'
// import { PopupManager } from '../../../utils/popup'
import { isVNode } from 'vue'
import { h, render } from 'vue'

const MOUNT_COMPONENT_REF = 'el_component'
const COMPONENT_CONTAINER_SYMBOL = Symbol('el_component_container')

/**
 * 创建组件实例对象
 * 返回的实例和调用 getCurrentComponent() 返回的一致
 * @param {*} Component
 */
export function createComponent (Component, props) {
  const vnode = h(Component, { ...props, ref: MOUNT_COMPONENT_REF }, children)
  const container = document.createElement('div')
  // vnode[COMPONENT_CONTAINER_SYMBOL] = container
  render(vnode, container)
  return vnode.component
}

const instanceList = []

export function Message (opts) {
  return createMessage(mergeOptions(opts))
}

function createMessage (opts) {
  console.log(opts)
  // const instance = createMessageComponentByOpts(opts)
  const vnode = h(messageComponent, opts)
  const container = document.createElement('div')
  render(vnode, container)
  const instance = vnode.component
  // appendToBody(instance)
  console.log(instance.vnode.el)
  document.body.append(instance.vnode.el)
  addInstance(instance)
  return instance.proxy
}

function mergeOptions (opts, type = 'info') {
  const defaultOptions = {
    duration: 4500,
    type,
    offset: calculateVerticalOffset(opts.offset)
  }

  console.log(defaultOptions)

  return { ...defaultOptions, ...opts }
}

function calculateVerticalOffset (offset = 20) {
  let result = offset

  // console.log(instanceList?.length)

  instanceList.forEach((instance) => {
    console.log(instance.vnode.el.offsetHeight)
    result += getNextElementInterval(instance)
  })

  return result
}

function getNextElementInterval (instance) {
  const INTERVAL_HEIGHT = 16
  console.log('组件的高度是', instance.vnode.el.offsetHeight)
  return instance.vnode.el.offsetHeight + INTERVAL_HEIGHT
}

function addInstance (instance) {
  instanceList.push(instance)
}
