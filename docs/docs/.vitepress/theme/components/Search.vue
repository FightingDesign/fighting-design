<script lang="ts" setup>
  import { ref } from 'vue'
  import { searchList } from './src/search-list'

  const value = ref('')
  const isShow = ref(false)

  const resultList = ref()

  const onSearch = (): void => {
    resultList.value = searchList.filter((item) => {
      return item.rule.includes(value.value)
    })

    if (resultList.value && resultList.value.length) {
      isShow.value = true
    }
  }

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
      placeholder="请输入...."
      :on-enter="onSearch"
      :on-blur="hiddenResult"
    />
    <div
      v-if="isShow && resultList && resultList.length"
      class="search-result"
      @click.stop="hiddenResult"
    >
      <a
        v-for="(item, index) in resultList"
        class="link"
        :key="index"
        :href="`/components/${item.url}.html`"
      >
        {{ item.title }}
      </a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .search-box {
    width: 200px;
    margin-right: 20px;
    display: inline-block;
    position: relative;

    .search-result {
      position: absolute;
      background: #fff;
      width: 100%;
      box-shadow: 0 1px 6px rgb(0 0 0 / 20%);

      .link {
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
