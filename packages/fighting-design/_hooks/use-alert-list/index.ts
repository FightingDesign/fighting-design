import type { UseAlertListReturn } from './interface'

export * from './interface.d'

export const useAlertList = (node: HTMLElement): UseAlertListReturn => {

  /**
   * 克隆第一项元素，添加到末尾
   * 
   * 为滚动做准备
   * 
   * @see children https://developer.mozilla.org/zh-CN/docs/Web/API/Element/children
   * @see cloneNode https://developer.mozilla.org/zh-CN/docs/Web/API/Node/cloneNode
   * @see appendChild https://developer.mozilla.org/zh-CN/docs/Web/API/Node/appendChild
   */
  const firstClone = (): void => {
    /**
     * 获取到第一个元素
     */
    const firstChild: HTMLElement = node.children[0] as HTMLElement
    /**
     * 克隆一个新的元素
     */
    const newChild: HTMLElement = firstChild.cloneNode(true) as HTMLElement
    node.appendChild(newChild)
  }

  firstClone()

  /**
   * 滚动距离
   */
  const top = 24
  /**
   * 滚动到第几个
   */
  let scrollIndex = 0
  /**
   * 子节点的数量
   */
  const nodeChildrenLength = node.children.length

  /**
   * 滚动元素
   */
  const moveNext = (): void => {
    scrollIndex++

    // 判断如果到了最后一个元素
    if (scrollIndex === nodeChildrenLength - 1) {
      // 等到滚动动画结束再返回，避免动画丢失
      setTimeout((): void => {
        scrollIndex = 0
        node.scrollTo({ top: 0, behavior: 'auto' })
        return
      }, 300)
    }

    node.scrollTo({ top: scrollIndex * top, behavior: 'smooth' })
  }

  /**
   * 开始触发滚动
   * 
   * @param duration 滚动间隔时间
   */
  const startMove = (duration = 2000): void => {
    setInterval(moveNext, duration)
  }

  return { startMove }
}
