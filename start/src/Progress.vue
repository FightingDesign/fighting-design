<script lang="ts" setup>
  import { ref, computed } from 'vue'

  const a = ref(10)
  const total = ref(30)
  // 小数转化百分比
  const decimalToPercent = computed(() => {
    const data = ((a.value / total.value) * 100).toFixed() + '%'
    return data
  })
</script>

<template>
  <view class="content">
    <view class="grayLine">
      <view class="redLine" :style="{ width: decimalToPercent }" />
    </view>
    <view style="margin-right: 10px">
      {{ decimalToPercent }}
    </view>
  </view>
</template>

<style scoped lang="scss">
  .content {
    display: flex;
    justify-content: space-between;
    margin-top: 40px;
    align-items: center;
    .grayLine {
      margin: 30px;
      height: 30px;
      width: 100%;
      background: #f1f1f1;
      border-radius: 1.5px;
      position: relative;
      z-index: 100;
      .redLine {
        background: #fb4243;
        width: 200px;
        height: 30px;
        position: absolute;
        z-index: 200;
        left: 0;
      }
    }
  }
</style>
