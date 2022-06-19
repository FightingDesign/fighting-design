<template>
  <div id="VPContent" class="VPContent" :class="{ 'has-sidebar': hasSidebar }">
    <v-p-not-found v-if="route.component === VPNotFound" />
    <v-p-content-page v-else-if="!!frontmatter.page">
      <template #footer-before><slot name="footer-before" /></template>
      <template #footer-after><slot name="footer-after" /></template>
    </v-p-content-page>
    <v-p-content-doc v-else :class="{ 'has-sidebar': hasSidebar }">
      <template #content-top><slot name="content-top" /></template>
      <template #content-bottom><slot name="content-bottom" /></template>
      <template #aside-top><slot name="aside-top" /></template>
      <template #aside-mid><slot name="aside-mid" /></template>
      <template #aside-bottom><slot name="aside-bottom" /></template>\
    </v-p-content-doc>
  </div>
</template>

<script lang="ts" setup>
  import { useData, useRoute } from 'vitepress'
  import { useSidebar } from '../composables/sidebar'
  import VPContentPage from './VPContentPage.vue'
  import VPContentDoc from './VPContentDoc.vue'
  import VPNotFound from './VPNotFound.vue'

  const route = useRoute()
  const { frontmatter } = useData()
  const { hasSidebar } = useSidebar()
</script>

<style scoped>
  @media (min-width: 960px) {
    .VPContent {
      padding-top: var(--vt-nav-height);
    }
    .VPContent.has-sidebar {
      padding-left: var(--vp-sidebar-width-small);
    }
  }

  @media (min-width: 1440px) {
    .VPContent.has-sidebar {
      padding-left: calc(
        (100vw - var(--vp-screen-max-width)) / 2 + var(--vp-sidebar-width-small)
      );
    }
  }
</style>
