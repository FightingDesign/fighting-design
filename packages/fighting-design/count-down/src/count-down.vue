<script lang="ts" setup name="FCountDown">
  import { computed, watch, getCurrentInstance } from 'vue'
  import { Props } from './props'
  import { type CurrentTime, useCountDown } from '../../_hooks'
  import { useRun } from '../../_hooks'

  const prop = defineProps(Props)

  const { run } = useRun()
  const { start, pause, reset, current } = useCountDown({
    time: +prop.time,
    millisecond: prop.millisecond,
    onFinish: () => {
      run(prop.finish)
    }
  })

  defineExpose({
    start,
    pause,
    reset,
    current
  })

  const formatTimeStr = (format: string, currentTime: CurrentTime): string => {
    const { days } = currentTime
    let { hours, minutes, seconds, milliseconds } = currentTime

    // 在前方补全0
    const padZero = (str: string | number, length: number = 2): string => {
      let realStr = str + ''
      return realStr.padStart(length, '0')
    }
    if (format.includes('DD')) {
      format = format.replace('DD', padZero(days))
    } else {
      hours += days * 24
    }

    if (format.includes('HH')) {
      format = format.replace('HH', padZero(hours))
    } else {
      minutes += hours * 60
    }

    if (format.includes('mm')) {
      format = format.replace('mm', padZero(minutes))
    } else {
      seconds += minutes * 60
    }

    if (format.includes('ss')) {
      format = format.replace('ss', padZero(seconds))
    } else {
      milliseconds += seconds * 1000
    }

    if (format.includes('S')) {
      const ms = padZero(milliseconds, 3)

      if (format.includes('SSS')) {
        format = format.replace('SSS', ms)
      } else if (format.includes('SS')) {
        format = format.replace('SS', ms.slice(0, 2))
      } else {
        format = format.replace('S', ms.charAt(0))
      }
    }

    return format
  }

  const currentIns = getCurrentInstance()
  const hasDefaultSlot: boolean = typeof currentIns?.slots.default == 'function'
  // 生成时间字符串
  const timeText = computed(() => formatTimeStr(prop.format, current.value))

  // 重置时间
  const resetTime = () => {
    reset(+prop.time)

    if (prop.autoStart) {
      start()
    }
  }

  // 监听传入的time改变，则重新开始倒计时
  watch(() => prop.time, resetTime, { immediate: true })
</script>

<template>
  <div class="f-count-down">
    <span v-if="!hasDefaultSlot" class="f-count-down__text"> {{ timeText }} </span>
    <slot v-bind="current"></slot>
  </div>
</template>
