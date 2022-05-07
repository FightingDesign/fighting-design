<template>
  <div id="home">
    <h3 class="title">
      <img src="https://tianyuhao.cn/fighting/imgs/FightingDesign.svg" />
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
        <p>{{ list }}</p>
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
  padding: 0 1.5rem;
  .title {
    font-weight: 600;
    font-size: 32px;
    color: rgb(17, 24, 39);
    line-height: 100px;
    display: flex;
    align-items: center;
    transition: 0.3s;
    img {
      width: 55px;
      margin-right: 10px;
    }
    .subtitle {
      font-size: 4rem;
      white-space: wrap;
      line-height: 90px;
      font-weight: 700;
      color: rgb(17, 24, 39);
      transition: 0.3s;
    }
  }
  .content {
    transition: 0.3s;
    margin-top: 40px;
    width: 75%;
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
      h1 {
        transition: 0.3s;
      }
    }
  }
  @media screen and (min-width: 1000px) {
    h1 {
      font-size: 2rem;
    }
    .subtitle {
      font-size: 2.6rem;
      transition: 0.3s;
    }
  }
  @media screen and (max-width: 800px) {
    h1 {
      font-size: 1.8rem;
    }
    .content {
      font-size: 0.9rem;
    }
    .advantage {
      h1 {
        font-size: 1rem;
      }
    }
  }
}
.footer {
  height: 400px;
  width: 100%;
  background: #24292f;
}
</style>

<style>
.home-content {
  max-width: 100% !important;
  padding: 0px !important;
}
</style>
