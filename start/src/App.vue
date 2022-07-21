<template>
  <f-button type="primary" @click="onShow('left')">从左往右开</f-button>
  <f-button type="primary" @click="onShow('right')">从右往左开</f-button>
  <f-button type="primary" @click="onShow('top')">从上往下开</f-button>
  <f-button type="primary" @click="onShow('bottom')">从下往上开</f-button>

  <f-drawer title="Title" :direction="direction" v-model:visible="visible1">
    fighting-design
  </f-drawer>

  <!-- <f-mask v-model></f-mask> -->
</template>

<script setup>
  import { ref } from 'vue'

  const visible1 = ref(false)
  const direction = ref('right')

  const onShow = (dir) => {
    direction.value = dir
    visible1.value = true
  }
</script>
