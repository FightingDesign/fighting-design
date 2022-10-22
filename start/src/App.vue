<script lang="ts" setup>
  import { ref } from 'vue'
  import { FIconAnchor } from '@fighting-design/fighting-icon'
  const value = ref('123')

  const onSearch = ({ value }): void => {
    console.log(value)
  }

  function change () {
    console.log(123)
  }
</script>

<template>
  <f-input
    v-model="value"
    type="text"
    :icon="FIconAnchor"
    placeholder="请输入...."
    clear
    search
    autofocus
    :on-search="onSearch"
    @change="change"
  >
    <template #searchBtn>
      <f-button round type="success">成功按钮</f-button>
    </template>
  </f-input>
</template>

<style lang="scss" scoped></style>
