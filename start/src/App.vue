<script lang="ts" setup>
  import { ref } from 'vue'
  import type { TabsTrigger } from 'fighting-design'

  const trigger = ref<TabsTrigger>('click')
</script>

<template>
  <f-tabs :trigger="trigger">
    <f-tabs-pane label="如烟">
      <p>七岁的那一年，抓住那只蝉，以为能抓住夏天；</p>
      <p>十七岁的那年，吻过他的脸，就以为和他能永远。</p>
    </f-tabs-pane>
    <f-tabs-pane label="盛夏光年">
      <p>长大 难道是人必经的溃烂。</p>
    </f-tabs-pane>
    <f-tabs-pane label="我心中尚未崩坏的地方">
      <p>就算会有一天，没人与我合唱，至少在我的心中，还有个尚未崩坏的地方。</p>
    </f-tabs-pane>
  </f-tabs>

  <div>
    触发方式：
    <f-radio-group v-model="trigger">
      <f-radio label="click">click</f-radio>
      <f-radio label="hover">hover</f-radio>
    </f-radio-group>
  </div>
</template>
