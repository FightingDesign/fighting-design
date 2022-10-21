<script lang="ts" setup name="FBreadcrumbItem">
  import { inject, toRefs } from 'vue'
  import { BreadcrumbPropsKey } from '../../breadcrumb/src/breadcrumb'
  import { FSvgIcon } from '../../svg-icon'
  import { FIconChevronRightVue } from '../../_components/svg/index'
  import type { BreadcrumbPropsType } from '../../breadcrumb/src/breadcrumb'

  const breadcrumbContext = inject(BreadcrumbPropsKey) as BreadcrumbPropsType
  const { separator, itemColor, separatorColor } = toRefs(breadcrumbContext)
</script>

<template>
  <span class="f-breadcrumb-item">
    <span class="f-breadcrumb-item__inner" :style="{ color: itemColor }">
      <slot />
    </span>

    <f-svg-icon
      :icon="separator || FIconChevronRightVue"
      :color="separatorColor"
      :size="16"
    />
  </span>
</template>
