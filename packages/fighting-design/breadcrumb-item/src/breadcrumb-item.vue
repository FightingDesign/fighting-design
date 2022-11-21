<script lang="ts" setup name="FBreadcrumbItem">
  import { inject, toRefs } from 'vue'
  import { BREADCRUMB_PROPS_KEY } from '../../breadcrumb/src/props'
  import { FSvgIcon } from '../../svg-icon'
  import { FIconChevronRightVue } from '../../_svg'
  import type { BreadcrumbPropsType } from '../../breadcrumb'

  // 注入依赖项
  const INJECT_DEPEND: BreadcrumbPropsType = inject(
    BREADCRUMB_PROPS_KEY
  ) as BreadcrumbPropsType

  const { separator, itemColor, separatorColor } = toRefs(INJECT_DEPEND)
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
