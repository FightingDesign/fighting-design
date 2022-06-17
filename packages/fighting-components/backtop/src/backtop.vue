<template>
  <transition
    v-show="visible"
    :class="['f-back-top', { 'f-back-top-round': round }]"
  >
    <div :style="{ right, bottom }" @click.stop="handleClick">
      <slot />
    </div>
  </transition>
</template>

<script lang="ts" name="FBackTop" setup>
  import { Emits, Props } from './backTop'
  import { onMounted, ref } from 'vue'
  import type { Ref } from 'vue'
  import { debounce } from '@fighting-design/fighting-utils'

  const prop = defineProps(Props)
  const emit = defineEmits(Emits)

  const visible: Ref<boolean> = ref<boolean>(false)

  const handleScroll = () => {
    return debounce(() => {
      const scrollTop: number = document.documentElement.scrollTop
      visible.value = scrollTop > prop.distance
    }, 200)
  }

  const handleClick = (evt: MouseEvent): void => {
    scrollTo({
      top: 0,
      behavior: 'smooth'
    })
    emit('click', evt)
  }

  onMounted(() => {
    document.addEventListener('scroll', handleScroll())
  })
</script>
