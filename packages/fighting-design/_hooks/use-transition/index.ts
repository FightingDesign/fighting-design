import { useRun } from '..'
import type { DialogCallback } from '../../dialog'

const { run } = useRun()

/**
 * useTransition Prop 参数接口
 *
 * @param { Function } onOpen 打开动画开始的回调
 * @param { Function } onOpenEnd 打开动画结束的回调
 * @param { Function } onClose 关闭动画开始的回调
 * @param { Function } onCloseEnd 关闭动画结束的回调
 */
interface IseTransitionProp {
  onOpen: DialogCallback
  onOpenEnd: DialogCallback
  onClose: DialogCallback
  onCloseEnd: DialogCallback
}

/**
 * useTransition 返回值类型接口
 *
 * @param { Function } handleOpen 打开动画开始的回调
 * @param { Function } handleOpenEnd 打开动画结束的回调
 * @param { Function } handleClose 关闭动画开始的回调
 * @param { Function } handleCloseEnd 关闭动画结束的回调
 */
interface IseTransitionReturn {
  handleOpen: (node: Element) => void
  handleOpenEnd: (node: Element) => void
  handleClose: (node: Element) => void
  handleCloseEnd: (node: Element) => void
}

/**
 * transition 回调方法封装
 *
 * @param { Object } prop prop 参数
 * @returns { Object }
 */
export const useTransition = (prop: IseTransitionProp): IseTransitionReturn => {
  /**
   * 打开动画开始执行的回调
   *
   * @param { Object } node 元素节点
   */
  const handleOpen = (node: Element): void => {
    // 开启状态隐藏滚动条
    document.body.style.overflow = 'hidden'
    run(prop.onOpen, node)
  }

  /**
   * 打开动画结束执行的回调
   *
   * @param { Object } node 元素节点
   */
  const handleOpenEnd = (node: Element): void => {
    run(prop.onOpenEnd, node)
  }

  /**
   * 关闭动画开始执行的回调
   *
   * @param { Object } node 元素节点
   */
  const handleClose = (node: Element): void => {
    document.body.style.overflow = ''
    run(prop.onClose, node)
  }

  /**
   * 关闭动画结束执行的回调
   *
   * @param { Object } node 元素节点
   */
  const handleCloseEnd = (node: Element): void => {
    run(prop.onCloseEnd, node)
  }

  return {
    handleOpen,
    handleOpenEnd,
    handleClose,
    handleCloseEnd
  }
}
