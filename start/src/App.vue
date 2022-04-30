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
  <f-button text border disabled type="default">1212</f-button>
  <f-button text border disabled type="primary">1212</f-button>
  <f-button text border disabled type="success">1212</f-button>
  <f-button text border disabled type="danger">1212</f-button>
  <f-button text border disabled type="warning">1212</f-button>
  <f-button text border disabled type="info">1212</f-button>
  <br />
  <br />
  <f-button border text type="default">1212</f-button>
  <f-button border text>1212</f-button>
  <f-button border text>1212</f-button>
  <f-button border text>1212</f-button>
  <f-button border text type="warning">1212</f-button>
  <f-button border text type="info">1212</f-button>
  <br />
  <br />
  <f-button size="large" type="primary">1212</f-button>
  <f-button size="middle" type="primary">1212</f-button>
  <f-button size="small" type="primary">1212</f-button>
  <f-button size="mini" type="primary">1212</f-button>
  <br />
  <f-button size="large" type="success">1212</f-button>
  <f-button size="middle" type="success">1212</f-button>
  <f-button size="small" type="success">1212</f-button>
  <f-button size="mini" type="success">1212</f-button>
  <br />
  <f-button size="large" type="danger">1212</f-button>
  <f-button size="middle" type="danger">1212</f-button>
  <f-button size="small" type="danger">1212</f-button>
  <f-button size="mini" type="danger">1212</f-button>
  <br />
  <f-button size="large" type="warning">1212</f-button>
  <f-button size="middle" type="warning">1212</f-button>
  <f-button size="small" type="warning">1212</f-button>
  <f-button size="mini" type="warning">1212</f-button>

  <br />
  <f-button size="large" type="info">1212</f-button>
  <f-button size="middle" type="info">1212</f-button>
  <f-button size="small" type="info">1212</f-button>
  <f-button size="mini" type="info">1212</f-button>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const isR = ref(true)

function aaa(e: EventInit) {
  console.log(11)
  isR.value = !isR.value
}
</script>
