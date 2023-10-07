<script lang="ts" setup>
  import { Props } from './props'
  import { ref, onMounted } from 'vue'
  import { useRun } from '../../_hooks'
  import { sizeChange } from '../../_utils'

  defineOptions({ name: 'FInfiniteScrolling' })

  const prop = defineProps(Props)

  const { run } = useRun()

  /** loading 元素节点 */
  const loadingRef = ref<HTMLDivElement | undefined>()

  /** 监视元素触发回调 */
  const obs = (): IntersectionObserver => {
    return new IntersectionObserver(
      /**
       * @param { Array } arr 观察的元素数组
       */
      (arr: IntersectionObserverEntry[]): void => {
        if (arr[0].isIntersecting) {
          run(prop.onScrollEnd)
        }
      },
      { rootMargin: sizeChange(prop.distance) }
    )
  }

  /** 初始化监视元素 */
  onMounted((): void => {
    if (loadingRef.value) {
      obs().observe(loadingRef.value)
    }
  })
</script>

<template>
  <div class="f-infinite-scrolling">
    <slot />
    <div ref="loadingRef" class="f-infinite-scrolling__loading">加载中...</div>
  </div>
</template>
