<script lang="ts" setup>
import { SocialLinkSize, SocialLink } from '../types/socialLink'
import VTSocialLink from './VTSocialLink.vue'

defineProps<{
  size?: SocialLinkSize
  links: SocialLink[]
}>()
</script>

<template>
  <div class="vt-social-links">
    <VTSocialLink
      v-for="{ link, icon } in links"
      :key="link"
      :size="size"
      :icon="icon"
      :link="link"
    />
  </div>
</template>
