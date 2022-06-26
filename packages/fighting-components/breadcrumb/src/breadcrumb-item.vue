<template>
  <span class="f-breadcrumb-item">
    <span
      ref="link"
      class="f-breadcrumb-item__inner f-breadcrumb-item__link"
      :style="{color: itemColor}"
      role="link"
      @click="onClick"
    >
      <slot />
    </span>
    <f-icon v-if="separatorIcon" :style="{color: separatorColor}" class="f-breadcrumb-item__separator" :class="`${separatorIcon}`"></f-icon>
    <span :style="{color: separatorColor}" v-else class="f-breadcrumb-item__separator" role="presentation">
      {{ separator }}
    </span>
  </span>
</template>

<script lang="ts" setup name="FBreadcrumbItem">
import { getCurrentInstance, inject, ref, toRefs } from 'vue'
import { breadcrumbKey } from "./breadcrumb"
import { Props } from './breadcrumb-item'
import { FIcon } from "@fighting-design/fighting-components/icon"

const props = defineProps(Props)

const instance = getCurrentInstance()!
const breadcrumbContext = inject(breadcrumbKey, undefined)!

const { separator, separatorIcon, itemColor,separatorColor } = toRefs(breadcrumbContext)
const router = instance.appContext.config.globalProperties.$router

const link = ref<HTMLSpanElement>()

const onClick = () => {
  if (!props.to || !router) return
  props.replace ? router.replace(props.to) : router.push(props.to)
}
</script>
