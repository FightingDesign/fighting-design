<script lang="ts" setup>
import { ref } from 'vue';
const a = ref(2)
let count = 0
let textarr = ['一','二','三','四','五']
  // setInterval(() => {
  //   count+=0.5
  //   a.value = count
  //   console.log('a.value',a.value);
  // }, 1000);
</script>

<template>
  <f-rate 
    :max="10" 
    v-model="a" 
    :size="50" 
    effect-color="red" 
    double-clear 
    :text-arr="textarr" 
    invalid-color="green"
    :text-show="true"
    :text-size="30"
   />
</template>

<style lang="scss" scoped>

</style>
