/**
 * useAlertList 返回值类型接口
 *
 * @param { Function } startMove 开始触发滚动
 */
export type UseAlertListReturn = (duration?: number) => void

/**
 * 处理 alert 组件滚动列表方法
 *
 * @author Tyh2001 <https://github.com/Tyh2001>
 * @param { Object } node 滚动节点
 * @returns { Object }
 */
export const useAlertList = (node: HTMLElement): UseAlertListReturn => {
  /**
   * 克隆第一项元素，添加到末尾
   *
   * 为滚动做准备
   *
   * @see Element.children https://developer.mozilla.org/zh-CN/docs/Web/API/Element/children
   * @see Node.cloneNode https://developer.mozilla.org/zh-CN/docs/Web/API/Node/cloneNode
   * @see Node.appendChild https://developer.mozilla.org/zh-CN/docs/Web/API/Node/appendChild
   */
  const firstClone = (): void => {
    /** 获取到第一个元素 */
    const firstChild: HTMLElement = node.children[0] as HTMLElement

    /** 克隆一个新的元素 */
    const newChild: HTMLElement = firstChild.cloneNode(true) as HTMLElement
    node.appendChild(newChild)
  }

  firstClone()

  /** 滚动距离 */
  const itemHeight = 24

  /** 滚动到第几个 */
  let scrollIndex = 0

  /** 子节点的数量 */
  const nodeChildrenLength = node.children.length

  /** 滚动元素 */
  const moveNext = (): void => {
    /** 开始的滚动高度 */
    let from: number = scrollIndex * itemHeight

    scrollIndex++

    /** 目标滚动高度 */
    const to: number = scrollIndex * itemHeight

    /**
     * 总时间
     *
     * 期望在指定时间内完成动画
     */
    const totalDuration = 500

    /** 间隔时间 */
    const interval = 15

    /** 变化的次数 */
    const times: number = totalDuration / interval

    /** 每次变化多少 */
    const dis: number = (to - from) / times

    /**
     * 计时器
     *
     * 控制动画执行
     */
    const timer: NodeJS.Timer = setInterval((): void => {
      from += dis

      if (from >= to) {
        clearInterval(timer)

        // 代表到达最后一项了
        if (scrollIndex === nodeChildrenLength - 1) {
          node.scrollTop = 0
          scrollIndex = 0
          return
        }
      }

      /**
       * 设置元素滚动
       *
       * @see scrollTop https://developer.mozilla.org/zh-CN/docs/Web/API/Element/scrollTop
       */
      node.scrollTop = from
    }, interval)
  }

  /**
   * 开始触发滚动
   *
   * @param { number } [duration] 滚动间隔时间
   */
  const startMove = (duration = 2000): void => {
    setInterval(moveNext, duration)
  }

  return startMove
}
