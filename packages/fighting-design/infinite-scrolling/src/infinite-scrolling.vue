<script lang="ts" setup name="FInfiniteScrolling">
  import { Props } from './props'
  import { ref } from 'vue'
  import { useRun } from '../../_hooks'

  const prop = defineProps(Props)

  /**
   * 是否到达底部
   */
  const target = ref(false)
  /**
   * 元素节点
   */
  const scrollView = ref<HTMLDivElement>(null as unknown as HTMLDivElement)

  /**
   * 滚动触发
   */
  const scroll = (): void => {
    if (prop.loading) return

    /**
     * 获取到元素节点
     */
    const view: HTMLDivElement = scrollView.value
    /**
     * 获取到滚动的距离
     *
     * @see Math.ceil() https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/cei
     */
    const viewScrollingDistance: number = Math.ceil(view.scrollTop + view.clientHeight + prop.distance)

    /**
     * 滚动时回调
     */
    useRun(prop.onScrollWhen, Math.ceil(view.scrollTop))

    // 如果滚动的距离大于容器高度执行
    if (viewScrollingDistance >= view.scrollHeight && !target.value) {
      /**
       * 批处理 触底时回调
       */
      target.value = true

      useRun((distance: number): void => {
        prop.onScrollEnd(distance)
        target.value = false
      }, viewScrollingDistance)
    }
  }
</script>
<template>
  <div ref="scrollView" class="f-infinite-scrolling" :style="styles" @scroll="scroll">
    <slot />
    <div v-if="loading" class="f-infinite-scrolling__loading">加载中...</div>
  </div>
</template>
