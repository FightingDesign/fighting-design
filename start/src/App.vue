<script lang="ts" setup>
  import { ref } from 'vue'

  const num = ref(10)

  const sun = () => {
    if (num.value > 0) {
      num.value -= 10
    }
  }

  const add = () => {
    if (num.value < 100) {
      num.value += 10
    }
  }
</script>

<template>
  <f-progress type="default" :percentage="num" state="circle" :show-text="false" />
  <f-progress type="primary" :percentage="num" />
  <f-progress type="success" :percentage="num" />
  <f-progress type="danger" :percentage="num" />
  <f-progress type="warning" :percentage="num" />
  <f-progress type="info" :percentage="num" />

  <f-button-group>
    <f-button simple round type="primary" :on-click="sun">减少</f-button>
    <f-button simple round type="primary" :on-click="add">增加</f-button>
  </f-button-group>
</template>
