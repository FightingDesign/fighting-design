<script lang="ts" setup></script>

<template>
  <!-- <f-trigger trigger="hover">
    <f-button type="primary">hover 触发</f-button>

    <template #content>
      <f-empty content="在这里，后续提供更多服务" />
    </template>
  </f-trigger> -->

  <f-trigger trigger="hover" style="margin-left: 120px">
    <f-button type="primary">click 触发</f-button>

    <template #content>
      <f-empty content="在这里，后续提供更多服务" />
    </template>
  </f-trigger>
</template>

<style lang="scss" scoped></style>
