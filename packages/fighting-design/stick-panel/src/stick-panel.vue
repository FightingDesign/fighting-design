<script lang="ts" setup name="FStickPanel">
  import { Props } from './stick-panel'
  import { ref } from 'vue'

  const prop = defineProps(Props)

  const isOpen = ref(prop.open)

  const handleClick = (): void => {
    isOpen.value = !isOpen.value
  }
</script>

<template>
  <div class="f-stick-panel">
    <div
      :class="[
        'f-stick-panel-content',
        {
          'f-stick-panel-content-open': isOpen
        }
      ]"
    >
      <slot />
    </div>
    <div class="f-stick-panel-option" @click="handleClick">打开</div>
  </div>
</template>
