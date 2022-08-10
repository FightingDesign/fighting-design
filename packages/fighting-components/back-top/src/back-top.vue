<script lang="ts" setup name="FBackTop">
  import { Emits, Props } from './back-top'
  import { onMounted, ref } from 'vue'
  import { debounce } from '../../_utils'
  import type { Ref } from 'vue'
  import type {
    handleScrollInterface as a,
    handleClickInterface as b
  } from './interface'
  import type { FPropsType } from './back-top'

  const prop: FPropsType = defineProps(Props)
  const emit = defineEmits(Emits)

  const visible: Ref<boolean> = ref<boolean>(false)

  const handleScroll: a = (node: HTMLElement | null): Function => {
    return debounce((): void => {
      const scrollTop: number = (
        (node as HTMLElement) || document.documentElement
      ).scrollTop

      visible.value = scrollTop > prop.visibleHeight
    }, 200)
  }

  const handleClick: b = (evt: MouseEvent): void => {
    const { top, behavior, listenEl } = prop

    if (listenEl) {
      const listerNode: HTMLElement | null = document.querySelector(listenEl)
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
    emit('click', evt)
  }

  onMounted((): void => {
    if (prop.listenEl) {
      const listerNode: HTMLElement | null = document.querySelector(
        prop.listenEl
      )
      ;(listerNode as HTMLElement).addEventListener(
        'scroll',
        handleScroll(listerNode)
      )
    }
    document.addEventListener('scroll', handleScroll(null))
  })
</script>

<template>
  <div
    v-show="visible"
    :class="['f-back-top', { 'f-back-top-round': round }]"
    :style="{ right, bottom, zIndex }"
  >
    <div
      class="f-back-top-item"
      :style="{ background, color }"
      @click.stop="handleClick"
    >
      <slot />
    </div>
  </div>
</template>
