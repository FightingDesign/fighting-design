<script lang="ts" setup name="FBreadcrumbItem">
  import { inject, toRefs } from 'vue'
  import { BreadcrumbPropsKey } from '../../breadcrumb/src/props'
  import { FSvgIcon } from '../../svg-icon'
  import { FIconChevronRightVue } from '../../_svg'
  import type { BreadcrumbPropsType } from '../../breadcrumb'

  const breadcrumbContext: BreadcrumbPropsType = inject(
    BreadcrumbPropsKey
  ) as BreadcrumbPropsType
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
