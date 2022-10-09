<script lang="ts" setup>
  import { ref } from 'vue'

  const option2 = ref(['备选项1'])

  const radio1 = ref('1')
</script>

<template>
  <f-checkbox-group v-model="option2">
    <f-checkbox label="备选项1" />
    <f-checkbox label="备选项2" />
    <f-checkbox label="备选项3" />
  </f-checkbox-group>

  <!-- <br /> -->

  <f-radio-group v-model="radio1">
    <f-radio label="1">备选项1</f-radio>
    <f-radio label="2">备选项2</f-radio>
    <f-radio label="3">备选项3</f-radio>
  </f-radio-group>
</template>
