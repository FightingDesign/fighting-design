<template>
  <br />
  <br />
  <br />
  <br />
  <br />
  <f-tooltip content="这是一段提示" position="top">
    <button>top</button>
  </f-tooltip>
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <f-tooltip content="这是一段提示" position="bottom">
    <button>bottom</button>
  </f-tooltip>
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <f-tooltip content="这是一段提示" position="right">
    <button>right</button>
  </f-tooltip>
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <f-tooltip content="这是一段提示" position="left">
    <button>left</button>
  </f-tooltip>
</template>

<script setup>
import { ref } from 'vue'

const onOff = ref(false)
const onOff2 = ref(false)

const onClick = () => {
  onOff.value = !onOff.value
}
</script>

<style scoped>
.f-tooltip {
  margin-left: 120px;
}
</style>
