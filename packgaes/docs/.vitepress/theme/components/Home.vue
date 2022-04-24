<template>
  <div id="home">
    <h3 class="title">Fighting Design</h3>
    <h1 class="title_2">是一个用 TypeScript + Template 编写的 Vue3 组件库。</h1>

    <p class="content">
      <strong>Fighting Design</strong> 是一个简洁而又轻量级的
      <strong>Vue3</strong>
      组件库，为开发者、设计师和产品经历准备。有希望开发者可以借用
      <strong>Fighting Design</strong>
      的组件设计思想，在不久的将来，孕育出更高阶的组件库。
    </p>

    <div class="action">
      <a href="/demo/components/install.html">
        <tyh-button type="primary">开始使用</tyh-button>
      </a>
      <tyh-button class="code" icon="tyh-ui-survey">
        npm install filling-design
      </tyh-button>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
#home {
  padding: 50px;
  box-sizing: border-box;
  width: 1280px;
  margin: auto;
  .title {
    font-weight: 600;
    font-size: 32px;
    color: rgb(17, 24, 39);
    line-height: 100px;
  }
  .title_2 {
    font-size: 4rem;
    white-space: wrap;
    line-height: 90px;
    font-weight: 700;
    color: rgb(17, 24, 39);
  }
  .content {
    margin-top: 40px;
    font-size: 25px;
    line-height: 36px;
    display: inline-block;
    width: 75%;
    color: rgb(121, 129, 136);
    strong {
      color: rgb(68, 68, 68);
    }
  }
  .action {
    margin-top: 30px;
    display: flex;
    align-items: center;
    .tyh-button {
      min-width: 130px;
      height: 52px;
      font-size: 18px;
    }
    .code {
      margin-left: 17px;
      font-size: 21px;
    }
  }
}
</style>
