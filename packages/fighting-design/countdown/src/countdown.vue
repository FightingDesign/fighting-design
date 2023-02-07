<script lang="ts" setup name="FCountdown">
  import { ref } from 'vue'
  import { useCountdown } from '../../_hooks/use-countdown/index'
  import type { timingCallbackProps } from '../../_hooks/use-countdown/interface'
  import { Props } from './props'
  import { useRun } from '../../_hooks'

  const prop = defineProps(Props)
  let timerData = ref('00::00:00')
  const timingCallback = (date: timingCallbackProps): void => {
    timerData.value = `${date.hour}:${date.minute}:${date.second}`
    prop.timingCallback && prop.timingCallback(date)
  }

  useCountdown(prop.target, timingCallback, value => useRun(prop.endCallback, value))
</script>

<template>
  <div class="f-countdown" :style="prop.styles">
    {{ timerData }}
  </div>
</template>
