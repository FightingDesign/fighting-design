<template>
  <div class="vp-search">
    <f-input v-model="value" type="text" placeholder="搜索组件" :on-enter="onSearch" />

    <!-- 搜索结果 -->
    <div v-if="isShow && resultList && resultList.length" class="vp-search__result" @click.stop="hiddenResult">
      <a v-for="(item, index) in resultList" class="vp-search__link" :key="index" :href="`/${item.url}.html`">
        {{ item.title }}
      </a>
    </div>
  </div>
</template>

<script setup lang="ts" name="VpSearch">
  import { ref } from 'vue'
  import { searchList } from './src'
  import type { SearchList } from './src/search-list'

  /** 输入框输入的内容 */
  const value = ref('')

  /** 是否展示下拉菜单 */
  const isShow = ref(false)

  /** 搜索结果列表 */
  const resultList = ref(null as unknown as SearchList)

  /** 按下回车触发搜索 */
  const onSearch = (): void => {
    /** 过滤搜索结果 */
    resultList.value = searchList.filter(item => {
      return item.rule.includes(value.value)
    })

    /** 检测有结果 */
    if (resultList.value && resultList.value.length) {
      isShow.value = true

      setTimeout((): void => {
        const link = document.querySelectorAll('.vp-search__link')

        if (link.length === 1) {
          ;(link[0] as HTMLElement).click()
        }
      }, 200)
    }
  }

  /** 关闭搜索结果菜单 */
  const hiddenResult = (): void => {
    isShow.value = false
    value.value = ''
  }
</script>

<style lang="scss" scoped>
  .vp-search {
    max-width: 200px;
    min-width: 100px;
    margin: 0 16px;
    transition: width 0.4s;
    display: inline-block;
    position: relative;

    // 搜索结果
    .vp-search__result {
      position: absolute;
      background-color: #fff;
      width: 100%;
      box-shadow: 0 1px 6px rgb(0 0 0 / 20%);
      max-height: 400px;
      overflow: auto;

      .vp-search__link {
        margin: 4px;
        transition: 0.3s;
        display: block;
        line-height: 40px;
        padding: 0 13px;
        box-sizing: border-box;

        &:hover {
          background-color: #eee;
          color: #2d5af1;
        }
      }
    }
  }

  // 解决在 810px ~ 710px 区间样式显示不正确的问题
  @media screen and (max-width: 840px) and (min-width: 760px) {
    .vp-search {
      width: 140px;
      transition: width 0.4s;
    }
  }
</style>
