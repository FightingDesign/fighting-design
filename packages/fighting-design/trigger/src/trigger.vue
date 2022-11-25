<script lang="ts" setup name="FTrigger">
  import { Props } from './props'
  import type { TriggerPropsType } from './interface'

  const prop: TriggerPropsType = defineProps(Props)
</script>

<template>
  <div class="f-trigger">FTrigger</div>
</template>
