<script lang="ts" setup name="FBackTop">
  import { Props } from './props'
  import { onMounted, ref } from 'vue'
  import { debounce } from '../../_utils'
  import { useList } from '../../_hooks'
  import type { Ref, ComputedRef, CSSProperties } from 'vue'
  import type {
    BackTopHandleScrollInterface,
    BackTopPropsType
  } from './interface'
  import type { OrdinaryFunctionInterface } from '../../_interface'

  const prop: BackTopPropsType = defineProps(Props)

  const { styles } = useList(prop, 'back-top')

  /**
   * 展示状态
   */
  const visible: Ref<boolean> = ref<boolean>(false)

  /**
   * 滚动状态监视
   *
   * @param node 元素节点
   */
  const handleScroll: BackTopHandleScrollInterface = (
    node: HTMLElement | null
  ): Function => {
    return debounce((): void => {
      const scrollTop: number = (
        (node as HTMLElement) || document.documentElement
      ).scrollTop

      visible.value = scrollTop > prop.visibleHeight
    }, 200)
  }

  /**
   * 点击的时候触发
   */
  const handleClick: OrdinaryFunctionInterface = (): void => {
    const { top, behavior, listenEl } = prop

    if (listenEl) {
      const listerNode: HTMLElement = document.querySelector(
        listenEl
      ) as HTMLElement

      ;(listerNode as HTMLElement).scrollTo({
        top,
        behavior
      })
      return
    }

    window.scrollTo({
      top,
      behavior
    } as const)
  }

  onMounted((): void => {
    if (prop.listenEl) {
      const listerNode: HTMLElement = document.querySelector(
        prop.listenEl
      ) as HTMLElement
      ;(listerNode as HTMLElement).addEventListener(
        'scroll',
        handleScroll(listerNode)
      )
    }
    document.addEventListener('scroll', handleScroll(null))
  })

  /**
   * 样式列表
   */
  const styleList: ComputedRef<CSSProperties> = styles([
    'right',
    'bottom',
    'zIndex',
    'background',
    'color'
  ])
</script>

<template>
  <transition name="f-back-top">
    <div
      v-show="visible"
      :class="['f-back-top', { 'f-back-top__round': round }]"
      :style="styleList"
      @click.stop="handleClick"
    >
      <slot />
    </div>
  </transition>
</template>
