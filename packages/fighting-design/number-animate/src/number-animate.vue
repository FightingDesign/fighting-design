<script lang="ts" setup>
  import { Props } from './props'
  import { onMounted, ref, computed } from 'vue'
  import { useRun } from '../../_hooks'
  import { isNumber, warning } from '../../_utils'

  defineOptions({ name: 'FNumberAnimate' })

  const prop = defineProps(Props)

  const { run: _run } = useRun()

  /** 开始值 */
  const fromNum = ref<number>(prop.from)
  /**是否重新执行动画 */
  const again = ref<boolean>(false)

  /**
   * 动画方法
   *
   * @param { number } timestamp 动画时间
   */
  const animate = (timestamp: number): void => {
    // 判断是否需要重新执行
    if (again.value) {
      // 如果需要重新执行，则需要将开始值重新赋值
      fromNum.value = prop.from
      again.value = false
    }
    /** 目标值 */
    const toNum = Number(prop.to)

    /** 检测两个值是否为数字 */
    if (!isNumber(Number(fromNum.value)) || !isNumber(toNum)) {
      // 期望值不是数字
      warning('f-number-animate', 'Expected value is not a number')
      return
    }

    // 计算出 执行到达时间 相差值
    fromNum.value += (toNum / prop.approximateTime) * 20

    if (fromNum.value >= toNum) {
      fromNum.value = toNum
      _run(prop.onAnimationEnd, timestamp)
      return
    }

    /**
     * 浏览器执行动画侦
     *
     * @see requestAnimationFrame https://developer.mozilla.org/zh-CN/docs/Web/API/Window/requestAnimationFrame
     */
    window && window.requestAnimationFrame(animate)
  }

  /**
   * 显示的主要内容
   *
   * @see toLocaleString https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number/toLocaleString
   */
  const content = computed((): number | string => {
    return prop.localeString ? fromNum.value.toLocaleString() : fromNum.value
  })

  /**
   * 开始执行动画
   *
   * @param { boolean } [target = true] 是否重新执行，后续调用都默认判断为需要重新执行动画
   */
  const start = (target = true): void => {
    again.value = target
    window && window.requestAnimationFrame(animate)
  }

  /** 初始化执行 */
  onMounted((): void => {
    // 第一次执行不需要重新执行，所以传入 false
    prop.automatic && start(false)
  })

  /**
   * 暴露给外部调用的方法
   *
   * 用于重新执行数字动画
   *
   * 避免外部传入意外不合法的参数，所以没有暴露给外部 start 方法
   */
  const run = (): void => {
    start()
  }

  // 暴露给外部重新执行动画的方法
  defineExpose({ run })
</script>

<template>
  <div class="f-number-animate" :style="styles">
    {{ content }}
  </div>
</template>
