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
  <br />
  <br />
  <f-button block type="default">登陆</f-button>
  <f-button block type="primary">登陆</f-button>
  <f-button block type="success">登陆</f-button>
  <f-button block type="danger">登陆</f-button>
  <f-button block type="warning">登陆</f-button>
  <f-button block type="info">登陆</f-button>
  <br />
  <br />
  <f-button text border type="default">1212</f-button>
  <f-button text border type="primary">1212</f-button>
  <f-button text border type="success">1212</f-button>
  <f-button text border type="danger">1212</f-button>
  <f-button text border type="warning">1212</f-button>
  <f-button text border type="info">1212</f-button>
  <br />
  <br />
  <f-button border text type="default">1212</f-button>
  <f-button border text>1212</f-button>
  <f-button border text>1212</f-button>
  <f-button border text >1212</f-button>
  <f-button border text type="warning">1212</f-button>
  <f-button border text type="info">1212</f-button>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const isR = ref(true)

function aaa(e: EventInit) {
  console.log(11)
  isR.value = !isR.value
}
</script>
