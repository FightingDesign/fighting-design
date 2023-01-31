<script lang="ts" setup name="FBackTop">
  import { Props } from './props'
  import { onMounted, ref, toRefs } from 'vue'
  import { debounce } from '../../_utils'
  import { useList } from '../../_hooks'
  import type { DebounceReturn } from '../../_utils'

  const prop = defineProps(Props)

  const { styles, classes } = useList(prop, 'back-top')

  /** 展示状态 */
  const visible = ref<boolean>(false)

  /**
   * 滚动状态监视
   *
   * @param { Object } [node] 元素节点
   */
  const handleScroll = (node?: HTMLElement): DebounceReturn => {
    return debounce((): void => {
      /** 当前滚动的距离 */
      const scrollTop: number = (node || document.documentElement).scrollTop

      visible.value = scrollTop > prop.visibleHeight
    }, 200)
  }

  /** 点击的时候触发 */
  const handleClick = (): void => {
    const { top, behavior, listenEl } = toRefs(prop)

    /** 如果存在监听的目录 */
    if (listenEl.value) {
      /** 获取到监听的元素节点 */
      const listerNode: HTMLElement | null = document.querySelector(listenEl.value) as HTMLElement

      listerNode && listerNode.scrollTo({ top: top.value, behavior: behavior.value })
      return
    }

    window && window.scrollTo({ top: top.value, behavior: behavior.value })
  }

  onMounted((): void => {
    if (prop.listenEl) {
      /** 获取到监视的节点 */
      const listerNode = document.querySelector(prop.listenEl) as HTMLElement

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
