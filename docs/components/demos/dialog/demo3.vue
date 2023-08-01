<script setup lang="ts">
  import { ref } from 'vue'
  import { FMessage } from '../../../../packages/fighting-design/message'

  const visible3 = ref(false)

  const open = (): void => {
    FMessage('打开动画开始')
  }
  const openEnd = (): void => {
    FMessage('打开动画结束')
  }

  const close = (): void => {
    FMessage('关闭动画开始')
  }
  const closeEnd = (): void => {
    FMessage('关闭动画结束')
  }
</script>

<template>
  <f-button type="primary" @click="visible3 = true">打开</f-button>

  <f-dialog
    v-model:visible="visible3"
    title="Title"
    :on-open="open"
    :on-open-end="openEnd"
    :on-close="close"
    :on-close-end="closeEnd"
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
  </f-dialog>
</template>
