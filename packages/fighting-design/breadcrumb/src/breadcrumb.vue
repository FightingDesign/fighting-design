<script lang="ts" setup>
  import { Props, BREADCRUMB_PROPS_KEY } from './props'
  import { provide } from 'vue'
  import type { BreadcrumbProps } from './interface'

  defineOptions({ name: 'FBreadcrumb' })

  const prop = defineProps(Props)

  provide<BreadcrumbProps>(BREADCRUMB_PROPS_KEY, prop)
</script>

<template>
  <div v-if="$slots.default" class="f-breadcrumb">
    <slot />
  </div>
</template>
