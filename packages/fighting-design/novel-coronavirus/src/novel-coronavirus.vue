<script lang="ts" setup name="FNovelCoronavirus">
  import { ref } from 'vue'
  import { pastTime } from '../../_utils'
  import type { Ref } from 'vue'
  import type { ordinaryFunctionInterface as a } from '../../_interface'

  const time: Ref<string> = ref<string>('')
  const start = '2019-12-16' as const

  time.value = pastTime(start)

  const runTime: a = (): void => {
    setTimeout((): void => {
      time.value = pastTime(start)
      runTime()
    }, 1000)
  }
  runTime()
</script>

<template>
  <div class="f-novel-coronavirus">
    <div class="f-novel-coronavirus-title">距离新冠疫情爆发，已经过去了：</div>
    <div class="f-novel-coronavirus-time">{{ time }}</div>
  </div>
</template>
