<template>
  <transition name="fade">
    <div v-if="open" ref="screen" class="VPNavScreen">
      <div class="container">
        <v-p-nav-screen-menu class="menu" />
        <v-p-nav-screen-appearance class="appearance" />
        <v-p-nav-screen-social-links class="social-links" />
      </div>
    </div>
  </transition>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import VPNavScreenMenu from './VPNavScreenMenu.vue'
  import VPNavScreenAppearance from './VPNavScreenAppearance.vue'
  import VPNavScreenSocialLinks from './VPNavScreenSocialLinks.vue'

  defineProps<{
    open: boolean
  }>()

  const screen = ref<HTMLElement | null>(null)
</script>

<style scoped>
  .VPNavScreen {
    position: fixed;
    top: calc(var(--vt-nav-height) + var(--vt-banner-height, 0px));
    right: 0;
    bottom: 0;
    left: 0;
    /* padding: 0 32px; */
    width: 100%;
    background-color: var(--vt-c-bg);
    transition: background-color 0.5s;
    overflow-y: auto;
  }

  .VPNavScreen.fade-enter-active,
  .VPNavScreen.fade-leave-active {
    transition: opacity 0.25s;
  }

  .VPNavScreen.fade-enter-active .container,
  .VPNavScreen.fade-leave-active .container {
    transition: transform 0.25s ease;
  }

  .VPNavScreen.fade-enter-from,
  .VPNavScreen.fade-leave-to {
    opacity: 0;
  }

  .VPNavScreen.fade-enter-from .container,
  .VPNavScreen.fade-leave-to .container {
    transform: translateY(-8px);
  }

  @media (min-width: 768px) {
    .VPNavScreen {
      display: none;
    }
  }

  .container {
    margin: 0 auto;
    padding: 24px 0 96px;
    max-width: 288px;
  }

  .menu + .appearance {
    margin-top: 24px;
  }

  .menu + .social-links {
    margin-top: 16px;
  }

  .appearance + .social-links {
    margin-top: 12px;
  }
</style>
