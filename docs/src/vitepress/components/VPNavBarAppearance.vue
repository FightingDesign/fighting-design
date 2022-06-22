<template>
  <div v-if="config.appearance" class="VPNavBarAppearance">
    <v-t-switch-appearance />
  </div>
</template>

<script lang="ts" setup>
  import { VTSwitchAppearance } from '../../core'
  import { useConfig } from '../composables/config'

  const { config } = useConfig()
</script>

<style scoped>
  .VPNavBarAppearance {
    display: none;
  }

  @media (min-width: 1280px) {
    .VPNavBarAppearance {
      display: block;
    }
  }
</style>
