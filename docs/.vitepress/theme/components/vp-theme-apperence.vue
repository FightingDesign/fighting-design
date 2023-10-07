<script lang="ts" setup>
  import { ref, onMounted, watch, nextTick } from 'vue'
  import { useData, inBrowser } from 'vitepress'
  import VPSwitch from 'vitepress/dist/client/theme-default/components/VPSwitch.vue'
  import VPIconSun from 'vitepress/dist/client/theme-default/components/icons/VPIconSun.vue'
  import VPIconMoon from 'vitepress/dist/client/theme-default/components/icons/VPIconMoon.vue'
  import { APPEARANCE_KEY } from 'vitepress/dist/client/shared'

  const { site, isDark } = useData()
  const checked = ref(false)
  const toggle = inBrowser ? useAppearance() : () => {}

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

    query.onchange = e => {
      if (userPreference === 'auto') {
        setClass((isDark = e.matches))
      }
    }

    function themeChange() {
      setClass((isDark = !isDark))
      userPreference = isDark
        ? query.matches
          ? 'auto'
          : 'dark'
        : query.matches
        ? 'light'
        : 'auto'
      localStorage.setItem(APPEARANCE_KEY, userPreference)
    }

    function toggle(event?: MouseEvent) {
      const isAppearanceTransition =
        // @ts-expect-error experimental API
        document.startViewTransition &&
        !window.matchMedia('(prefers-reduced-motion: reduce)').matches
      if (!isAppearanceTransition || !event) {
        themeChange()
        return
      }
      const x = event.clientX
      const y = event.clientY
      const endRadius = Math.hypot(
        Math.max(x, innerWidth - x),
        Math.max(y, innerHeight - y)
      )

      // 不支持快照 api 直接切换
      // @ts-expect-error: Transition API
      const transition = document.startViewTransition(async () => {
        themeChange()
        await nextTick()
      })
      transition.ready.then(() => {
        const clipPath = [
          `circle(0px at ${x}px ${y}px)`,
          `circle(${endRadius}px at ${x}px ${y}px)`
        ]
        document.documentElement.animate(
          {
            clipPath: isDark ? [...clipPath].reverse() : clipPath
          },
          {
            duration: 400,
            easing: 'ease-out',
            pseudoElement: isDark
              ? '::view-transition-old(root)'
              : '::view-transition-new(root)'
          }
        )
      })
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

      const _ = window.getComputedStyle(css).opacity
      document.head.removeChild(css)
    }

    return toggle
  }

  watch(checked, newIsDark => {
    isDark.value = newIsDark
  })
</script>

<template>
  <VPSwitch
    title="toggle dark mode"
    class="VPSwitchAppearance"
    :aria-checked="checked"
    @click="toggle"
  >
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
