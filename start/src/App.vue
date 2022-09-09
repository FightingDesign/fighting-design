<script lang="ts" setup>
  import { ref } from 'vue'

  const radio = ref('1')
  // const change = (): void => {
  //   console.log(radio.value)
  // }
</script>

<template>
  <h1>{{ radio }}</h1>
  <f-radio-group
    v-for="(item, index) in ['large', 'middle', 'small', 'mini']"
    :key="index"
    v-model="radio"
    border
    :size="item"
  >
    <f-radio label="1"> 备选项1 </f-radio>
    <f-radio label="2"> 备选项2 </f-radio>
    <f-radio label="3"> 备选项3 </f-radio>
  </f-radio-group>
  <br>
  <f-radio v-model="radio" label="1"> 备选项1 </f-radio>
  <f-radio v-model="radio" label="2"> 备选项2 </f-radio>
  <f-radio v-model="radio" label="3"> 备选项3 </f-radio>
</template>
