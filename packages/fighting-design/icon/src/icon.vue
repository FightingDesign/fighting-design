<script lang="ts" setup name="FIcon">
  import { Props, Emits } from './icon'
  import { computed } from 'vue'
  import { sizeChange } from '../../_utils'
  import type { ComputedRef } from 'vue'
  import type {
    HandleEventInterface as a,
    ClassListInterface as b
  } from '../../_interface'

  const prop = defineProps(Props)
  const emit = defineEmits(Emits)

  const handleClick: a = (evt: MouseEvent): void => {
    emit('click', evt)
  }

  const classList: ComputedRef<b> = computed((): b => {
    const { fontClass, icon } = prop

    return ['f-icon', icon, fontClass] as const
  })
</script>

<template>
  <i
    :class="classList"
    :style="{ color, fontSize: sizeChange(size) }"
    @click="handleClick"
  >
    <slot />
  </i>
</template>
