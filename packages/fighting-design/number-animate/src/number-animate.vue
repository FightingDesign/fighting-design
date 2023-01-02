<script lang="ts" setup name="FNumberAnimate">
  import { Props } from './props'
  import { onMounted, ref } from 'vue'
  import { useRun } from '../../_hooks'

  const props = defineProps(Props)

  let number = ref(0)
  let startTime = ref(0)

  /*
   * 动画函数
   */
  const animate = (timestamp: number): void => {
    if (startTime.value === undefined) {
      startTime.value = timestamp
    }
    /*
     * 动画执行的总时间
     */
    const elapsed = timestamp - startTime.value
    /*
     * 计算出 执行到达时间 相差值
     */
    number.value += (props.number / props.approximateTime) * 20

    if (number.value >= props.number) {
      number.value = props.number
      useRun(props.animationEnd, elapsed)
      return
    }
    /*
     * 浏览器执行动画侦
     */
    window.requestAnimationFrame(animate)
  }

  onMounted(() => {
    window.requestAnimationFrame(animate)
  })
</script>

<template>
  <div class="f-number-animate" :style="styles">
    <span>
      {{ localeString ? number.toLocaleString() : number }}
    </span>
  </div>
</template>
