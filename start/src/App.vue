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
    >
      pnpm add filling-design
    </f-button>
  </div>
</template>

<style lang="scss" scoped>
  .action {
    margin-top: 30px;
    display: flex;
    align-items: center;

    .code {
      margin-left: 17px;
      font-size: 21px;
    }
  }
</style>
