<script lang="ts" setup name="FBreadcrumb">
  import { Props, BREADCRUMB_PROPS_KEY } from './props'
  import { provide } from 'vue'
  import { sizeChange } from '../../_utils'
  import type { BreadcrumbPropsType } from './props'

  const prop: BreadcrumbPropsType = defineProps(Props)

  provide<BreadcrumbPropsType>(BREADCRUMB_PROPS_KEY, prop)
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
