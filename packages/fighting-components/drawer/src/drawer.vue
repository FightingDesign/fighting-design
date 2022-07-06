<!-- eslint-disable vue/script-indent -->
<script lang="ts" setup name="FDrawer">
  import { FIcon } from '@fighting-design/fighting-components/icon'
  import { Props, Emits } from './drawer'
  const prop = defineProps(Props)
  const emit = defineEmits(Emits)
  console.log(prop, emit)

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

  const handleClose = () => {
    if (prop.beforeClose) {
      prop.beforeClose()
    } else {
      emit('update:visible', false)
    }
  }
</script>
<template>
  <teleport to="body" :disabled="!appendToBody">
    <transition name="drawer" :duration="400">
      <div v-show="visible" class="f__drawer__wrapper">
        <div class="f__drawer__container">
          <div
            :class="[{ f__drawer__cover: modal }]"
            @click="handleClose"
          ></div>
          <div :class="['f__drawer', direction]" :style="drawerStyle()">
            <header class="f__drawer__title">
              <span>{{ title || '我是哈哈title' }}</span>
              <!-- <button @click="handleClose">X</button> -->
              <f-icon
                size="30px"
                icon="f-icon-close"
                class="f__drawer__title__close"
                @click="handleClose"
              />
            </header>
            <section class="f__drawer__body">
              <slot />
            </section>
          </div>
        </div>
      </div>
    </transition>
  </teleport>
</template>
