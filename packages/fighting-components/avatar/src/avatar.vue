<template>
  <div
    :class="['f-avatar', { 'f-avatar-round': round }]"
    :style="{ background }"
  >
    <img :class="classList" :src="src" :alt="alt" />
  </div>
</template>

<script lang="ts" setup name="FAvatar">
  import { Props } from './avatar'
  import { computed } from 'vue'
  import type { ComputedRef } from 'vue'

  const prop = defineProps(Props)

  const classList: ComputedRef<object | string[]> = computed(
    (): object | string[] => {
      const { round, size, fit } = prop

      return [
        {
          'f-avatar-round': round,
          [`f-avatar-${size}`]: size,
          [`f-avatar-${fit}`]: fit
        }
      ]
    }
  )
</script>
