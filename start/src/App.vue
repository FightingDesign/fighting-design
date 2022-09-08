<script lang="ts" setup>import { ref } from 'vue';

const radio = ref('1')
const change = (): void => {
  console.log(radio.value);
}
</script>

<template>
  <f-alert>123</f-alert>
  <f-button>123</f-button>
  <!-- {{radio}} -----app:
  <f-radio v-model="radio" label="1" @change="change">
    备选项
  </f-radio> -->
  {{radio}}
  <f-radio-group v-model="radio" text-color="red">
    <f-radio label="1">
      备选项
    </f-radio>
    <f-radio label="2">
      备选项2
    </f-radio>
  </f-radio-group>
</template>

<style lang="scss" scoped>
</style>
