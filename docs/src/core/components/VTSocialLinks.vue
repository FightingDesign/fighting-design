<template>
  <div class="vt-social-links">
    <v-t-social-link
      v-for="{ link, icon } in links"
      :key="link"
      :size="size"
      :icon="icon"
      :link="link"
    />
  </div>
</template>

<script lang="ts" setup>
  import type { SocialLinkSize, SocialLink } from '../types/socialLink'
  import VTSocialLink from './VTSocialLink.vue'

  defineProps<{
    size?: SocialLinkSize
    links: SocialLink[]
  }>()
</script>
