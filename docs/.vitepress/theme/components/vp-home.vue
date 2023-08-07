<script lang="ts" setup>
  import { watch, ref, computed } from 'vue'
  import { contributors } from '../../json/contributors.json'
  import { useRoute } from 'vitepress'
  import home from '../../json/home.json'
  import footer from '../../json/footer.json'
  import type { Route } from 'vitepress'
  import { useData } from 'vitepress'

  defineOptions({ name: 'VpHome' })

  /** 首页内容 */
  const homeContent = ref()
  /** 页脚内容 */
  const footerContent = ref()
  /** 获取路由 */
  const route: Route = useRoute()
  /* 获取当前主题模式 */
  const { isDark } = useData()

  const fontColor = computed(() =>
    isDark.value ? 'var(--vp-c-text-dark-1)' : 'var(--vp-c-text-light-1)'
  )

  /** 监视路由发生变化时，更新语言 */
  watch(
    (): string => route.path,
    (): void => {
      if (route.path === '/en-US/index.html' || route.path === '/en-US/') {
        homeContent.value = home['en-US']
        footerContent.value = footer['en-US']
      } else {
        homeContent.value = home['zh-CN']
        footerContent.value = footer['zh-CN']
      }
    },
    /** 初始化执行 */
    { immediate: true }
  )
</script>

