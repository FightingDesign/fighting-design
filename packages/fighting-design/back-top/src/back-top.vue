<script lang="ts" setup name="FBackTop">
  import { Props } from './props'
  import { onMounted, ref, toRefs } from 'vue'
  import { debounce, isNumber, isString, error } from '../../_utils'
  import { useList } from '../../_hooks'

  const prop = defineProps(Props)

  const { styles, classes } = useList(prop, 'back-top')

  /** 展示状态 */
  const visible = ref<boolean>(false)

  /**
   * 滚动状态监视
   *
   * 传入元素节点代码是需要监听节点
   *
   * 否则监听 document
   *
   * @param { Object } [node] 元素节点
   * @returns { Function } 防抖函数
   */
  const handleScroll = (node?: HTMLElement): (() => void) => {
    return debounce((): void => {
      /**
       * 当前滚动的距离
       *
       * @see document.documentElement https://developer.mozilla.org/zh-CN/docs/Web/API/Document/documentElement
       *
       * @see Element.scrollTop https://developer.mozilla.org/zh-CN/docs/Web/API/Element/scrollTop
       */
      const scrollTop: number = (node || document.documentElement).scrollTop

      /**
       * 滚动超出多少距离展示
       *
       * 避免传入以为参数，需要判断传入的是否为 number 类型
       */
      const visibleHeight: number = isNumber(prop.visibleHeight)
        ? prop.visibleHeight
        : 200

      visible.value = scrollTop > visibleHeight
    }, 200)
  }

  /** 点击的时候触发 */
  const handleClick = (): void => {
    const { top, behavior, listenEl } = toRefs(prop)

    /** 如果存在监听的目录 */
    if (listenEl.value) {
      /** 获取到监听的元素节点 */
      const listerNode: HTMLElement | null = document.querySelector(listenEl.value)

      listerNode && listerNode.scrollTo({ top: top.value, behavior: behavior.value })
      return
    }

    /**
     * @see Window.scrollTo() https://developer.mozilla.org/zh-CN/docs/Web/API/Window/scrollTo
     */
    window && window.scrollTo({ top: top.value, behavior: behavior.value })
  }

  onMounted((): void => {
    if (prop.listenEl) {
      /** 如果传入的不是字符串，则监听 document */
      if (!isString(prop.listenEl)) {
        if (__DEV__) {
          error('f-back-top', '`listen-el` attributes is not a string')
        }

        document.addEventListener('scroll', handleScroll())
        return
      }

      /** 获取到监视的节点 */
      const listerNode: HTMLElement | null = document.querySelector(prop.listenEl)

      /**
       * 如果需要监视的节点存在才触发监听
       *
       * 并将节点传进去
       */
      listerNode && listerNode.addEventListener('scroll', handleScroll(listerNode))
    } else {
      document.addEventListener('scroll', handleScroll())
    }
  })

  /** 样式列表 */
  const styleList = styles(['right', 'bottom', 'background', 'color', 'zIndex'], 'zIndex')

  /** 类名列表 */
  const classList = classes(['round'], 'f-back-top')
</script>

<template>
  <transition name="f-back-top">
    <div v-show="visible" :class="classList" :style="styleList" @click.stop="handleClick">
      <slot />
    </div>
  </transition>
</template>
