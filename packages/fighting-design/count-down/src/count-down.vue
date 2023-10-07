<script lang="ts" setup>
  import { computed, watch } from 'vue'
  import { Props } from './props'
  import { useCountDown } from '../../_hooks'
  import { useRun } from '../../_hooks'
  import type { CurrentTime } from '../../_hooks'

  defineOptions({ name: 'FCountDown' })

  const prop = defineProps(Props)

  const { run } = useRun()
  const { start, pause, reset, current } = useCountDown({
    time: +prop.time,
    millisecond: prop.millisecond,
    interval: +prop.interval,
    onFinish: (): void => {
      run(prop.onFinish)
    }
  })

  /**
   * 格式化时间格式
   *
   * @param format
   * @param currentTime
   */
  const formatTimeStr = (format: string, currentTime: CurrentTime): string => {
    const { days } = currentTime
    let { hours, minutes, seconds, milliseconds } = currentTime

    /**
     * 在前方补全 0
     *
     * @param str
     * @param length
     */
    const padZero = (str: string | number, length = 2): string => {
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

  /** 生成时间字符串 */
  const timeText = computed((): string => formatTimeStr(prop.format, current.value))

  /** 监听传入的 time 改变，则重新开始倒计时 */
  watch(
    (): string | number => prop.time,
    (): void => {
      reset(+prop.time)

      if (prop.autoStart) {
        start()
      }
    },
    { immediate: true }
  )

  defineExpose({ current, start, pause, reset })
</script>

<template>
  <div class="f-count-down">
    <span v-if="!$slots.default" class="f-count-down__text">{{ timeText }}</span>
    <slot v-bind="current" />
  </div>
</template>
