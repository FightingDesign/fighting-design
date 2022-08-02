<script lang="ts" setup name="FNovelCoronavirus">
  import { Props, Emits } from './novel-coronavirus'
  import { ref } from 'vue'
  import type { Ref } from 'vue'
  import { pastTime } from '@fighting-design/fighting-utils'

  const time: Ref<string> = ref<string>('')

  setInterval(() => {
    time.value = pastTime('2019-12-16')
  }, 1000)

  defineProps(Props)
  defineEmits(Emits)
</script>

<template>
  <div class="f-novel-coronavirus">
    <div class="f-novel-coronavirus-title">距离新冠疫情爆发，已经过去了：</div>
    <div class="f-novel-coronavirus-time">{{ time }}</div>
  </div>
</template>
