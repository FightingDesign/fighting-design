<script lang="ts" setup>
  import { ref } from 'vue'

  const act = ref('333')
</script>

<template>
  {{ act }}
  <f-tabs v-model="act" position="top" justify-content="flex-end" trigger="click">
    <f-tabs-item label="如烟">
      <p>七岁的那一年，抓住那只蝉，以为能抓住夏天；</p>
      <p>十七岁的那年，吻过他的脸，就以为和他能永远。</p>
    </f-tabs-item>
    <f-tabs-item label="盛夏光年" name="222">
      <p>长大 难道是人必经的溃烂。</p>
    </f-tabs-item>
    <f-tabs-item label="我心中尚未崩坏的地方" name="333">
      <p>就算会有一天，没人与我合唱，至少在我的心中，还有个尚未崩坏的地方。</p>
    </f-tabs-item>

    <f-tabs-item label="555" name="54353">
      <p>打扫打扫打扫</p>
    </f-tabs-item>
  </f-tabs>
</template>

<style lang="scss" scoped></style>
