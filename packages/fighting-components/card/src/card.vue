<template>
  <div
    :class="[
      'f-card',
      {
        'f-card-round': round,
        [`f-card-shadow-${target}`]: target
      }
    ]"
  >
    <div v-if="$slots.header || title" class="f-card-header">
      <slot name="header">{{ title }}</slot>
    </div>
    <div :class="['f-card-body']" :style="{ padding }">
      <slot />
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { Props } from './card'
  const prop = defineProps(Props)
</script>

<script lang="ts">
  export default {
    name: 'FCard'
  }
</script>
