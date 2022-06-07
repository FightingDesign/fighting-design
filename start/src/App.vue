<template>
  <!-- <f-button
    circle
    size="large"
    type="primary"
    left-icon="f-icon-default-template"
  /> -->

  <f-button size="large" type="primary">主要按钮</f-button>
  <f-button type="success">成功按钮</f-button>
  <f-button size="small" type="danger">危险按钮</f-button>
  <f-button size="mini" type="warning">警告按钮</f-button>

  <br />

  <f-button type="success" loading>普通禁用</f-button>
  <f-button loading simple type="primary">简约禁用</f-button>
  <f-button loading text type="success">文字禁用</f-button>
  <f-button text type="success">文字禁用</f-button>

  <!-- <f-button circle size="small" type="danger">
    <f-icon icon="f-icon-default-template"></f-icon>
  </f-button>
  <f-button circle size="mini" type="warning">
    <f-icon icon="f-icon-default-template"></f-icon>
  </f-button> -->
  <br />
  <f-button text loading-icon="f-icon-loading3" round>默认按钮</f-button>
  <f-button type="primary">主要按钮</f-button>
  <f-button text type="danger">危险按钮</f-button>
  <f-button text type="warning">警告按钮</f-button>

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
