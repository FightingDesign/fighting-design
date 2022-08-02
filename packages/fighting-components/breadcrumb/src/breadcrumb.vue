<script lang="ts" setup name="FBreadcrumb">
  import { provide } from 'vue'
  import { BreadcrumbPropsKey, Props } from './breadcrumb'

  const prop = defineProps(Props)

  provide(BreadcrumbPropsKey, prop)
</script>

<template>
  <div v-if="$slots.default" class="f-breadcrumb">
    <slot />
  </div>
</template>
