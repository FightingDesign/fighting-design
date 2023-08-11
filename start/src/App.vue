<script lang="ts" setup>
  import { ref } from 'vue'

  const option4 = ref([])
</script>

<template>
  <f-checkbox-group v-model="option4" background size="large">
    <f-checkbox label="选项一" />
    <f-checkbox label="选项二" />
    <f-checkbox label="选项三" />
  </f-checkbox-group>

  <f-checkbox-group v-model="option4" background>
    <f-checkbox label="选项一" />
    <f-checkbox label="选项二" />
    <f-checkbox label="选项三" />
  </f-checkbox-group>

  <f-checkbox-group v-model="option4" background size="small">
    <f-checkbox label="选项一" />
    <f-checkbox label="选项二" />
    <f-checkbox label="选项三" />
  </f-checkbox-group>

  <f-checkbox-group v-model="option4" background size="mini">
    <f-checkbox label="选项一" />
    <f-checkbox label="选项二" />
    <f-checkbox label="选项三" />
  </f-checkbox-group>
</template>
