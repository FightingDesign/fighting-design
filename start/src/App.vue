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
  <!-- 
  <f-space>
    <f-button type="primary" @click="onShow('left')">从左往右开</f-button>
    <f-button type="primary" @click="onShow('right')">从右往左开</f-button>
    <f-button type="primary" @click="onShow('top')">从上往下开</f-button>
    <f-button type="primary" @click="onShow('bottom')">从下往上开</f-button>
  </f-space> -->

  <!-- <f-drawer v-model:visible="visible1" title="Title" :direction="direction">
    <template #closeIcon>
      <svg2 />
    </template>
    <h3>沁园春·雪</h3>

    <p>北国风光，千里冰封，万里雪飘。</p>
    <p>望长城内外，惟余莽莽；大河上下，顿失滔滔。</p>
    <p>山舞银蛇，原驰蜡象，欲与天公试比高。</p>
    <p>须晴日，看红装素裹，分外妖娆。</p>

    <br />

    <p>江山如此多娇，引无数英雄竞折腰。</p>
    <p>惜秦皇汉武，略输文采；唐宗宋祖，稍逊风骚。</p>
    <p>一代天骄，成吉思汗，只识弯弓射大雕。</p>
    <p>俱往矣，数风流人物，还看今朝。</p>
  </f-drawer> -->
</template>

<style lang="scss" scoped></style>
