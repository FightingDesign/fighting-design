<script lang="ts" setup name="FBackTop">
  import { Emits, Props } from './back-top'
  import { onMounted, ref } from 'vue'
  import { debounce } from '@fighting-design/fighting-utils'
  import type { Ref } from 'vue'
  import type { handleScrollInterface, handleClickInterface } from './interface'

  const prop = defineProps(Props)
  const emit = defineEmits(Emits)

  const visible: Ref<boolean> = ref<boolean>(false)

  const handleScroll: handleScrollInterface = (
    node: HTMLElement | null
  ): Function => {
    return debounce((): void => {
      const scrollTop: number = (
        (node as HTMLElement) || document.documentElement
      ).scrollTop

      visible.value = scrollTop > prop.visibleHeight
    }, 200)
  }

  const handleClick: handleClickInterface = (evt: MouseEvent): void => {
    const { top, behavior, listenEl } = prop
    const listerNode: HTMLElement | null = document.querySelector(listenEl)

    ;(listerNode || window).scrollTo({
      top,
      behavior
    })
    emit('click', evt)
  }

  onMounted((): void => {
    const listerNode: HTMLElement | null = document.querySelector(prop.listenEl)

    ;(listerNode || document).addEventListener(
      'scroll',
      handleScroll(listerNode)
    )
  })
</script>

<template>
  <transition
    v-show="visible"
    :class="['f-back-top', { 'f-back-top-round': round }]"
  >
    <div
      :style="{ right, bottom, zIndex, background, color }"
      @click.stop="handleClick"
    >
      <slot />
    </div>
  </transition>
</template>
