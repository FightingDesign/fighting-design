<script lang="ts" setup>
import { VTCodeGroupTab } from '..';
import { useSlots, ref } from 'vue'
const activeTabIndex = ref(0)
const children = useSlots().default?.()
const tabs = children?.filter(({ type }) => type === VTCodeGroupTab)
</script>

<template>
  <div class="vt-code-group">
    <div class="vt-code-group-tabs">
      <div
        v-for="tab, idx in tabs"
        @click="activeTabIndex = idx"
        class="vt-code-group-tab"
        :class="{
          'vt-code-group-tab-active': activeTabIndex === idx
        }"
      >{{ tab.props?.label }}</div>
    </div>
    <div class="vt-code-group-contents">
      <component
        v-for="tab, idx in tabs"
        v-show="activeTabIndex === idx"
        :is="tab"
        :active="activeTabIndex === idx"
      />
    </div>
  </div>
</template>
