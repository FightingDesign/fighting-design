<template>
  <f-button disabled type="default">1212</f-button>
  <f-button disabled type="primary">1212</f-button>
  <f-button disabled type="success">1212</f-button>
  <f-button disabled type="danger">1212</f-button>
  <f-button disabled type="warning">1212</f-button>
  <f-button disabled type="info">1212</f-button>
  <br />
  <f-button round autofocus disabled type="default" @click="aaa">1212</f-button>
  <f-button round type="primary">1212</f-button>
  <f-button round type="success">1212</f-button>
  <f-button round type="danger">1212</f-button>
  <f-button round type="warning">1212</f-button>
  <f-button round type="info">1212</f-button>
</template>

<script lang="ts" setup>
import { FButton } from '@fighting-design/components'

function aaa(e: EventInit) {
  console.log(11)
}
</script>
