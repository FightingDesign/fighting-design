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
      <a href="/docs/install">
        <f-button type="primary" size="large">开始使用</f-button>
      </a>
      <f-button
        class="code"
        size="large"
        blob
        text
        data-clipboard-text="npm i filling-design"
        @click="copyCode('.code')"
      >
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
  <div class="footer">
    <div class="footer_box">
      <div class="list">
        <ul>
          <h4>社区</h4>
          <li v-for="(item, index) in community" :key="index">
            <a target="_back" :href="item.link">{{ item.text }}</a>
          </li>
        </ul>
        <ul>
          <h4>关于我</h4>
          <li v-for="(item, index) in my" :key="index">
            <a target="_back" :href="item.link">{{ item.text }}</a>
          </li>
        </ul>
        <ul>
          <h4>关于我</h4>
          <li v-for="(item, index) in works" :key="index">
            <a target="_back" :href="item.link">{{ item.text }}</a>
          </li>
        </ul>
        <ul>
          <h4>帮助</h4>
          <li v-for="(item, index) in help" :key="index">
            <a target="_back" :href="item.link">{{ item.text }}</a>
          </li>
        </ul>
      </div>
      <!-- <a
        v-for="(item, index) in collaborator"
        target="_blank"
        :href="item.url"
        :key="index"
      >
        <div class="userBox">
          <img
            draggable="false"
            class="myPhoto"
            :src="item.photo"
            alt="photo"
          />
          <span class="userName">{{ item.name }}</span>
        </div>
      </a> -->
      <p class="code">FightingDesign | 浙ICP备2021024540号-2</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Clipboard from 'clipboard'
const lists: string[] = [
  '更快的搭建',
  '更完善的组件',
  '更灵活的配置',
  '更优质的文档',
  '更强的类型校验',
  '更合适的组件库'
]
const collaborator: object[] = [
  {
    name: '田同学',
    photo: 'https://avatars.githubusercontent.com/u/73180970?v=4',
    url: 'https://github.com/Tyh2001'
  }
]
// 社区
const community = [
  { text: 'Github', link: 'https://github.com/Tyh2001/fighting-design' },
  { text: 'NPM', link: 'https://github.com/Tyh2001/fighting-design' }
]
const my = [
  { text: 'Tyh2001', link: 'https://tianyuhao.cn' },
  { text: 'Blog', link: 'https://tianyuhao.cn/blog' }
]
const works = [
  { text: 'Tyh Ui', link: 'https://tianyuhao.cn/v3' },
  { text: 'TsMango', link: 'https://tianyuhao.cn/mango' }
]
const help = [
  {
    text: '报告问题',
    link: 'https://github.com/Tyh2001/fighting-design/issues'
  }
]
const copyCode = (node: HTMLButtonElement): void => {
  const clipboard = new Clipboard(node)
  alert('复制成功')
}
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
  width: 100%;
  background: #24292f;
  .footer_box {
    max-width: 1200px;
    margin: auto;
    padding: 70px 50px;
    box-sizing: border-box;
    .list {
      color: #fff;
      display: flex;
      justify-content: space-between;
      user-select: none;
      ul {
        h4 {
          font-weight: 600;
          line-height: 36px;
        }
        li {
          line-height: 36px;
          cursor: pointer;
        }
      }
    }
    .code {
      color: #fff;
      margin-top: 50px;
      text-align: center;
      user-select: none;
    }
  }
}
</style>
