<script lang="ts" setup name="scrollview">
  import { ref, defineProps, defineEmits } from 'vue'
  import { typeProps } from './props'

  const scrollview = ref<null | HTMLDivElement>(null)
  const props = defineProps(typeProps)
  const emit = defineEmits<{
    (e: 'scroll-view', num: number): void
  }>()

  const scroll = (): void => {
    const view = scrollview.value as HTMLDivElement
    const viewScrollingDistance = view.scrollTop + view.clientHeight + props.scrollDistance
    if (viewScrollingDistance >= view.scrollHeight) {
      emit('scroll-view', viewScrollingDistance)
    }
  }
</script>
<template>
  <div ref="scrollview" class="f-infinite-scrolling" :style="props.styles" @scroll="scroll">
    <slot></slot>
    <div v-if="isLoading" class="f-infinite-scrolling-loading">加载中...</div>
  </div>
</template>
