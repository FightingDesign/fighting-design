<template>
  <!-- <f-textarea v-model="value5" placeholder="禁止拉伸" resize="none" auto-height /> -->
  <!-- <f-textarea v-model="value5" placeholder="禁止拉伸" resize="none" /> -->
  <f-textarea clear v-model="value6" placeholder="随意拉伸" resize="both" />
  <f-textarea v-model="value7" placeholder="水平拉伸" resize="horizontal" />
  <f-textarea v-model="value8" placeholder="垂直拉伸" resize="vertical" />
</template>

<script lang="ts" setup>
  import { ref } from 'vue'

  const value5 = ref('none 禁止拉伸')
  const value6 = ref('both 随意拉伸')
  const value7 = ref('horizontal 水平拉伸')
  const value8 = ref('vertical 垂直拉伸')
</script>
