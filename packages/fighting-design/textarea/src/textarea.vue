<script lang="ts" setup name="FTextarea">
  import { Props, Emits } from './props'
  import type { TextareaPropsType } from './interface'

  const prop: TextareaPropsType = defineProps(Props)
  defineEmits(Emits)
</script>

<template>
  <div class="f-textarea">
    FTextarea
  </div>
</template>
