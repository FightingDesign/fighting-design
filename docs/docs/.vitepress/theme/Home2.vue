<template>
  <div id="banner">
    <div class="logo_box">
      <img
        class="logo"
        src="https://tianyuhao.cn/fighting/imgs/FightingDesign.svg"
      />
    </div>

    <!-- 描述列表 -->
    <div class="list_content">
      <img
        class="logo"
        src="https://tianyuhao.cn/fighting/imgs/FightingDesign.svg"
      />
      <h1 class="title">Fighting Design</h1>
      <p class="content">
        <strong>🎨 Fighting Design</strong> 是一款灵活、优质的
        <strong>vue3</strong>
        组件库，为开发者、设计师准备。希望开发者可以借用
        <strong>Fighting Design</strong>
        的设计，在不久的将来，孕育出更高阶的组件库。
      </p>

      <div class="action">
        <a href="/docs/install">
          <f-button type="primary" size="large">开始使用</f-button>
        </a>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
}
#banner {
  width: 100%;
  box-sizing: border-box;
  position: relative;
  z-index: 1000;
  min-height: 370px;
  padding-bottom: 30px;
  .logo_box {
    position: absolute;
    right: 0px;
    top: 0px;
    height: 100%;
    width: 100%;
    max-width: 1368px;
    z-index: -1;
    overflow: hidden;
    background: linear-gradient(10deg, rgb(7, 30, 105), rgb(97, 131, 244)) 0% 0% /
        100% no-repeat,
      rgb(97, 131, 244);
    -webkit-mask: url('./images/banner.svg') 100% -150px / cover no-repeat;
    .logo {
      width: 500px;
      height: 500px;
      top: 0px;
      right: 0px;
      position: absolute;
      transform: translate(-155px, -77px) scale(1);
    }
  }
  // 描述列表
  .list_content {
    position: absolute;
    right: 0px;
    top: 70px;
    width: 100%;
    padding: 30px;
    box-sizing: border-box;
    max-width: 1368px;
    .logo {
      width: 120px;
      height: 120px;
    }
    .title {
      font-size: 32px;
      line-height: 36px;
      text-align: left;
      letter-spacing: -1.2px;
      font-weight: bold;
      word-break: normal;
    }
    .content {
      max-width: 750px;
      margin-top: 30px;
    }
    .action {
      margin-top: 30px;
      display: flex;
      align-items: center;
    }
  }
}
</style>
