<script lang="ts" setup>
  import { ref } from 'vue'

  const radio1 = ref('1')
  // const change = (): void => {
  //   console.log(radio.value)
  // }
</script>

<template>
  <f-radio-group v-model="radio1">
    <f-radio label="1">备选项1</f-radio>
    <f-radio label="2">备选项2</f-radio>
    <f-radio label="3">备选项3</f-radio>
  </f-radio-group>

  <!-- <h1>{{ radio }}</h1>
  <f-radio-group
    v-for="(item, index) in ['large', 'middle', 'small', 'mini']"
    :key="index"
    v-model="radio"
    border
    circle
    :size="item"
  >
    <f-radio label="1" disabled> 备选项1 </f-radio>
    <f-radio label="2"> 备选项2 </f-radio>
    <f-radio label="3"> 备选项3 </f-radio>
  </f-radio-group>
  <br>
  <f-radio v-model="radio" label="1" disabled> 备选项1 </f-radio>
  <f-radio v-model="radio" label="2"> 备选项2 </f-radio>
  <f-radio v-model="radio" label="3"> 备选项3 </f-radio> -->

  <f-watermark content="机密文件" :height="100" :width="130">
    <f-card title="绝对机密">
      <f-avatar round src="https://tianyuhao.cn/images/auto/my.jpg" />
      <f-text block>这是一个重要的文件</f-text>
    </f-card>
  </f-watermark>
</template>

<style>
  .f-watermark {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 500px;
  }
  .f-card {
    width: 240px;
  }
</style>
