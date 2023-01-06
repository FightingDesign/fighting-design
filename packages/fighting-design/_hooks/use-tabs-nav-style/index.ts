import { nextTick, getCurrentInstance, ref, computed } from 'vue'
import { sizeToNum } from '../../_utils'
import type { TabsNavProps } from '../../tabs/src/components'
import type { TabsNavInstance } from '../../tabs'
import type { ComponentInternalInstance, CSSProperties } from 'vue'
import type { UseTabsNaStyleReturn } from './interface'

export * from './interface.d'

/**
 * tabs-nav 封装方法
 * 
 * @param prop props 参数
 */
export const useTabsNaStyle = (prop: TabsNavProps): UseTabsNaStyleReturn => {

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

  /** 仅针对 line 模式下的，活动线条的样式 */
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
      '.f-tabs-nav__item:not(.f-tabs-nav__item-active)'
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
   * 
   * 设置选中高亮的滑块样式
   */
  const setActiveLineStyle = async (): Promise<void> => {
    /**
     * 等待下一次 DOM 更新刷新
     * 
     * @see nextTick https://cn.vuejs.org/api/general.html#nexttick
     */
    await nextTick()

    /** 如果没有获取到实例或者没有元素节点则直接返回 */
    if (!instance || !instance.subTree.el) return

    const { position } = prop
    /** 选中的样式 */
    const activeStyleList: CSSProperties = {}
    /** 获取到内部所有的节点 */
    const children: HTMLElement[] = instance.subTree.el.querySelectorAll('.f-tabs-nav__item') as HTMLElement[]

    /** 如果没有子元素则返回 */
    if (!children || !children.length) return

    /** 获取到选中的元素 */
    const activeEl: HTMLElement = children[currentIndex.value]

    /**
     * 获取到当前元素的样式
     * 
     * @see Window.getComputedStyle() https://developer.mozilla.org/zh-CN/docs/Web/API/Window/getComputedStyle
     */
    const activeStyle: CSSStyleDeclaration = window && window.getComputedStyle(activeEl)

    /** 向下位置的样式 */
    if (position === 'top' || position === 'bottom') {
      activeStyleList.width = activeEl.clientWidth - sizeToNum(activeStyle.padding) + 'px'
      activeStyleList.bottom = 0
      activeStyleList.transform = `translateX(${activeEl.offsetLeft}px)`
    }
    /** 左右位置的样式 */
    else if (position === 'left' || position === 'right') {
      activeStyleList.height = activeEl.clientHeight - sizeToNum(activeStyle.padding) + 'px'
      activeStyleList.transform = `translateY(${activeEl.offsetTop}px)`

      if (position === 'left') {
        activeStyleList.right = 0
      } else {
        activeStyleList.left = 0
      }
    }

    activeLineStyle.value = activeStyleList
  }

  return {
    setCardStyle,
    setActiveLineStyle,
    wrapperStyle,
    currentIndex,
    activeLineStyle
  }
}
