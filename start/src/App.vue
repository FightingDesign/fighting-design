<script lang="ts" setup>
  import { ref } from 'vue'

  const radio = ref('1')
  // const change = (): void => {
  //   console.log(radio.value)
  // }
</script>

<template>
  <h1>{{ radio }}</h1>
  <f-radio-group v-model="radio" vertical>
    <f-radio label="1" disabled> 备选项1 </f-radio>
    <f-radio label="2"> 备选项2 </f-radio>
    <f-radio label="3"> 备选项3 </f-radio>
  </f-radio-group>
</template>
