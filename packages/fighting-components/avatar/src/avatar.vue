<template>
  <div :class="classList">
    <img :src="src" :alt="alt" />
  </div>
</template>

<script lang="ts" setup name="FAvatar">
  import { Props } from './avatar'
  import { computed } from 'vue'
  import type { ComputedRef } from 'vue'

  const prop = defineProps(Props)

  const classList: ComputedRef<object | string[]> = computed(
    (): object | string[] => {
      const { round, size } = prop

      return [
        'f-avatar',
        { 'f-avatar-round': round, [`f-avatar-${size}`]: size }
      ]
    }
  )
</script>
