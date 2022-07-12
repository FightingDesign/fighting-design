<template>
  <f-button :ripples="false" type="default">默认按钮</f-button>
  <f-button :ripples="false" type="primary">主要按钮</f-button>
  <f-button :ripples="false" type="success">成功按钮</f-button>
  <f-button :ripples="false" type="danger">危险按钮</f-button>
  <f-button :ripples="false" type="warning">警告按钮</f-button>

  <br />

  <f-button :ripples="false" simple type="default">默认按钮</f-button>
  <f-button :ripples="false" simple type="primary">主要按钮</f-button>
  <f-button :ripples="false" simple type="success">成功按钮</f-button>
  <f-button :ripples="false" simple type="danger">危险按钮</f-button>
  <f-button :ripples="false" simple type="warning">警告按钮</f-button>

  <br />
  <f-button round type="default">默认按钮</f-button>
  <f-button round type="primary">主要按钮</f-button>
  <f-button round type="success">成功按钮</f-button>
  <f-button round type="danger">危险按钮</f-button>
  <f-button round type="warning">警告按钮</f-button>

  <f-button round simple type="default">默认按钮</f-button>
  <f-button round simple type="primary">主要按钮</f-button>
  <f-button round simple type="success">成功按钮</f-button>
  <f-button round simple type="danger">危险按钮</f-button>
  <f-button round simple type="warning">警告按钮</f-button>

  <f-button disabled type="default">默认按钮</f-button>
  <f-button disabled type="primary">主要按钮</f-button>
  <f-button disabled type="success">成功按钮</f-button>
  <f-button disabled type="danger">危险按钮</f-button>
  <f-button disabled type="warning">警告按钮</f-button>

  <f-button loading type="default">默认按钮</f-button>
  <f-button loading loading-icon="f-icon-loading1" type="primary">
    主要按钮
  </f-button>
  <f-button loading loading-icon="f-icon-loading2" type="success">
    成功按钮
  </f-button>
  <f-button loading loading-icon="f-icon-loading3" type="danger">
    危险按钮
  </f-button>
  <f-button loading loading-icon="f-icon-loading4" type="warning">
    警告按钮
  </f-button>

  <br />

  <f-button size="large" type="primary">大型按钮</f-button>
  <f-button size="middle" type="success">中型按钮</f-button>
  <f-button size="small" type="danger">小型按钮</f-button>
  <f-button size="mini" type="warning">迷你按钮</f-button>
  <span>哈哈哈</span>
  <br />
  <br />
  <f-button text type="default">默认按钮</f-button>
  <f-button text type="primary">主要按钮</f-button>
  <f-button text type="success">成功按钮</f-button>
  <f-button text type="danger">危险按钮</f-button>
  <f-button text type="warning">警告按钮</f-button>

  <f-button text round type="default">默认按钮</f-button>
  <f-button text round type="primary">主要按钮</f-button>
  <f-button text round type="success">成功按钮</f-button>
  <f-button text round type="danger">危险按钮</f-button>
  <f-button text round type="warning">警告按钮</f-button>
</template>

<script setup>
  import { ref } from 'vue'

  const show = ref(false)
  const visible1 = ref(false)
</script>

<style scoped></style>
