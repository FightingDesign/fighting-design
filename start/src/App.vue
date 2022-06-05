<template>
  <f-button-group size="large">
    <f-button round type="primary">左边的</f-button>
    <f-button round type="primary">中间的</f-button>
    <f-button round type="primary">右边的</f-button>
  </f-button-group>

  <f-button-group size="middle">
    <f-button round type="primary">左边的</f-button>
    <f-button round type="primary">中间的</f-button>
    <f-button round type="primary">右边的</f-button>
  </f-button-group>

  <f-button-group size="small">
    <f-button round type="primary">左边的</f-button>
    <f-button round type="primary">中间的</f-button>
    <f-button round type="primary">右边的</f-button>
  </f-button-group>

  <f-button-group size="mini">
    <f-button round type="primary" leftIcon="f-icon-email">左边的</f-button>
    <f-button round type="primary">中间的</f-button>
    <f-button round type="primary">右边的</f-button>
  </f-button-group>

  <f-divider
    text-aliagn="x"
    style="color: darkmagenta; margin: '2rem 0'; border-bottom: 1px dotted darkmagenta"
    >22</f-divider>

  <f-divider direction="vertical" />
  <f-divider direction="vertical" :style="{ margin: '0 4rem', borderLeftColor: 'red' }" />
  <f-divider direction="vertical" />
</template>

<script lang="ts" setup></script>

<style scoped></style>
