<script lang="ts" setup>
  import { ref } from 'vue'

  const option4 = ref([])
</script>

<template>
  {{ option4 || '' }}

  <br />

  <f-checkbox-group v-model="option4" size="large" column-gap="30px">
    <f-checkbox label="选项一" />
    <f-checkbox label="选项二选项二选项二" />
    <f-checkbox label="选项三" />
  </f-checkbox-group>
</template>
