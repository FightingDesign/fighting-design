<script lang="ts" setup>
  import { bottomList } from './src/list'
  import { contributors } from './src/contributors'
</script>

<template>
  <div id="banner">
    <div class="logo_box">
      <f-image
        class="logo"
        :draggable="false"
        src="https://tianyuhao.cn/images/fighting-design/FightingDesign.svg"
        alt="Fighting Design logo"
      />
    </div>
  </div>

  <div id="content">
    <!-- 标题 -->
    <div id="title">
      <img
        class="logo"
        draggable="false"
        src="https://tianyuhao.cn/images/fighting-design/FightingDesign.svg"
        alt="Fighting Design logo"
      />
      <h1 class="title">
        Fighting Design
        <f-link
          href="https://github.com/FightingDesign/fighting-design"
          target="_blank"
        >
          <f-image
            src="https://img.shields.io/github/stars/FightingDesign/fighting-design?style=social"
          />
        </f-link>
      </h1>

      <h1 class="subtitle">
        可在 vue3 应用程序中快速构建交互界面，看起来还不错。
      </h1>
      <p class="content">
        <strong>🌈 Fighting Design</strong>
        是一款灵活、优质的组件库，为开发者、设计师准备。希望开发者可以借用其中的设计，在不久的将来，孕育出更高阶的组件库。
      </p>

      <f-button type="primary" size="large" href="/docs/install">
        开始使用
      </f-button>
    </div>

    <!-- 贡献者 -->
    <div id="contributors">
      <f-text block center bold size="26px">Contributors</f-text>
      <div class="contributors-box">
        <f-link
          v-for="(item, i) in contributors"
          :href="item.homePage"
          :key="i"
          target="_blank"
        >
          <f-avatar round :src="item.avatar" />
        </f-link>
      </div>

      <f-button simple type="primary" href="/docs/contributing.html" round>
        加入其中
      </f-button>
    </div>

    <!-- 页脚 -->
    <div id="footer">
      <div class="footer-item">
        <ul class="list" v-for="(listItem, index) in bottomList" :key="index">
          <h4 class="title">{{ listItem.title }}</h4>
          <li class="item" v-for="(list, i) in listItem.item" :key="i">
            <f-link target="_blank" :href="list.link">
              {{ list.text }}
            </f-link>
          </li>
        </ul>
      </div>

      <p class="code">
        <f-link target="_blank" href="https://beian.miit.gov.cn">
          FightingDesign | 浙ICP备2021024540号-2
        </f-link>
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  #banner {
    width: 100%;
    box-sizing: border-box;
    position: relative;
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
      background: -webkit-linear-gradient(
        815deg,
        rgb(57, 92, 227) 10%,
        rgb(94, 224, 221)
      );
      -webkit-mask: url('./images/banner.svg') 100% -150px / cover no-repeat;

      .logo {
        width: 500px;
        height: 500px;
        top: 0px;
        right: 0px;
        position: absolute;
        transform: translate(-155px, -77px) scale(1);
        user-select: none;
      }
    }
  }

  #content {
    transition: 0.2s;
    max-width: 1350px;
    height: 500px;
    padding: 30px;
    box-sizing: border-box;
    right: 0;
    left: 0;
    margin: auto;
    top: 140px;
    position: absolute;

    // 标题
    #title {
      .logo {
        width: 120px;
        height: 120px;
        user-select: none;
      }

      .title {
        font-size: 32px;
        line-height: 43px;
        text-align: left;
        letter-spacing: -1.2px;
        font-weight: bold;
        word-break: normal;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        margin-top: 20px;
        background: -webkit-linear-gradient(
          55deg,
          rgb(57, 92, 227) 10%,
          rgb(94, 224, 221)
        );
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;

        .f-image {
          margin-left: 20px;
        }
      }

      .subtitle {
        margin-top: 10px;
        font-size: 33px;
        font-weight: 700;
        transition: 0.3s;
        font-weight: 500;
        line-height: 50px;
        transition: 0.3s;
      }

      .content {
        transition: 0.3s;
        max-width: 700px;
        margin-top: 30px;
      }

      .f-button-primary {
        margin-top: 30px;
      }
    }

    // 贡献者
    #contributors {
      margin-top: 66px;
      padding: 60px 20px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;

      .f-text {
        margin-bottom: 40px;
      }

      .f-button {
        margin-top: 40px;
      }

      .contributors-box {
        max-width: 800px;
        margin: 0 auto;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;

        .f-avatar {
          margin: 5px;
        }
      }
    }

    // 页脚
    #footer {
      border-top: 1px solid #eee;
      max-width: 800px;
      margin: 0 auto;
      padding: 60px 0;
      box-sizing: border-box;

      .footer-item {
        display: flex;
        justify-content: space-between;
        user-select: none;

        .list {
          .title {
            font-weight: 600;
            line-height: 36px;
            font-size: 15px;
          }

          .item {
            line-height: 36px;
            cursor: pointer;
            font-size: 14px;
          }
        }
      }

      .code {
        margin-top: 30px;
        text-align: center;
        font-size: 15px;
        cursor: pointer;

        a {
          color: #333;
        }
      }
    }
  }

  @media (max-width: 768px) {
    #content {
      top: 200px !important;
    }
  }
</style>
