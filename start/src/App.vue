<script lang="ts" setup>
  import { ref } from 'vue'
  import type { DrawerDirection } from 'fighting-design'

  const visible1 = ref(false)
  const direction = ref<DrawerDirection>('right')

  const onShow = (dir: DrawerDirection): void => {
    direction.value = dir
    visible1.value = true
  }

  const visible2 = ref(false)
</script>

<template>
  <f-button type="primary" @click="visible2 = true">主要按钮</f-button>

  <f-space>
    <f-button type="primary" @click="onShow('left')">从左往右开</f-button>
    <f-button type="primary" @click="onShow('right')">从右往左开</f-button>
    <f-button type="primary" @click="onShow('top')">从上往下开</f-button>
    <f-button type="primary" @click="onShow('bottom')">从下往上开</f-button>
  </f-space>

  <f-dialog v-model:visible="visible2" title="标题文字" :show-header="false">
    这是一个 Dialog
  </f-dialog>

  <f-drawer
    v-model:visible="visible1"
    title="Title"
    :direction="direction"
    :show-header="false"
  >
    <h3>沁园春·雪沁园春·雪沁园春·雪沁园</h3>
    <h3>沁园春·雪</h3>
    <h3>沁园春·雪</h3>
    <h3>沁园春·雪</h3>
    <h3>沁园春·雪</h3>
    <h3>沁园春·雪</h3>
    <h3>沁园春·雪</h3>
    <h3>沁园春·雪</h3>
    <h3>沁园春·雪</h3>
    <h3>沁园春·雪</h3>
    <h3>沁园春·雪</h3>
    <h3>沁园春·雪</h3>
    <h3>沁园春·雪</h3>
    <h3>沁园春·雪</h3>
    <h3>沁园春·雪</h3>
    <h3>沁园春·雪</h3>
    <h3>沁园春·雪</h3>
    <h3>沁园春·雪</h3>
    <h3>沁园春·雪</h3>
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
  </f-drawer>
</template>
