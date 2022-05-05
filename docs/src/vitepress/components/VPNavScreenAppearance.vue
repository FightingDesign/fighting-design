<script lang="ts" setup>
import { VTSwitchAppearance } from '../../core'
import { useConfig } from '../composables/config'

const { config } = useConfig()
</script>

<template>
  <div v-if="config.appearance" class="VPNavScreenAppearance">
    <p class="text">Appearance</p>
    <VTSwitchAppearance />
  </div>
</template>

<style scoped>
.VPNavScreenAppearance {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 8px;
  padding: 12px 14px 12px 16px;
  background-color: var(--vt-c-bg-soft);
  transition: background-color 0.5s;
}

.text {
  line-height: 24px;
  font-size: 12px;
  font-weight: 500;
  color: var(--vt-c-text-2);
  transition: color 0.5s;
}
</style>
