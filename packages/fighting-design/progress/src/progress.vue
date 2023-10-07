<script lang="ts" setup>
  import { Props, PROGRESS_PROPS_KEY } from './props'
  import { provide, computed, reactive, toRefs } from 'vue'
  import { ProgressCircle, ProgressLine } from '../components'
  import { isNumber, error } from '../../_utils'
  import type { ProgressProvide } from './interface'

  defineOptions({ name: 'FProgress' })

  const prop = defineProps(Props)

  /** 当前进度条进度 */
  const percent = computed((): number => {
    const { percentage } = prop

    if (!isNumber(percentage)) {
      error('f-progress', '`percentage` is not a number')
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
  <progress-circle v-if="state === 'circle'" />

  <progress-line v-else />
</template>
