<template>
  <f-checkbox-group v-model="option4">
    <f-checkbox label="选项一" disabled />
    <f-checkbox label="选项二" />
    <f-checkbox label="选项三" />
  </f-checkbox-group>

  <br />
  <br />

  <f-checkbox-group v-model="option4" border disabled>
    <f-checkbox label="选项一" />
    <f-checkbox label="选项二" />
    <f-checkbox label="选项三" />
  </f-checkbox-group>
</template>

<script lang="ts" setup>
  import { ref } from 'vue'

  const option4 = ref(['选项一', '选项二'])
  const radio4 = ref('1')
</script>
