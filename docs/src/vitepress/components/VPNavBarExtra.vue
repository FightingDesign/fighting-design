<script lang="ts" setup>
import { computed } from 'vue'
import { VTFlyout, VTSwitchAppearance, VTSocialLinks } from '../../core'
import { useConfig } from '../composables/config'

const { config } = useConfig()

const hasContent = computed(() => {
  return config.value.appearance || config.value.socialLinks
})
</script>

<template>
  <VTFlyout v-if="hasContent" class="VPNavBarExtra" label="extra navigation">
    <div v-if="config.appearance" class="vt-menu-group">
      <div class="vt-menu-item item">
        <p class="vt-menu-label">Appearance</p>
        <div class="vt-menu-action action">
          <VTSwitchAppearance />
        </div>
      </div>
    </div>

    <div v-if="config.socialLinks" class="vt-menu-group">
      <div class="vt-menu-item item">
        <VTSocialLinks
          class="social-links"
          size="small"
          :links="config.socialLinks"
        />
      </div>
    </div>
  </VTFlyout>
</template>

<style scoped>
.VPNavBarExtra {
  display: none;
}

@media (min-width: 768px) {
  .VPNavBarExtra {
    display: block;
  }
}

@media (min-width: 1280px) {
  .VPNavBarExtra {
    display: none;
  }
}

.item {
  display: flex;
  align-items: center;
}

.action {
  margin-right: -2px;
}

.social-links {
  margin: -4px -8px;
}
</style>
