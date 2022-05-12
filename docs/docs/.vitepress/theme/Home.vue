<template>
  <div id="home">
    <h3 class="title">
      <img
        class="logo"
        src="https://tianyuhao.cn/fighting/imgs/FightingDesign.svg"
        alt="FightingDesign Logo"
      />
      Fighting Design
    </h3>
    <h1 class="subtitle">一个用 TypeScript + Template 编写的 Vue3 组件库。</h1>

    <p class="content">
      <strong>Fighting Design</strong> 是一款灵活、优质的
      <strong>vue3</strong>
      组件库，为开发者、设计师准备。希望开发者可以借用
      <strong>Fighting Design</strong>
      的设计，在不久的将来，孕育出更高阶的组件库。
    </p>

    <div class="action">
      <a href="/docs/install.html">
        <f-button type="primary" size="large">开始使用</f-button>
      </a>
      <f-button class="code" size="large" blob text>
        npm i filling-design
      </f-button>
    </div>

    <div class="advantage">
      <div class="advantage_item" v-for="(list, index) in lists" :key="index">
        <div class="img_box">
          <img
            :src="`https://tianyuhao.cn/fighting/imgs/home-${index + 1}.svg`"
          />
        </div>
        <p class="text">{{ list }}</p>
      </div>
    </div>
  </div>
  <div class="footer"></div>
</template>

<script lang="ts" setup>
const lists: string[] = [
  '更快的搭建',
  '更完善的组件',
  '更灵活的配置',
  '更优质的文档',
  '更强的类型校验',
  '更合适的组件库'
]
</script>

<style lang="scss" scoped>
#home {
  max-width: 1200px;
  margin: auto;
  padding: 50px;
  .title {
    font-weight: 600;
    font-size: 26px;
    color: rgb(17, 24, 39);
    display: flex;
    align-items: center;
    transition: 0.3s;
    .logo {
      width: 55px;
      height: 55px;
      margin-right: 10px;
    }
  }
  .subtitle {
    margin-top: 10px;
    font-size: 33px;
    font-weight: 700;
    color: rgb(17, 24, 39);
    transition: 0.3s;
    font-weight: 500;
    line-height: 50px;
  }
  .content {
    transition: 0.3s;
    margin-top: 30px;
    width: 75%;
    line-height: 28px;
    color: rgb(121, 129, 136);
    strong {
      color: rgb(68, 68, 68);
      transition: 0.3s;
    }
  }
  .action {
    margin-top: 30px;
    display: flex;
    align-items: center;
    .code {
      margin-left: 17px;
      font-size: 21px;
    }
  }
  .advantage {
    margin-top: 80px;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    user-select: none;
    .advantage_item {
      width: 50%;
      padding: 20px;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .img_box {
        width: 70%;
        overflow: hidden;
        height: 12rem;
        img {
          width: 100%;
          height: 200px;
          transition: 0.3s;
        }
      }
      .text {
        margin-top: 30px;
        font-size: 20px;
        color: #333;
      }
    }
  }
  @media screen and (max-width: 800px) {
    .advantage_item {
      width: 100% !important;
      margin-bottom: 20px;
    }
  }
}
.footer {
  height: 400px;
  width: 100%;
  background: #24292f;
}
</style>
