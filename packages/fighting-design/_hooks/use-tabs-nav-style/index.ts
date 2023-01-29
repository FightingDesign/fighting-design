import { nextTick, getCurrentInstance, ref, computed, onMounted, onUnmounted } from 'vue'
import { sizeToNum } from '../../_utils'
import type { TabsNavProps } from '../../tabs/src/components'
import type { TabsNavInstance } from '../../tabs'
import type { ComponentInternalInstance, CSSProperties } from 'vue'
import type { UseTabsNavStyleReturn } from './interface'

export * from './interface.d'

/**
 * tabs-nav 封装方法
 *
 * @author Tyh2001 <https://github.com/Tyh2001>
 * @param { Object } prop props 参数
 * @return { Object }
 */
export const useTabsNavStyle = (prop: TabsNavProps): UseTabsNavStyleReturn => {
  /** 获取当前组件实例 */
  const instance: ComponentInternalInstance | null = getCurrentInstance()

  /** 仅针对 line 模式下的，活动线条的样式 */
  const activeLineStyle = ref<CSSProperties>({})

  /**
   * 获取到当前选中的子组件
   *
   * @see Array.prototype.findIndex() https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex
   * @see Math.max() https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/max
   */
  const activeIndex = computed((): number =>
    prop.navs
      ? Math.max(
        prop.navs.findIndex((e: TabsNavInstance): boolean => e.name === prop.activeName),
        0
      )
      : 0
  )

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
    const activeEl: HTMLElement = children[activeIndex.value]

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
    } else if (position === 'left' || position === 'right') {
      /** 左右位置的样式 */
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

  /**
   * 观察者
   * 
   * @see IntersectionObserver https://developer.mozilla.org/zh-CN/docs/Web/API/IntersectionObserver
   */
  const observer: IntersectionObserver = new IntersectionObserver(setActiveLineStyle)

  onMounted((): void => {
    if (!instance || !instance.subTree.el) return

    observer.observe(instance.subTree.el as Element)
  })

  onUnmounted((): void => {
    if (!instance || !instance.subTree.el) return

    observer.unobserve(instance.subTree.el as Element)
  })

  return {
    activeIndex,
    activeLineStyle,
    setActiveLineStyle
  }
}
