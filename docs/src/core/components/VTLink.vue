<template>
  <component
    :is="href ? 'a' : 'span'"
    class="vt-link"
    :class="{ link: href }"
    :href="href"
    :target="isExternal ? '_blank' : undefined"
    :rel="isExternal ? 'noopener noreferrer' : undefined"
  >
    <slot />
    <f-icon v-if="isExternal && !noIcon" icon="f-icon-attachent" />
  </component>
</template>

<script lang="ts" setup>
  import { computed } from 'vue'

  const props = defineProps<{
    href?: string
    noIcon?: boolean
  }>()

  const isExternal = computed(() => props.href && /^[a-z]+:/i.test(props.href))
</script>
