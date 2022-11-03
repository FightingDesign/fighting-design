<script lang="ts" setup name="FBreadcrumb">
  import { provide } from 'vue'
  import { sizeChange } from '../../_utils'
  import { BreadcrumbPropsKey, Props } from './props'
  import type { BreadcrumbPropsType } from './props'

  const prop: BreadcrumbPropsType = defineProps(Props)

  provide<BreadcrumbPropsType>(BreadcrumbPropsKey, prop)
</script>

<template>
  <div
    v-if="$slots.default"
    class="f-breadcrumb"
    :style="{ fontSize: sizeChange(fontSize) }"
  >
    <slot />
  </div>
</template>
