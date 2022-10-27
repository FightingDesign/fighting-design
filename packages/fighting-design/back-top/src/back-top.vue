<script lang="ts" setup name="FBackTop">
  import { Emits, Props } from './back-top'
  import { onMounted, ref, computed } from 'vue'
  import { debounce, sizeChange } from '../../_utils'
  import type { Ref, ComputedRef, CSSProperties } from 'vue'
  import type { BackTopHandleScrollInterface as a } from './interface'
  import type { HandleEventInterface as b } from '../../_interface'

  const prop = defineProps(Props)
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
    emit('click', evt)
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

  const styleList: ComputedRef<CSSProperties> = computed((): CSSProperties => {
    const { right, bottom, zIndex, background, color } = prop

    return {
      '--f-back-top-right': sizeChange(right),
      '--f-back-top-bottom': sizeChange(bottom),
      '--f-back-top-z-index': zIndex,
      '--f-back-top-background': background,
      '--f-back-top-color': color
    } as const
  })
</script>

<template>
  <div
    v-show="visible"
    :class="['f-back-top', { 'f-back-top__round': round }]"
    :style="styleList"
    @click.stop="handleClick"
  >
    <slot />
  </div>
</template>
