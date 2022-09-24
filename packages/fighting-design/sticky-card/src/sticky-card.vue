<script lang="ts" setup name="FStickPanel">
  import { Props } from './sticky-card'
  import { ref } from 'vue'

  const prop = defineProps(Props)

  const isOpen = ref(prop.open)

  const handleClick = (): void => {
    isOpen.value = !isOpen.value
  }
</script>

<template>
  <div class="f-sticky-card">
    <div
      :class="[
        'f-sticky-card-box',
        {
          'f-sticky-card-box-open': isOpen
        }
      ]"
    >
      <div class="f-sticky-card-content">
        <slot />
      </div>
    </div>
    <div class="f-sticky-card-option" @click="handleClick">
      {{ isOpen ? '关闭' : '打开' }}
    </div>
  </div>
</template>
