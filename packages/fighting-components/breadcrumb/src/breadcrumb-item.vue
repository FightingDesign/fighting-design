<template>
  <span class="f-breadcrumb-item">
    <span
      ref="link"
      class="f-breadcrumb-item__inner f-breadcrumb-item__link"
      :style="{ color: itemColor }"
      role="link"
      @click="onClick"
    >
      <slot />
    </span>

    <i
      v-if="separatorIcon"
      :style="{ color: separatorColor }"
      :class="['f-icon', 'f-breadcrumb-item__separator', separatorIcon]"
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

<script lang="ts" setup name="FBreadcrumbItem">
  import { getCurrentInstance, inject, ref, toRefs } from 'vue'
  import { breadcrumbKey } from './breadcrumb'
  import { Props } from './breadcrumb-item'
  import type { ComponentInternalInstance, Ref } from 'vue'

  const prop = defineProps(Props)

  const instance: ComponentInternalInstance = getCurrentInstance()!
  const breadcrumbContext = inject(breadcrumbKey, undefined)!
  const router = instance.appContext.config.globalProperties.$router
  const link: Ref<HTMLSpanElement | null> = ref<HTMLSpanElement | null>(null)
  const { separator, separatorIcon, itemColor, separatorColor } =
    toRefs(breadcrumbContext)

  const onClick = (): void => {
    const { replace, to } = prop

    if (!to || !router) {
      return
    }
    replace ? router.replace(to) : router.push(to)
  }
</script>
