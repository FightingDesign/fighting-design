<template>
  <div class="VPContentPage">
    <Content />
  </div>
</template>

<script lang="ts" setup>
import { useData } from 'vitepress'
const { frontmatter } = useData()
</script>
