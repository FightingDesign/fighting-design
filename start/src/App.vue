<script lang="ts" setup>
  import { ref } from 'vue'

  const radio2 = ref('1')

  const option4 = ref([])
</script>

<template>
  <f-radio-group v-model="radio2" background>
    <f-radio label="1">备选项1</f-radio>
    <f-radio label="2">备选项2</f-radio>
    <f-radio label="3">备选项3</f-radio>
  </f-radio-group>

  <br />
  <br />

  <f-checkbox-group v-model="option4" background>
    <f-checkbox label="选项一" />
    <f-checkbox label="选项二" />
    <f-checkbox label="选项三" />
  </f-checkbox-group>
</template>
