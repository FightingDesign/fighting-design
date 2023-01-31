<script lang="ts" setup></script>

<template>
  <f-link href="" type="default">默认链接</f-link>
  <f-link href="" type="primary">主要链接</f-link>
  <f-link href="" type="success">成功链接</f-link>
  <f-link href="" type="danger">危险链接</f-link>
  <f-link href="" type="warning">警告链接</f-link>

  <h1>1</h1>
  <h1>1</h1>
  <h1>1</h1>
  <h1>1</h1>
  <h1>1</h1>
  <h1>1</h1>
  <h1>1</h1>
  <h1>1</h1>

  <f-badge value="11" background="blue" color="red">
    <f-button>default</f-button>
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

  <h1>1</h1>

  <f-back-top :z-index="4444" :right="20">返回顶部</f-back-top>

  <f-aside width="70px">Aside1</f-aside>
</template>

<style lang="scss" scoped></style>
