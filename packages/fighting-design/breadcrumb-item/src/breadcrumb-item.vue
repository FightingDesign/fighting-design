<script lang="ts" setup name="FBreadcrumbItem">
  import { inject, toRefs } from 'vue'
  import { BreadcrumbPropsKey } from '../../breadcrumb/src/breadcrumb'
  import FIcon from '../../icon'

  const breadcrumbContext = inject(BreadcrumbPropsKey)!
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
      :style="{ color: separatorColor }"
      class="f-breadcrumb-item-separator"
      role="presentation"
    >
      {{ separator }}
    </span>
  </span>
</template>
