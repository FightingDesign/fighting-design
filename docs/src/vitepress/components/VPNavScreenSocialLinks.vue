<script lang="ts" setup>
import { VTSocialLinks } from '../../core'
import { useConfig } from '../composables/config'

const { config } = useConfig()
</script>

<template>
  <VTSocialLinks
    v-if="config.socialLinks"
    class="VPNavScreenSocialLinks"
    size="medium"
    :links="config.socialLinks"
  />
</template>
