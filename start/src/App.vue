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
</script>

<template>
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
