<script lang="ts" setup name="FBreadcrumbItem">
  import { inject, toRefs } from 'vue'
  import { BreadcrumbPropsKey } from '../../breadcrumb/src/breadcrumb'
  import { FIcon } from '../../icon'
  import type { FPropsType } from '../../breadcrumb/src/breadcrumb'

  const breadcrumbContext = inject(BreadcrumbPropsKey) as FPropsType
  const { separator, separatorIcon, itemColor, separatorColor } =
    toRefs(breadcrumbContext)
</script>

<template>
  <span class="f-breadcrumb-item">
    <span class="f-breadcrumb-item-inner" :style="{ color: itemColor }">
      <slot />
    </span>

    <f-icon
      v-if="separatorIcon"
      class="f-breadcrumb-item-separator"
      :icon="separatorIcon"
      :color="separatorColor"
    />

    <span
      v-else
      class="f-breadcrumb-item-separator"
      role="presentation"
      :style="{ color: separatorColor }"
    >
      {{ separator }}
    </span>
  </span>
</template>
