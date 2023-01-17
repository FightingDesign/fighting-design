<script lang="ts" setup>
  import { ref } from 'vue'

  const num = ref(10)

  const sun = (): void => {
    if (num.value > 0) {
      num.value -= 10
    }
  }

  const add = (): void => {
    if (num.value < 100) {
      num.value += 10
    }
  }
</script>

<template>
<<<<<<< HEAD
  <!-- <f-progress type="primary" :percentage="num" /> -->
  <f-progress type="success" :percentage="num" />
  <!-- <f-progress type="danger" :percentage="num" /> -->
  <!-- <f-progress type="warning" :percentage="num" /> -->
  <!-- 
  <f-button-group>
    <f-button simple round type="primary" @click="sun">减少</f-button>
    <f-button simple round type="primary" @click="add">增加</f-button>
  </f-button-group> -->
=======
  <f-button type="primary" @click="visible1 = !visible1">打开</f-button>

  <f-popup v-model:visible="visible1">
    <div>
      <f-tabs>
        <f-tabs-pane label="如烟">
          <p>七岁的那一年，抓住那只蝉，以为能抓住夏天；</p>
          <p>十七岁的那年，吻过他的脸，就以为和他能永远。</p>
        </f-tabs-pane>
        <f-tabs-pane label="盛夏光年">
          <p>长大 难道是人必经的溃烂。</p>
        </f-tabs-pane>
        <f-tabs-pane label="我心中尚未崩坏的地方">
          <p>就算会有一天，没人与我合唱，至少在我的心中，还有个尚未崩坏的地方。</p>
        </f-tabs-pane>
      </f-tabs>
    </div>
  </f-popup>
>>>>>>> e6f159670f6074f32c0977f4e73ddb81f06747e3
</template>
