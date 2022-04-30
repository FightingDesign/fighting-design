<template>
  <!-- <f-button blob type="default">1212</f-button> -->
  <f-button blob type="primary">1212</f-button>
  <!-- <f-button blob type="success">1212</f-button>
  <f-button blob type="danger">1212</f-button>
  <f-button blob type="warning">1212</f-button>
  <f-button blob type="info">1212</f-button> -->
  <br />
  <br />
  <br />
  <f-button :round="isR" type="default" @click="aaa">1212</f-button>
  <f-button :round="isR" type="primary">1212</f-button>
  <f-button :round="isR" type="success">1212</f-button>
  <f-button :round="isR" type="danger">1212</f-button>
  <f-button :round="isR" type="warning">1212</f-button>
  <f-button :round="isR" type="info">1212</f-button>
</template>

<script lang="ts" setup>
// import { FButton } from '@fighting-design/components'
import fighting from '../../packages/fighting-design'
import { FButton } from '../../packages/fighting-design'
import { ref } from 'vue'

console.log(fighting)
console.log(FButton)
const isR = ref(true)

function aaa(e: EventInit) {
  console.log(11)
  isR.value = !isR.value
}
</script>
