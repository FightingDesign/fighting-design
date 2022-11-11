<script lang="ts" setup>
  import { ref } from 'vue'
  import { searchList } from './src/search-list'

  // 输入框输入的内容
  const value = ref('')
  // 是否展示下拉菜单
  const isShow = ref(false)
  // 搜索结果列表
  const resultList = ref()

  /**
   * 按下回车触发搜索
   */
  const onSearch = (): void => {
    // 过滤搜索结果
    resultList.value = searchList.filter((item) => {
      return item.rule.includes(value.value)
    })

    // 检测有结果
    if (resultList.value && resultList.value.length) {
      isShow.value = true

      setTimeout(() => {
        const link: HTMLLinkElement[] = document.querySelectorAll(
          '.search-link'
        ) as unknown as HTMLLinkElement[]
        if (link.length === 1) {
          link[0].click()
        }
      }, 200)
    }
  }

  /**
   * 关闭搜索结果菜单
   */
  const hiddenResult = (): void => {
    isShow.value = false
    value.value = ''
  }
</script>

<template>
  <div class="search-box">
    <f-input
      v-model="value"
      type="text"
      placeholder="搜索组件"
      :on-enter="onSearch"
    />
    <div
      v-if="isShow && resultList && resultList.length"
      class="search-result"
      @click.stop="hiddenResult"
    >
      <a
        v-for="(item, index) in resultList"
        class="search-link"
        :key="index"
        :href="`/${item.url}.html`"
      >
        {{ item.title }}
      </a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  @media screen and (max-width: 810px) and (min-width: 710px) {
    .search-box {
      width: 170px;
      transition: width 0.4s;
    }
  }
  .search-box {
    max-width: 200px;
    min-width: 100px;
    margin: 0 16px;
    transition: width 0.4s;
    display: inline-block;
    position: relative;

    .search-result {
      position: absolute;
      background: #fff;
      width: 100%;
      box-shadow: 0 1px 6px rgb(0 0 0 / 20%);

      .search-link {
        margin: 4px;
        transition: 0.3s;
        display: block;
        line-height: 40px;
        padding: 0 13px;
        box-sizing: border-box;

        &:hover {
          background: #eee;
          color: #2d5af1;
        }
      }
    }
  }
</style>
