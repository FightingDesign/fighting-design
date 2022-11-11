<script lang="ts" setup>
  import { ref } from 'vue'

  const visible2 = ref(false)

  const onShow = (): void => {
    visible2.value = true
  }

  const open = (): void => {
    console.log('open')
  }

  const openEnd = (): void => {
    console.log('openEnd')
  }

  const close = (): void => {
    console.log('close')
  }

  const closeEnd = (): void => {
    console.log('closeEnd')
  }
</script>

<template>
  <f-space>
    <f-button type="primary" @click="onShow">居中弹出</f-button>
  </f-space>

  <f-popup
    v-model:visible="visible2"
    direction="center"
    :padding="30"
    :close="close"
    :close-end="closeEnd"
    :open="open"
    :open-end="openEnd"
  >
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
  </f-popup>
</template>
