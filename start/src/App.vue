<script lang="ts" setup>
  const abc = {}
</script>

<template>
  <f-badge :show="false" dot :max="9" :value="10" type="default">
    <f-button>default</f-button>
  </f-badge>
  <f-badge value="11" type="danger">
    <f-button>danger</f-button>
  </f-badge>
  <f-badge value="12" type="primary">
    <f-button>primary</f-button>
  </f-badge>
  <f-badge value="13" type="success">
    <f-button>success</f-button>
  </f-badge>
  <f-badge value="14" type="warning">
    <f-button>warning</f-button>
  </f-badge>
  <f-badge value="14" type="info" dot>
    <f-button>info</f-button>
  </f-badge>

  <f-alert bold close type="default">默认提示信息</f-alert>
  <f-alert bold close type="primary">主要提示信息</f-alert>
  <f-alert bold close type="success">成功提示信息</f-alert>
  <f-alert bold close type="danger">危险提示信息</f-alert>
  <f-alert bold close type="warning">警告提示信息</f-alert>
  <f-alert bold close type="info">信息提示信息</f-alert>
  <h1>1</h1>
  <h1>1</h1>
  <h1>1</h1>
  <h1>1</h1>
  <h1>1</h1>
  <h1>1</h1>
  <h1>1</h1>
  <h1>1</h1>
  <h1>1</h1>

  <f-aside background="red">Aside</f-aside>

  <f-back-top>返回顶部</f-back-top>

  <!-- <f-alert simple type="default">默认提示信息</f-alert>
  <f-alert simple type="primary">主要提示信息</f-alert>
  <f-alert simple type="success">成功提示信息</f-alert>
  <f-alert simple type="danger">危险提示信息</f-alert>
  <f-alert simple type="warning">警告提示信息</f-alert>
  <f-alert simple type="info">信息提示信息</f-alert> -->
</template>

<style lang="scss" scoped></style>
