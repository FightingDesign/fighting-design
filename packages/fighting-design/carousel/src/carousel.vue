<script lang="ts" setup name="FCarousel">
  import { onUnmounted, ref, watch } from 'vue'
  import { FIconChevronLeft, FIconChevronRight } from '../../../fighting-icon'
  import { Props } from './props'

  //默认当前索引为0
  const index = ref(0)
  let timer = null

  const prop = defineProps(Props)

  //自动播放函数
  const play = (): void => {
    clearInterval(timer)
    timer = setInterval(() => {
      index.value++
      if (index.value >= prop.data.length) {
        index.value = 0
      }
    }, prop.duration)
  }

  //监听如果轮播图数组有数据，且自动播放时执行
  watch(
    () => prop.data,
    (newVal) => {
      if (newVal.length && prop.autoPlay) {
        index.value = 0
        play()
      }
    },
    { immediate: true }
  )
  //如果销毁组件停止自动播放
  onUnmounted(() => {
    clearInterval(timer)
  })

  //点击左右切换
  const toggle = (step): void => {
    index.value += step
    if (index.value > prop.data.length - 1) {
      index.value = 0
      return
    }
    if (index.value < 0) {
      index.value = prop.data.length - 1
    }
  }

  //鼠标进入停止滚动
  const stop = (): void => {
    if (timer) clearInterval(timer)
  }
  //鼠标移除继续
  const start = (): void => {
    if (prop.data.length && prop.autoPlay) {
      play()
    }
  }
</script>

<template>
  <div class="f-carousel" @mouseenter="stop()" @mouseleave="start()">
    <ul class="f-carousel-body">
      <li
        v-for="(item, i) in data"
        :key="`carousel-item-${i}`"
        class="f-carousel__item"
        :class="{ fade: index === i }"
      >
        <slot :row="item">
          <img :src="item.url" alt="" />
        </slot>
      </li>
    </ul>

    <div class="f-carousel__btn prev" @click="toggle(-1)">
      <f-svg-icon>
        <f-icon-chevron-left />
      </f-svg-icon>
    </div>
    <div class="f-carousel__btn next" @click="toggle(1)">
      <f-svg-icon>
        <f-icon-chevron-right />
      </f-svg-icon>
    </div>

    <div class="f-carousel__indicator">
      <span
        v-for="(i, inx) in data"
        :key="`f-carousel__idicator_${i}`"
        :class="{ active: index === inx }"
        @click="index = inx"
      ></span>
    </div>
  </div>
</template>
