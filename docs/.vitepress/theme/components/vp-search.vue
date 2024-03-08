<script setup lang="ts">
  import { ref, computed } from 'vue'
  import { searchList } from '../../json/search.json'
  import { useData } from 'vitepress'

  const { isDark } = useData()

  defineOptions({ name: 'VpSearch' })

  /** 输入框输入的内容 */
  const value = ref('')
  /** 是否展示下拉菜单 */
  const isShow = ref(false)
  /** 搜索结果列表 */
  const resultList = ref()

  /** 按下回车触发搜索 */
  const onSearch = (): void => {
    if (!value.value) {
      return
    }
    /**
     * 过滤搜索结果
     *
     * @see Array.prototype.filter() https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
     */
    resultList.value = searchList.filter(
      (item: { title: string; rule: string; url: string }): boolean => {
        /**
         * @see Array.prototype.includes() https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/includes
         */
        return item.rule.includes(value.value)
      }
    )

    /** 检测有结果 */
    if (resultList.value && resultList.value.length) {
      isShow.value = true

      setTimeout((): void => {
        /** 获取到所有的 a 标签 */
        const link: NodeListOf<HTMLLinkElement> =
          document.querySelectorAll('.vp-search__link')

        /** 如果只有一个则直接跳转 */
        if (link.length === 1) {
          link[0].click()
        }
      }, 200)
    }
  }

  /** 关闭搜索结果菜单 */
  const hiddenResult = (): void => {
    isShow.value = false
    value.value = ''
  }

  /**
   * 失去焦点关闭弹窗
   */
  const onBlur = () => {
    setTimeout(() => {
      isShow.value = false
    }, 800)
  }
</script>

<template>
  <div class="vp-search">
    <f-input
      v-model="value"
      type="text"
      autocomplete="off"
      placeholder="搜索组件"
      :on-enter="onSearch"
      :on-blur="onBlur"
      :class="{ dark: isDark }"
    />

    <!-- 搜索结果 -->
    <div
      v-if="isShow && resultList && resultList.length"
      class="vp-search__result"
      :class="{ dark: isDark }"
      @click.stop="hiddenResult"
    >
      <a
        v-for="(item, index) in resultList"
        class="vp-search__link"
        :class="{ dark: isDark }"
        :key="index"
        :href="`/${item.url}.html`"
      >
        {{ item.title }}
      </a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .vp-search {
    max-width: 200px;
    min-width: 100px;
    margin: 0 16px;
    transition: width 0.4s;
    display: inline-block;
    position: relative;

    :deep(.f-input.f-input__middle) {
      &.dark {
        & .f-input__wrapper {
          background-color: var(--vp-c-text-light-1);
          &:hover {
            border: var(--vp-c-brand-dark) 1px solid;
          }
        }
      }
    }

    // 搜索结果
    .vp-search__result {
      position: absolute;
      background-color: #fff;
      box-shadow: 0 1px 6px rgb(0 0 0 / 20%);
      max-height: 400px;
      overflow: auto;

      &.dark {
        background-color: var(--vp-c-bg-alt);
      }

      .vp-search__link {
        margin: 4px;
        transition: 0.3s;
        display: block;
        line-height: 40px;
        padding: 0 13px;
        box-sizing: border-box;

        &:hover {
          background-color: #eee;
          color: var(--vp-c-brand-dark);
        }

        &.dark:hover {
          background-color: var(--vp-c-bg-alt);
          color: var(--vp-c-brand-dark);
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
