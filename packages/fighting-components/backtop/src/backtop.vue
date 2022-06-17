<template>
  <transition :class="['f-back-top', { 'f-back-top-round': round }]">
    <div :style="{ right, bottom }" @click.stop="handleClick">
      <!-- <f-icon v-if="isIcon" :icon="icon" :size="iconSize" /> -->
      <slot />
    </div>
  </transition>
</template>

<script lang="ts" name="FBackTop" setup>
  import { Emits, Props } from './backTop'
  import { onMounted, ref, shallowRef } from 'vue'

  const prop = defineProps(Props)
  const emit = defineEmits(Emits)

  const el = shallowRef<HTMLElement>()
  const visible = ref<boolean>(false)

  const toggle = () => {
    console.log(el.value)
    if (el.value) {
      visible.value = el.value.scrollTop >= prop.visibleHeight
    }
  }

  window.onscroll = toggle
  const handleClick = (evt: MouseEvent): void => {
    scrollTo({
      top: 0,
      behavior: 'smooth'
    })
    emit('click', evt)
  }

  onMounted(() => {
    el.value = document.documentElement
  })
</script>
