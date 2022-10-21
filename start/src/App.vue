<script lang="ts" setup>
  import { h, isVNode, ref } from 'vue'
  import type { Component } from 'vue'
  import Svg from '../../packages/fighting-design/_components/svg/f-icon-chevron-right.vue'
  import Svg2 from '../../packages/fighting-design/_components/svg/f-icon-lightbulb.vue'
  // console.log(FIconUmbrella)
  const visible1 = ref(false)
  const direction = ref('right')

  const a: Component = Svg

  console.log(h(a))

  const onShow = (dir) => {
    direction.value = dir
    visible1.value = true
  }

  console.log(Svg)

  // const visible1 = ref(false)

  // const visible1 = ref(true)

  // console.log(FIconUmbrella)
  const loading1 = true
</script>

<template>
  <!-- <f-button type="primary" @click="onclick1">开始 loading</f-button> -->
  <f-loading :show="loading1" :icon="Svg">
    <template #icon>
      <svg2 />
    </template>
  </f-loading>
  <f-avatar fit="fill" src="https://tianyuhao.cn/images/auto/4.jpg" />
  <f-avatar fit="contain" src="https://tianyuhao.cn/images/auto/4.jpg" />
  <f-avatar fit="cover" src="https://tianyuhao.cn/images/auto/4.jpg" />
  <f-avatar fit="none" src="https://tianyuhao.cn/images/auto/4.jpg" />
  <f-avatar fit="scale-down" src="https://tianyuhao.cn/images/auto/4.jpg" />

  <f-avatar
    src="https://tianyuhao.cn/images/auto/my.jpg"
    :font-size="30"
    background="#eee"
  >
    <template #icon>
      <svg2 />
    </template>
  </f-avatar>
  <f-link href="" size="40px" type="default">
    <template #beforeIcon>
      <svg2 />
    </template>
    默认链接
  </f-link>
  <f-link href="" :before-icon="Svg" size="40px" type="primary">
    主要链接
  </f-link>
  <f-link href="" :before-icon="Svg" size="40px" type="success">
    成功链接
  </f-link>
  <f-link href="" :before-icon="Svg" size="40px" type="danger">危险链接</f-link>
  <f-link href="" :before-icon="Svg" size="40px" type="warning">
    警告链接
  </f-link>

  <f-button type="primary" @click="visible1 = true">打开</f-button>

  <f-dialog v-model:visible="visible1" title="标题文字" :close-icon="Svg">
    <template #closeIcon>
      <svg2 />
    </template>

    123
  </f-dialog>

  <!-- <f-space>
    <f-button type="primary" @click="onShow('left')">从左往右开</f-button>
    <f-button type="primary" @click="onShow('right')">从右往左开</f-button>
    <f-button type="primary" @click="onShow('top')">从上往下开</f-button>
    <f-button type="primary" @click="onShow('bottom')">从下往上开</f-button>
  </f-space> -->
  <!-- 
  <f-drawer
    v-model:visible="visible1"
    title="Title"
    :direction="direction"
    :close-icon="h(Svg)"
  >
    <template #closeIcon>
      <svg2 />
    </template>
    <h3>沁园春·雪</h3>
  </f-drawer> -->
</template>

<style lang="scss" scoped></style>
