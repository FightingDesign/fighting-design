<script lang="ts" setup>
import { useConfig } from '../composables/config'
import VPNavScreenMenuLink from './VPNavScreenMenuLink.vue'
import VPNavScreenMenuGroup from './VPNavScreenMenuGroup.vue'

const { config } = useConfig()
</script>

<template>
  <nav v-if="config.nav" class="VPNavScreenMenu">
    <template v-for="item in config.nav" :key="item.text">
      <VPNavScreenMenuLink
        v-if="'link' in item"
        :text="item.text"
        :link="item.link"
      />
      <VPNavScreenMenuGroup
        v-else
        :text="item.text || ''"
        :items="item.items"
      />
    </template>
  </nav>
</template>
