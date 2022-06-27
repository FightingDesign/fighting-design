<template>
  <div class="f-breadcrumb">
    <slot />
  </div>
</template>

<script lang="ts" setup name="FBreadcrumb">
  import { provide } from 'vue'
  import { breadcrumbKey, Props } from './breadcrumb'

  const prop = defineProps(Props)

  provide(breadcrumbKey, prop)
</script>
