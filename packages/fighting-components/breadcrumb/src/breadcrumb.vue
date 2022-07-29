<script lang="ts" setup name="FBreadcrumb">
  import { provide } from 'vue'
  import { breadcrumbKey, Props } from './breadcrumb'

  const prop = defineProps(Props)

  provide(breadcrumbKey, prop)
</script>

<template>
  <div v-if="$slots.default" class="f-breadcrumb">
    <slot />
  </div>
</template>
