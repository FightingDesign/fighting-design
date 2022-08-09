<script lang="ts" setup name="FBreadcrumbItem">
  import { getCurrentInstance, inject, ref, toRefs } from 'vue'
  import { BreadcrumbPropsKey } from '../../breadcrumb/src/breadcrumb'
  import { Props } from './breadcrumb-item'
  import FIcon from '../../icon'
  import type { ComponentInternalInstance, Ref } from 'vue'
  import type { handleClickInterface as a } from './interface'

  const prop = defineProps(Props)

  const instance: ComponentInternalInstance = getCurrentInstance()!
  const breadcrumbContext = inject(BreadcrumbPropsKey)!
  const router = instance.appContext.config.globalProperties.$router
  const link: Ref<HTMLSpanElement> = ref<HTMLSpanElement>(
    null as unknown as HTMLSpanElement
  )
  const { separator, separatorIcon, itemColor, separatorColor } =
    toRefs(breadcrumbContext)

  const handleClick: a = (): void => {
    const { replace, to } = prop

    if (!to || !router) {
      return
    }
    replace ? router.replace(to) : router.push(to)
  }
</script>

<template>
  <span class="f-breadcrumb-item">
    <span
      ref="link"
      class="f-breadcrumb-item__inner"
      :style="{ color: itemColor }"
      role="link"
      @click="handleClick"
    >
      <slot />
    </span>

    <f-icon
      v-if="separatorIcon"
      class="f-breadcrumb-item__separator"
      :icon="separatorIcon"
      :color="separatorColor"
    />

    <span
      v-else
      :style="{ color: separatorColor }"
      class="f-breadcrumb-item__separator"
      role="presentation"
    >
      {{ separator }}
    </span>
  </span>
</template>
