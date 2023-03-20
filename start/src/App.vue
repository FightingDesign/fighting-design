<script lang="ts" setup>
  import { ref } from 'vue'

  const radio1 = ref('1')
  const rad = ref(true)

  const aaa = () => {
    console.log('change')
  }
</script>

<template>
  <h3>{{ radio1 }}</h3>
  <f-radio-group v-model="radio1">
    <f-radio label="1">备选项1</f-radio>
    <f-radio label="2">备选项2</f-radio>
    <f-radio label="3">备选项3</f-radio>
  </f-radio-group>

  <br />

  {{ rad }}
  <br />

  <f-radio v-model="rad" :label="1" :on-change="aaa">备选项3</f-radio>
  <f-radio v-model="rad" :label="2" :on-change="aaa">备选项3</f-radio>
  <f-radio v-model="rad" :label="3" :on-change="aaa">备选项3</f-radio>
  <f-radio v-model="rad" :label="4" :on-change="aaa">备选项3</f-radio>
</template>
