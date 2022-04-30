<template>
  <f-button type="default">1212</f-button>
  <f-button type="primary">1212</f-button>
  <f-button type="success">1212</f-button>
  <f-button type="danger">1212</f-button>
  <f-button type="warning">1212</f-button>
  <f-button type="info">1212</f-button>
  <br />
  <br />
  <f-button simple type="default">1212</f-button>
  <f-button simple type="primary">1212</f-button>
  <f-button simple type="success">1212</f-button>
  <f-button simple type="danger">1212</f-button>
  <f-button simple type="warning">1212</f-button>
  <f-button simple type="info">1212</f-button>
  <br />
  <br />
  <f-button disabled type="default">1212</f-button>
  <f-button disabled type="primary">1212</f-button>
  <f-button disabled type="success">1212</f-button>
  <f-button disabled type="danger">1212</f-button>
  <f-button disabled type="warning">1212</f-button>
  <f-button disabled type="info">1212</f-button>
  <br />
  <br />
  <f-button disabled simple type="default">1212</f-button>
  <f-button disabled simple type="primary">1212</f-button>
  <f-button disabled simple type="success">1212</f-button>
  <f-button disabled simple type="danger">1212</f-button>
  <f-button disabled simple type="warning">1212</f-button>
  <f-button disabled simple type="info">1212</f-button>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const isR = ref(true)

function aaa(e: EventInit) {
  console.log(11)
  isR.value = !isR.value
}
</script>
