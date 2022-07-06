<!-- eslint-disable vue/script-indent -->
<script lang="ts" setup name="FDrawer">
  import { Props } from './drawer'
  const prop = defineProps(Props)
  console.log(prop)

  const drawerStyle = () => {
    const { direction, size } = prop
    if (['left', 'right'].includes(direction)) {
      return {
        width: typeof size === 'number' ? `${size}px` : size
      }
    } else if (['top', 'bottom'].includes(direction)) {
      return {
        height: typeof size === 'number' ? `${size}px` : size
      }
    }
  }
</script>
<template>
  <!-- 最外层盒子 -->
  <!-- :style="visible ? 'display: block' : 'display: none'" -->
  <transition name="drawer" :duration="400">
    <div v-show="visible" class="f__drawer__wrapper">
      <!-- 内层遮罩层 -->
      <div :class="['f__drawer__container', { f__drawer__cover: modal }]">
        <!-- drawer -->
        <div :class="['f__drawer', direction]" :style="drawerStyle()">
          <header class="f__drawer__title">
            {{ title }}
            <button>X</button>
          </header>
          <section class="f__drawer__body">
            <slot />
          </section>
        </div>
      </div>
    </div>
  </transition>
</template>
