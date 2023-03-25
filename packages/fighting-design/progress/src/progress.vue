<script lang="ts" setup name="FProgress">
  import { Props, PROGRESS_PROPS_KEY } from './props'
  import { provide, computed, reactive, toRefs } from 'vue'
  import { ProgressCircle, ProgressLine } from '../components'
  import { isNumber, error } from '../../_utils'
  import type { ProgressProvide } from './interface'

  const prop = defineProps(Props)

  /** 当前进度条进度 */
  const percent = computed((): number => {
    const { percentage } = prop

    if (!isNumber(percentage)) {
      if (__DEV__) {
        error('f-progress', '`percentage` is not a number')
      }
      return 0
    }

    if (prop.percentage >= 100) {
      return 100
    }
    if (prop.percentage <= 0) {
      return 0
    }

    return prop.percentage
  })

  provide<ProgressProvide>(PROGRESS_PROPS_KEY, reactive({ ...toRefs(prop), percent }))
</script>

<template>
  <progress-circle v-if="circle" />

  <progress-line v-else />
</template>
