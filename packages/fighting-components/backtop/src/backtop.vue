<template>
  <transition :class="['f-backtop', { 'f-backtop-round': round }]">
    <div
      v-if="visible"
      :style="backTopStyle"
      @click.stop="handleClick"
    >
      <f-icon v-if="isIcon" :icon="icon" :size="iconSize" />
      <slot v-else/>
    </div>
  </transition>
</template>

<script lang="ts" name="FBacktop" setup>
  import { Emits, Props } from './backtop'
  import { FIcon } from '@fighting-design/fighting-components'
  import { computed, onMounted, ref, shallowRef } from "vue";

  const props = defineProps(Props)
  const emit = defineEmits(Emits)

  const el = shallowRef<HTMLElement>()
  const visible = ref<boolean>(false)

  const backTopStyle = computed(() => ({
    right: props.right + 'px',
    bottom: props.bottom + 'px'
  }))
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }
  const toggle = () => {
    if (el.value) visible.value = el.value.scrollTop >= props.visibleHeight
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
