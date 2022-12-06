<script lang="ts" setup>
  import { ref } from 'vue'

  const value1 = ref(50)

  const current = ref(1)
  const total = ref(100)

  const onNext = (e, v): void => {
    console.log('下一页', e, v)
  }

  const onPrev = (e, v): void => {
    console.log('上一页', e, v)
  }
</script>

<template>
  <br />
  <br />
  <h1>{{ value1 }}</h1>
  <f-slider v-model="value1" :min="40" :max="60"></f-slider>
  <br />
  <br />

  <!-- <f-slider v-model="value1" :step="10"></f-slider> -->

  <!-- <f-pagination v-model:current="current" round :total="total" />
  <f-pagination
    v-model:current="current"
    round
    background
    :total="total"
    :on-next="onNext"
    :on-prev="onPrev"
  /> -->
</template>
