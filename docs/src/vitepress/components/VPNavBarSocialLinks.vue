<script lang="ts" setup>
import { VTSocialLinks } from '../../core'
import { useConfig } from '../composables/config'

const { config } = useConfig()
</script>

<template>
  <VTSocialLinks
    v-if="config.socialLinks"
    class="VPNavBarSocialLinks"
    size="small"
    :links="config.socialLinks"
  />
</template>

<style scoped>
.VPNavBarSocialLinks {
  display: none;
  margin-right: -10px;
}

@media (min-width: 1280px) {
  .VPNavBarSocialLinks {
    display: flex;
  }
}
</style>
