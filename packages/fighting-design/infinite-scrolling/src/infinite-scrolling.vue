<script lang="ts" setup name="FInfiniteScrolling">
  import { Props } from './props'
  import { ref } from 'vue'

  const prop = defineProps(Props)
  const emit = defineEmits<{
    (e: 'scroll-view', num: number): void
  }>()

  /**
   * 元素节点
   */
  const scrollView = ref<HTMLDivElement>(null as unknown as HTMLDivElement)

  /**
   * 滚动触发
   */
  const scroll = (): void => {
    const view: HTMLDivElement = scrollView.value
    const viewScrollingDistance: number = view.scrollTop + view.clientHeight + prop.scrollDistance

    if (viewScrollingDistance >= view.scrollHeight) {
      emit('scroll-view', viewScrollingDistance)
    }
  }
</script>
<template>
  <div ref="scrollView" class="f-infinite-scrolling" :style="styles" @scroll="scroll">
    <slot />
    <div v-if="isLoading" class="f-infinite-scrolling__loading">加载中...</div>
  </div>
</template>
