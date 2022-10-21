<script lang="ts" setup>
  import { h, isVNode, ref } from 'vue'
  import { FIconUmbrella, FIconSwords } from '@fighting-design/fighting-icon'
  console.log(FIconUmbrella)

  const visible1 = ref(true)

  console.log(isVNode(FIconUmbrella))
</script>

<template>
  <f-alert type="primary" close title="哈哈哈哈哈">主要提示信息</f-alert>
  <f-alert type="success" close>成功提示信息</f-alert>
  <f-alert type="danger" close>危险提示信息</f-alert>

  <f-dialog
    v-model:visible="visible1"
    title="标题文字"
  >
    <template #closeIcon>
      <f-icon-umbrella />
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

    <template #footer>
      <f-button type="default">默认按钮</f-button>
      <f-button type="primary">主要按钮</f-button>
    </template>
  </f-dialog>
</template>

<style lang="scss" scoped></style>
