<script lang="ts" setup name="FProgress">
  import { Props, PROGRESS_PROPS_KEY } from './props'
  import { provide } from 'vue'
  import { ProgressCircle, ProgressLine } from '../components'

  const prop = defineProps(Props)

  provide(PROGRESS_PROPS_KEY, prop)
</script>

<template>
  <!-- 圆形进度条 -->
  <progress-circle v-if="circle" />

  <!-- 普通进度条 -->
  <progress-line v-else />
</template>
