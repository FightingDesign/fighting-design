<template>
  <f-button
    size="large"
    linearGradient="#12c2e9, #c471ed, #f64f59"
    shadow="20px 20px 60px #bebebe,-20px -20px 60px #ffffff;"
  >
    1212
  </f-button>
  <!-- linear-gradient(to right, #0b486b, #f56217); -->
  <!-- <f-button size="middle" @click="aaa" autofocus>1212</f-button>
  <f-button size="small" disabled>1212</f-button>
  <f-button size="mini">1212</f-button> -->
</template>

<script lang="ts" setup>
import { FButton } from '@fighting-design/components'

function aaa(e: EventInit) {
  console.log(11)
}
</script>
