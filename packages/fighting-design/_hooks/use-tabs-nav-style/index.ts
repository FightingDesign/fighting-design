import { nextTick, getCurrentInstance, ref, computed } from 'vue'
import { sizeToNum } from '../../_utils'
import type { TabsNavInstance, TabsProps } from '../../tabs'
import type { ComponentInternalInstance, CSSProperties } from 'vue'
import type { UseTabsNaStyleReturn } from './interface'

export * from './interface.d'

/**
 * tabs-nav 封装方法
 * 
 * @param prop props 参数
 */
export const useTabsNaStyle = (prop: TabsProps): UseTabsNaStyleReturn => {

  /** 获取当前组件实例 */
  const instance: ComponentInternalInstance | null = getCurrentInstance()

  /**
   * 仅针对card模式下的，items的样式
   *
   * 估算最长元素active状态下的高度，设置为固定高度
   *
   * 防止在切换标签时出现跳动的情况
   */
  const wrapperStyle = ref<CSSProperties>({})

  /**仅针对 line 模式下的，活动线条的样式 */
  const activeLineStyle = ref<CSSProperties>({})

  /**
  * 获取到当前选中的子组件
  *
  * @see Array.prototype.findIndex() https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex
  * @see Math.max() https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/max
  */
  const currentIndex = computed((): number =>
    prop.navs
      ? Math.max(
        prop.navs.findIndex((e: TabsNavInstance): boolean => e.name === prop.currentName),
        0
      )
      : 0
  )

  /**
   * 设置样式
   *
   * 针对 type = card 的模式
   */
  const setCardStyle = async (): Promise<void> => {
    await nextTick()
    if (!prop.navs) return

    const positionVar: {
      a: keyof HTMLObjectElement
      b: keyof HTMLObjectElement
      c: keyof CSSStyleDeclaration
    } = { a: 'height', b: 'offsetHeight', c: 'paddingBottom' }

    if (prop.position === 'left' || prop.position === 'right') {
      positionVar.a = 'width'
      positionVar.b = 'offsetWidth'
    } else {
      positionVar.a = 'height'
      positionVar.b = 'offsetHeight'
    }

    switch (prop.position) {
      case 'top':
        positionVar.c = 'paddingBottom'
        break
      case 'bottom':
        positionVar.c = 'paddingTop'
        break
      case 'left':
        positionVar.c = 'paddingRight'
        break
      case 'right':
        positionVar.c = 'paddingLeft'
        break
    }
    /** 当前 nav 的高度 */
    if (!instance || !instance.subTree.el) return

    const wrapperEl: HTMLObjectElement = instance.subTree.el as HTMLObjectElement
    /** 获取除 active 元素外最高的子元素 */
    const children: HTMLObjectElement[] = instance.subTree.el.querySelectorAll(
      '.f-tabs-nav--item:not(.f-tabs-nav--item__active)'
    ) as HTMLObjectElement[]
    const maxChildren: HTMLObjectElement = Array.from(children).reduce(
      (pre: HTMLObjectElement, cur: HTMLObjectElement): HTMLObjectElement => {
        pre = (cur[positionVar.b] as number) > (pre[positionVar.b] as number) ? cur : pre
        return pre
      },
      children[0]
    )
    /** 最高的子元素的 padding */
    const padding: number = sizeToNum(window.getComputedStyle(maxChildren)[positionVar.c] as string)
    /** css 变量 */
    const cardActiveDiffHeight: string = window.getComputedStyle(wrapperEl).getPropertyValue('--cardActiveDiffHeight')
    /** 最高的子元素 active 状态下的高度 */
    const maxChildrenNum: number = sizeToNum(maxChildren[positionVar.b]) - padding + sizeToNum(cardActiveDiffHeight)

    /**
     * 比较标签显示高度 (wrapperEl)、最高元素预估高度，取得最大值
     *
     * 估值高度取得是除 active 外的元素
     *
     * 如果当前 active 的元素本身是最大的话，会体现在 wrapperEl.offset 上
     */
    wrapperStyle.value = {
      [positionVar.a]: Math.max(wrapperEl[positionVar.b], maxChildrenNum) + 'px'
    }
  }

  /**
   * 设置样式
   *
   * 针对 type = line 的模式
   */
  const setActiveLineStyle = async (): Promise<void> => {
    await nextTick()
    if (!instance || !instance.subTree.el) return

    const { position } = prop
    const activeStyle: CSSProperties = {}
    const children: HTMLElement[] = instance.subTree.el.querySelectorAll('.f-tabs-nav--item') as HTMLElement[]

    if (!children.length) return

    const nextItem: HTMLElement = children[currentIndex.value]
    const nextItemStyle: CSSStyleDeclaration = window.getComputedStyle(nextItem)

    if (position === 'top' || position === 'bottom') {
      activeStyle.width =
        nextItem.clientWidth - sizeToNum(nextItemStyle.paddingLeft) - sizeToNum(nextItemStyle.paddingRight) + 'px'
      activeStyle.left = `${nextItem.offsetLeft + sizeToNum(nextItemStyle.paddingLeft)}px`
      activeStyle.bottom = '0px'
    } else {
      activeStyle.height =
        nextItem.clientHeight - sizeToNum(nextItemStyle.paddingTop) - sizeToNum(nextItemStyle.paddingBottom) + 'px'
      activeStyle.top = `${nextItem.offsetTop + sizeToNum(nextItemStyle.paddingTop)}px`
      if (position === 'left') {
        activeStyle.right = '0px'
      } else {
        activeStyle.left = '0px'
      }
    }

    activeLineStyle.value = activeStyle
  }

  return {
    setCardStyle,
    setActiveLineStyle,
    wrapperStyle,
    currentIndex,
    activeLineStyle
  }
}
