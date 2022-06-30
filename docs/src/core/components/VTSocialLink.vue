<template>
  <a
    class="vt-social-link"
    :class="{
      'is-small': size === 'small',
      'is-medium': size === 'medium'
    }"
    :href="link"
    :title="icon"
    :target="target"
    rel="noopener noreferrer"
  >
    <component :is="icons[icon]" class="vt-social-link-icon" />
    <span class="visually-hidden">{{ icon }}</span>
  </a>
</template>

<script lang="ts" setup>
  import type { SocialLinkSize, SocialLinkIcon } from '../types/socialLink'
  import VTIconGitHub from './icons/VTIconGitHub.vue'

  const props = defineProps<{
    size?: SocialLinkSize
    icon: SocialLinkIcon
    link: string
  }>()

  const target = /^[a-z]+:/i.test(props.link) ? '_blank' : undefined

  const icons = {
    github: VTIconGitHub
  }
</script>
