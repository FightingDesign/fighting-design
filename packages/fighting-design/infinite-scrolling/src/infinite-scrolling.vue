<script lang="ts" setup name="FInfiniteScrolling">
  import { Props } from './props'
  import { ref } from 'vue'
  import { useRun } from '../../_hooks'

  const props = defineProps(Props)

  const target = ref(false)

  /**
   * 元素节点
   */
  const scrollView = ref<HTMLDivElement>(null as unknown as HTMLDivElement)
  /**
   * 滚动触发
   */
  const scroll = (): void => {
    if (props.loading) return
    const view: HTMLDivElement = scrollView.value
    const viewScrollingDistance: number = Math.ceil(view.scrollTop + view.clientHeight + props.scrollDistance)
    /**
     * 滚动时回调
     */
    useRun(props.onScrollWhen, view.scrollTop)
    if (viewScrollingDistance >= view.scrollHeight && !target.value) {
      /**
       * 批处理 触底时回调
       */
      target.value = true
      useRun((viewScrollingDistance: number): void => {
        props.onScrollEnd(viewScrollingDistance)
        target.value = false
      }, viewScrollingDistance)
    }
  }
</script>
<template>
  <div ref="scrollView" class="f-infinite-scrolling" :style="props.styles" @scroll="scroll">
    <slot />
    <div v-if="loading" class="f-infinite-scrolling__loading">加载中...</div>
  </div>
</template>
