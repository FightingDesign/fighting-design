<script lang="ts" setup>
import { computed } from 'vue'
import { VTHamburger } from '../../core'
import { useConfig } from '../composables/config'

defineProps<{
  active: boolean
}>()

const { config } = useConfig()

const hasContent = computed(() => {
  return config.value.appearance || config.value.socialLinks
})
</script>

<template>
  <VTHamburger v-if="hasContent" class="VPNavBarHamburger" :active="active" />
</template>

<style scoped>
.VPNavBarHamburger {
  width: 40px;
  height: var(--vt-nav-height);
}

@media (min-width: 768px) {
  .VPNavBarHamburger {
    display: none;
  }
}
</style>
