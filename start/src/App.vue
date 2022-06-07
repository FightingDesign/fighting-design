<template>
  <f-button loading loading-icon="f-icon-loading3" round>默认按钮</f-button>
  <f-button loading round type="primary" autofocus @click="add"
    >主要按钮</f-button
  >
  <f-button loading round type="success">成功按钮</f-button>
  <f-button loading round type="danger">危险按钮</f-button>
  <f-button loading round type="warning">警告按钮</f-button>

  <f-button round simple>默认按钮</f-button>
  <f-button round simple type="primary">主要按钮</f-button>
  <f-button round simple type="success">成功按钮</f-button>
  <f-button round simple type="danger">危险按钮</f-button>
  <f-button round simple type="warning">警告按钮</f-button>

  <f-button round block blob disabled simple>默认按钮</f-button>
  <f-button round block blob disabled simple type="primary">主要按钮</f-button>
  <f-button round block blob disabled simple type="success">成功按钮</f-button>
  <f-button round block blob disabled simple type="danger">危险按钮</f-button>
  <f-button round block blob disabled simple type="warning">警告按钮</f-button>
</template>

<script lang="ts" setup>
  function add() {
    console.log('123')
  }
</script>

<style scoped></style>
