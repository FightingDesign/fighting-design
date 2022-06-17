<template>
  <transition :class="['f-backTop', { 'f-backTop-round': round }]">
    <div v-if="visible" :style="{ right, bottom }" @click.stop="handleClick">
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

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  const toggle = () => {
    if (el.value) visible.value = el.value.scrollTop >= prop.visibleHeight
  }

  window.onscroll = toggle
  const handleClick = (e: MouseEvent) => {
    scrollToTop()
    emit('click', e)
  }

  onMounted(() => {
    el.value = document.documentElement
  })
</script>
