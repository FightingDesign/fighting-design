<script lang="ts" setup name="FBreadcrumb">
  import { provide } from 'vue'
  import { BreadcrumbPropsKey, Props } from './breadcrumb'
  import type { FPropsType } from './breadcrumb'

  const prop: FPropsType = defineProps(Props)

  provide(BreadcrumbPropsKey, prop)
</script>

<template>
  <div v-if="$slots.default" class="f-breadcrumb" :style="{ fontSize }">
    <slot />
  </div>
</template>
