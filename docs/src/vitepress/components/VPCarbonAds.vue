<script setup lang="ts">
import { useMediaQuery } from '@vueuse/core'
import { useData } from 'vitepress'
import { ref, onMounted, watch } from 'vue'

const { theme } = useData()
const carbonOptions = theme.value.carbonAds
const container = ref()
const isWide = useMediaQuery('(min-width: 1280px)')

let hasInitalized = false

function init() {
  if (!hasInitalized) {
    hasInitalized = true
    const s = document.createElement('script')
    s.id = '_carbonads_js'
    s.src = `//cdn.carbonads.com/carbon.js?serve=${carbonOptions.code}&placement=${carbonOptions.placement}`
    s.async = true
    container.value.appendChild(s)
  }
}

// no need to account for option changes during dev, we can just refresh the page
if (carbonOptions) {
  onMounted(() => {
    // if the page is loaded in wide mode, load carbon directly.
    // otherwise, only load it if the page resizes to wide enough.
    // this avoids loading carbon at all on mobile where it's never shown.
    if (isWide.value) {
      init()
    } else {
      watch(isWide, (wide) => wide && init())
    }
  })
}
</script>

<template>
  <div class="VPCarbonAds" ref="container" />
</template>

<style>
.VPCarbonAds {
  margin: 28px 0;
  padding: 20px 24px;
  background-color: var(--vt-c-bg-soft);
  border-radius: 4px;
  font-size: 11px;
  font-weight: 500;
  line-height: 1.4;
  color: var(--vt-c-text-2);
  text-align: center;
  transition: color 0.5s, background-color 0.5s;
}

.VPCarbonAds img {
  margin: 0 auto 12px;
  border-radius: 4px;
}

.VPCarbonAds .carbon-poweredby {
  display: block;
  margin-top: 6px;
  text-transform: uppercase;
  transition: color 0.5s;
  color: var(--vt-c-text-3);
  font-size: 10px;
}
</style>
