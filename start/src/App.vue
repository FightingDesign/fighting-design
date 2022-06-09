<template>
  <div style="margin-top: 10px; margin-left: 20px">
    <f-switch
      v-model="value"
      activeValue="a"
      inActiveValue="b"
      inActiveColor="#13ce66"
      activeText="右侧文字"
      inActiveText="左侧文字"
      style="margin-top: 10px"
    ></f-switch>

    <f-switch
      v-model="value"
      activeValue="a"
      inActiveValue="b"
      size="middle"
      inActiveColor="#13ce66"
      activeText="右侧文字"
      inActiveText="左侧文字"
      style="margin-top: 10px"
    ></f-switch>

    <f-switch
      v-model="value"
      activeValue="a"
      inActiveValue="b"
      size="large"
      inActiveColor="#13ce66"
      activeText="右侧文字"
      inActiveText="左侧文字"
      style="margin-top: 10px"
    ></f-switch>
  </div>
</template>

<script lang="ts" setup>
  import { ref } from 'vue'

  const value = ref('a')
</script>

<style scoped></style>
