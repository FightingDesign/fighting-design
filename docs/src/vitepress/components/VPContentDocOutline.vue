<script setup lang="ts">
import { useData } from 'vitepress'
import { resolveHeaders, useActiveAnchor } from '../composables/outline'
import { computed, inject, ref } from 'vue'

const { page, frontmatter } = useData()
const container = ref()
const marker = ref()
useActiveAnchor(container, marker)

const filterHeaders = inject('filter-headers', null) as any
const filteredHeaders = computed(() => {
  return filterHeaders
    ? page.value.headers.map((h) => {
        return filterHeaders(h) ? h : Object.assign({}, h, { hidden: true })
      })
    : page.value.headers
})

const handleClick = ({ target: el }: Event) => {
  const id = '#' + (el as HTMLAnchorElement).href!.split('#')[1]
  const heading = document.querySelector(id) as HTMLAnchorElement
  heading?.focus()
}
</script>

<template>
  <div class="VPContentDocOutline" ref="container">
    <div class="outline-marker" ref="marker" />
    <div class="outline-title">On this page</div>
    <nav aria-labelledby="doc-outline-aria-label">
      <span id="doc-outline-aria-label" class="visually-hidden"
        >Table of Contents for current page</span
      >
      <ul class="root">
        <li
          v-for="{ text, link, children, hidden } in resolveHeaders(
            filteredHeaders
          )"
          v-show="!hidden"
        >
          <a class="outline-link" :href="link" @click="handleClick">{{
            text
          }}</a>
          <ul v-if="children && frontmatter.outline === 'deep'">
            <li v-for="{ text, link, hidden } in children" v-show="!hidden">
              <a
                class="outline-link nested"
                :href="link"
                @click="handleClick"
                >{{ text }}</a
              >
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  </div>
</template>

<style scoped>
.VPContentDocOutline {
  font-size: 13px;
  font-weight: 500;
  position: relative;
}

.outline-title {
  font-weight: 700;
  margin-bottom: 4px;
  text-transform: uppercase;
  font-size: 11px;
  letter-spacing: 0.4px;
}

.outline-link {
  color: var(--vt-c-text-2);
  transition: color 0.5s;
  line-height: 28px;
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.outline-link:hover,
.outline-link.active {
  color: var(--vt-c-text-1);
  transition: color 0.25s;
}

.outline-link.nested {
  padding-left: 1em;
}

.outline-marker {
  opacity: 0;
  position: absolute;
  background-color: var(--vt-c-green);
  border-radius: 4px;
  width: 4px;
  height: 20px;
  top: 32px;
  left: -12px;
  z-index: 0;
  transition: top 0.25s cubic-bezier(0, 1, 0.5, 1), opacity 0.25s,
    background-color 0.5s;
}

.root {
  z-index: 1;
  position: relative;
}
</style>
