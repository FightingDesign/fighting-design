<script setup lang="ts">
import { useData, useRoute } from 'vitepress'

const { theme } = useData()
const route = useRoute()
</script>

<template>
  <div class="vt-doc">
    <h1>Page Not Found</h1>
    <p>
      You found a dead link: <span class="not-found-path">{{ route.path }}</span
      ><br />
      <span v-if="theme.repo"
        >Please
        <a :href="`https://github.com/${theme.repo}`" target="_blank"
          >let us know</a
        >
        so we can fix it.</span
      >
    </p>
  </div>
</template>

<style scoped>
.vt-doc {
  padding: 32px 48px;
  background-color: var(--vt-c-bg-soft);
  margin: 32px;
  border-radius: 8px;
}

.not-found-path {
  font-family: var(--vt-font-family-mono);
  color: var(--vt-c-text-code);
}
</style>
