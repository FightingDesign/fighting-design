<script lang="ts" setup>
import { useData } from 'vitepress'
import VPFooter from './VPFooter.vue'

const { frontmatter } = useData()
</script>

<template>
  <div class="VPContentPage">
    <main>
      <Content />
    </main>

    <slot name="footer-before" />
    <VPFooter v-if="frontmatter.footer !== false" />
    <slot name="footer-after" />
  </div>
</template>
