<script lang="ts" setup>
  import { ref } from 'vue'

  const option3 = ref(['选项一'])
  const radio6 = ref('1')
</script>

<template>
  <f-radio-group v-model="radio6" :column-gap="120">
    <f-radio label="1">备选项1</f-radio>
    <f-radio label="2">备选项2</f-radio>
    <f-radio label="3">备选项3</f-radio>
  </f-radio-group>
  <br />
  <f-checkbox-group v-model="option3" border>
    <f-checkbox label="备选项1" />
    <f-checkbox label="备选项2" />
    <f-checkbox label="备选项3" />
  </f-checkbox-group>
  <br />
  <f-checkbox-group v-model="option3">
    <f-checkbox label="选项一" />
    <f-checkbox label="选项二" disabled />
    <f-checkbox label="选项三" />
  </f-checkbox-group>
</template>
