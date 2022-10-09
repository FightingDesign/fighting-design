<script lang="ts" setup>
  import { ref } from 'vue'

  const option3 = ref([])
</script>

<template>
  <f-checkbox label="选项一" disabled />
  <br />
  <f-checkbox-group v-model="option3" disabled>
    <f-checkbox label="选项一" />
    <f-checkbox label="选项二" />
    <f-checkbox label="选项三" />
  </f-checkbox-group>
  <br />
  <f-checkbox-group v-model="option3">
    <f-checkbox label="选项一" />
    <f-checkbox label="选项二" disabled />
    <f-checkbox label="选项三" />
  </f-checkbox-group>
</template>
