<script lang="ts" setup name="FNumberAnimate">
  import { Props } from './props'
  import { onMounted, ref, computed } from 'vue'
  import { useRun } from '../../_hooks'

  const prop = defineProps(Props)

  const number = ref<number>(0)
  const startTime = ref<number>(0)

  /**
   * 动画方法
   *
   * @param timestamp 动画时间
   */
  const animate = (timestamp: number): void => {
    if (startTime.value === undefined) {
      startTime.value = timestamp
    }
    /**
     * 动画执行的总时间
     */
    const elapsed: number = timestamp - startTime.value
    // 计算出 执行到达时间 相差值
    number.value += (prop.number / prop.approximateTime) * 20

    if (number.value >= prop.number) {
      number.value = prop.number
      useRun(prop.onAnimationEnd, elapsed)
      return
    }

    /**
     * 浏览器执行动画侦
     *
     * @see requestAnimationFrame https://developer.mozilla.org/zh-CN/docs/Web/API/Window/requestAnimationFrame
     */
    window.requestAnimationFrame(animate)
  }

  /**
   * 显示的主要内容
   *
   * @see toLocaleString https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number/toLocaleString
   */
  const content = computed((): number | string => {
    return prop.localeString ? number.value.toLocaleString() : number.value
  })

  onMounted((): void => {
    window.requestAnimationFrame(animate)
  })
</script>

<template>
  <div class="f-number-animate" :style="styles">
    {{ content }}
  </div>
</template>
