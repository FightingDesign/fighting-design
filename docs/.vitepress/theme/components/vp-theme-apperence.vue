<script lang="ts" setup>
import { ref, onMounted, watch, nextTick } from 'vue'
import { useData, inBrowser } from 'vitepress'
import VPSwitch from 'vitepress/dist/client/theme-default/components/VPSwitch.vue'
import VPIconSun from 'vitepress/dist/client/theme-default/components/icons/VPIconSun.vue'
import VPIconMoon from 'vitepress/dist/client/theme-default/components/icons/VPIconMoon.vue'

const { site, isDark } = useData()
const APPEARANCE_KEY = 'vitepress-theme-appearance'
const checked = ref(false)
const toggle = inBrowser ? useAppearance() : () => { }

onMounted(() => {
  checked.value = document.documentElement.classList.contains('dark')
})

function useAppearance() {
  const query = window.matchMedia('(prefers-color-scheme: dark)')
  const classList = document.documentElement.classList

  let userPreference = localStorage.getItem(APPEARANCE_KEY)

  let isDark =
    (site.value.appearance === 'dark' && userPreference == null) ||
    (userPreference === 'auto' || userPreference == null
      ? query.matches
      : userPreference === 'dark')

  query.onchange = (e) => {
    if (userPreference === 'auto') {
      setClass((isDark = e.matches))
    }
  }

  function toggle(event?: MouseEvent) {
    // @ts-expect-error experimental API
    const isAppearanceTransition = document.startViewTransition && !window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!isAppearanceTransition || !event) {
      setClass((isDark = !isDark))
      return
    }
    console.log('isDark', isDark)
    const x = event.clientX
    const y = event.clientY
    const endRadius = Math.hypot(
      Math.max(x, innerWidth - x),
      Math.max(y, innerHeight - y),
    )
    // @ts-expect-error: Transition API
    // 不支持快照 api 直接切换
    const transition = document.startViewTransition(async () => {
      setClass((isDark = !isDark))
      await nextTick()
    })
    transition.ready
      .then(() => {
        const clipPath = [
          `circle(0px at ${x}px ${y}px)`,
          `circle(${endRadius}px at ${x}px ${y}px)`,
        ]
        document.documentElement.animate(
          {
            clipPath: isDark
              ? [...clipPath].reverse()
              : clipPath,
          },
          {
            duration: 400,
            easing: 'ease-out',
            pseudoElement: isDark
              ? '::view-transition-old(root)'
              : '::view-transition-new(root)',
          },
        )
      })

    userPreference = isDark
      ? query.matches ? 'auto' : 'dark'
      : query.matches ? 'light' : 'auto'

    localStorage.setItem(APPEARANCE_KEY, userPreference)
  }

  function setClass(dark: boolean): void {
    const css = document.createElement('style')
    css.type = 'text/css'
    css.appendChild(
      document.createTextNode(
        `:not(.VPSwitchAppearance):not(.VPSwitchAppearance *) {
  -webkit-transition: none !important;
  -moz-transition: none !important;
  -o-transition: none !important;
  -ms-transition: none !important;
  transition: none !important;
}`
      )
    )
    document.head.appendChild(css)

    checked.value = dark
    classList[dark ? 'add' : 'remove']('dark')

    // @ts-expect-error keep unused declaration, used to force the browser to redraw
    const _ = window.getComputedStyle(css).opacity
    document.head.removeChild(css)
  }

  return toggle
}

watch(checked, (newIsDark) => {
  isDark.value = newIsDark
})
</script>

<template>
  <VPSwitch title="toggle dark mode" class="VPSwitchAppearance" :aria-checked="checked" @click="toggle">
    <VPIconSun class="sun" />
    <VPIconMoon class="moon" />
  </VPSwitch>
</template>

<style scoped>
.sun {
  opacity: 1;
}

.moon {
  opacity: 0;
}

.dark .sun {
  opacity: 0;
}

.dark .moon {
  opacity: 1;
}

.dark .VPSwitchAppearance :deep(.check) {
  /*rtl:ignore*/
  transform: translateX(18px);
}
</style>
