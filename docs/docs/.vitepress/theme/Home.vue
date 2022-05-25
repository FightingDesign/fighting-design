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
        <ul v-for="(lists, index) in bottomList" :key="index">
          <h4>{{ lists.title }}</h4>
          <li v-for="(list, i) in lists.item" :key="i">
            <a target="_back" :href="list.link">{{ list.text }}</a>
          </li>
        </ul>
      </div>

      <div class="list2">
        <h4>加入我们</h4>
        <img src="https://tianyuhao.cn/images/weixin2.png" alt="weixin" />
      </div>

      <div class="list2">
        <h4>合作者</h4>
        <a
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
        </a>
      </div>

      <p class="code">FightingDesign | 浙ICP备2021024540号-2</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import Clipboard from 'clipboard'

  const lists = [
    '更快的搭建',
    '更完善的组件',
    '更灵活的配置',
    '更优质的文档',
    '更强的类型校验',
    '更合适的组件库'
  ] as const

  const bottomList = [
    {
      title: '社区',
      item: [
        { text: 'Github', link: 'https://github.com/Tyh2001/fighting-design' },
        { text: 'NPM', link: 'https://www.npmjs.com/package/fighting-design' }
      ]
    },
    {
      title: '关于我',
      item: [
        { text: 'Tyh2001', link: 'https://tianyuhao.cn' },
        { text: 'Blog', link: 'https://tianyuhao.cn/blog' }
      ]
    },
    {
      title: '其它开源',
      item: [
        { text: 'Tyh Ui', link: 'https://tianyuhao.cn/v3' },
        { text: 'TsMango', link: 'https://tianyuhao.cn/mango' }
      ]
    },
    {
      title: '帮助',
      item: [
        {
          text: '报告问题',
          link: 'https://github.com/Tyh2001/fighting-design/issues'
        }
      ]
    }
  ] as const

  const collaborator = [
    {
      name: '田同学',
      photo: 'https://avatars.githubusercontent.com/u/73180970?v=4',
      url: 'https://github.com/Tyh2001'
    }
  ] as const

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
      display: flex;
      align-items: center;
      transition: 0.3s;
      .logo {
        width: 55px;
        height: 55px;
        margin-right: 10px;
        user-select: none;
      }
    }
    .subtitle {
      margin-top: 10px;
      font-size: 33px;
      font-weight: 700;
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
      padding: 40px 50px 70px 50px;
      box-sizing: border-box;
      .list {
        color: #fff;
        display: flex;
        justify-content: space-between;
        user-select: none;
        padding: 30px 0;
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
      .list2 {
        color: #fff;
        display: flex;
        justify-content: space-between;
        user-select: none;
        padding: 30px 0;
        flex-direction: column;
        h4 {
          font-weight: 600;
          margin-bottom: 20px;
        }
        img {
          width: 150px;
        }
        .userBox {
          width: 150px;
          height: 50px;
          display: flex;
          justify-content: center;
          align-items: center;
          cursor: pointer;
          .myPhoto {
            width: 45px;
            height: 45px;
            border-radius: 50%;
          }
          .userName {
            font-size: 20px;
            margin-left: 10px;
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