<template>
  <div class="vp-home">
    <!-- 横幅 -->
    <div class="vp-home__banner">
      <div class="vp-home__logo-box">
        <f-avatar
          class="vp-home__logo"
          src="https://raw.githubusercontent.com/Tyh2001/images/4ad62a8f00aa2473deca61598f307430d8d4a4cf/fighting-design/FightingDesign.svg"
          alt="Fighting Design logo"
          :draggable="false"
          :size="500"
        />
      </div>
    </div>

    <!-- 主内容部分 -->
    <div class="vp-home__content">
      <!-- 描述信息 -->
      <div class="vp-home__describe">
        <!-- logo -->
        <f-avatar
          ref="fightingLogo"
          class="vp-home__logo fighting__logo"
          draggable="false"
          src="https://raw.githubusercontent.com/Tyh2001/images/4ad62a8f00aa2473deca61598f307430d8d4a4cf/fighting-design/FightingDesign.svg"
          alt="Fighting Design logo"
          :size="120"
        />

        <!-- 标题 -->
        <h1 class="vp-home__title">
          Fighting Design

          <!-- start 标签 -->
          <f-link
            href="https://github.com/FightingDesign/fighting-design"
            target="_blank"
          >
            <f-image
              src="https://img.shields.io/github/stars/FightingDesign/fighting-design?style=social"
              alt="Fighting Design"
            />
          </f-link>
        </h1>

        <!-- 副标题 -->
        <h1 class="vp-home__subtitle">{{ homeContent.subtitle }}</h1>

        <!-- 介绍 -->
        <p class="vp-home__introduce">
          <strong>🌈 Fighting Design</strong>
          {{ homeContent.introduce }}
        </p>

        <!-- 开始按钮 -->
        <f-button type="primary" size="large" href="/docs/install">{{
          homeContent.start
        }}</f-button>
      </div>

      <!-- 贡献者 -->
      <div class="vp-home__contributors">
        <f-text block center bold size="26px" :color="fontColor">{{
          homeContent.contributors
        }}</f-text>
        <div class="vp-home__contributors-box">
          <f-link
            v-for="(item, i) in contributors"
            :href="item.homePage"
            :key="i"
            target="_blank"
          >
            <f-avatar round :src="item.avatar" />
          </f-link>
        </div>

        <f-button type="info" href="/docs/contributing.html" round>
          {{ homeContent.join }}
        </f-button>
      </div>

      <!-- 页脚 -->
      <div class="vp-home__footer">
        <!-- 连接集合 -->
        <div class="vp-home__footer-content">
          <ul
            class="vp-home__footer-list"
            v-for="(listItem, index) in footerContent"
            :key="index"
          >
            <h4 class="vp-home__footer-title">{{ listItem.title }}</h4>
            <li class="vp-home__footer-item" v-for="(list, i) in listItem.item" :key="i">
              <f-link :color="fontColor" target="_blank" :href="list.link">
                {{ list.text }}
              </f-link>
            </li>
          </ul>
        </div>

        <!-- 底部连接 -->
        <p class="vp-home__footer-code">
          <f-link
            target="_blank"
            href="https://beian.miit.gov.cn"
            :color="`${isDark ? 'var(--vp-c-text-dark-1)' : 'var(--vp-c-text-light-1)'}`"
          >
            FightingDesign | 浙ICP备2021024540号-2
          </f-link>
        </p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .vp-home {
    // 横幅
    .vp-home__banner {
      width: 100%;
      box-sizing: border-box;
      position: relative;
      min-height: 370px;
      padding-bottom: 30px;

      // logo 盒子
      .vp-home__logo-box {
        position: absolute;
        right: 0px;
        top: 0px;
        height: 100%;
        width: 100%;
        max-width: 1368px;
        z-index: -1;
        overflow: hidden;
        background: -webkit-linear-gradient(815deg, #395ce3 10%, #5ee0dd);
        // https://developer.mozilla.org/zh-CN/docs/Web/CSS/mask
        -webkit-mask: url('./images/banner.svg') 100% -150px / cover no-repeat;
        mask: url('./images/banner.svg') 100% -150px / cover no-repeat;

        // 横幅上的 logo
        .vp-home__logo {
          top: 0px;
          right: 0px;
          position: absolute;
          transform: translate(-155px, -77px) scale(1);
          user-select: none;
        }
      }
    }

    // 主内容部分
    .vp-home__content {
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

      // 描述信息
      .vp-home__describe {
        // logo
        .vp-home__logo {
          width: 120px;
          height: 120px;
          user-select: none;
          display: block;
        }

        // 标题
        .vp-home__title {
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
          color: transparent;
          background: -webkit-linear-gradient(55deg, #395ce3 10%, #5ee0dd);
          // https://developer.mozilla.org/zh-CN/docs/Web/CSS/background-clip
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;

          .f-image {
            margin-left: 20px;
          }
        }

        // 副标题
        .vp-home__subtitle {
          margin-top: 10px;
          font-size: 33px;
          font-weight: 700;
          transition: 0.3s;
          font-weight: 500;
          line-height: 50px;
          transition: 0.3s;
        }

        // 介绍
        .vp-home__introduce {
          transition: 0.3s;
          max-width: 700px;
          margin-top: 30px;
        }

        // 开始按钮
        .f-button {
          margin-top: 30px;
        }
      }

      // 贡献者
      .vp-home__contributors {
        margin-top: 66px;
        padding: 60px 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        // 贡献者列表标题
        .f-text {
          margin-bottom: 40px;
        }

        // 贡献者列表容器
        .vp-home__contributors-box {
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

        // 加入其中按钮
        .f-button {
          margin-top: 40px;
        }
      }

      // 页脚
      .vp-home__footer {
        border-top: 1px solid var(--vp-badge-info-border);
        max-width: 800px;
        margin: 0 auto;
        padding: 60px 0;
        box-sizing: border-box;

        .vp-home__footer-content {
          display: flex;
          justify-content: space-between;
          user-select: none;

          .vp-home__footer-list {
            .vp-home__footer-title {
              font-weight: 600;
              line-height: 36px;
              font-size: 15px;
            }

            .vp-home__footer-item {
              line-height: 36px;
              cursor: pointer;
              font-size: 14px;

              :deep(.f-link__a) {
                &:hover {
                  color: var(--docsearch-primary-color) !important;
                }
              }
            }
          }
        }

        .vp-home__footer-code {
          margin-top: 30px;
          text-align: center;
          font-size: 15px;
          cursor: pointer;

          :deep(.f-link__a) {
            &:hover {
              color: var(--docsearch-primary-color) !important;
            }
          }
        }
      }
    }

    @media (max-width: 768px) {
      #content {
        top: 200px !important;
      }
    }
  }
</style>
