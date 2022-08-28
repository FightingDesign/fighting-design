<script lang="ts" setup></script>

<template>
  <div class="action">
    <f-button type="primary" size="large" href="/docs/install">
      开始使用
    </f-button>
    <f-button
      class="code"
      type="primary"
      size="large"
      blob
      simple
      data-clipboard-text="npm i filling-design"
      @click="copyCode('.code')"
    >
      pnpm add filling-design
    </f-button>
  </div>
</template>

<style scoped>
  #box {
    width: 90px;
    border: 1px solid red;
  }
</style>
