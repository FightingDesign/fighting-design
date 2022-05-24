<template>
  <div
    class="vt-flyout"
    ref="elRef"
    @mouseenter="open = true"
    @mouseleave="open = false"
  >
    <button
      type="button"
      class="vt-flyout-button"
      aria-haspopup="true"
      :aria-expanded="open"
      :aria-label="label"
      @click="open = !open"
    >
      <span v-if="props.button" class="vt-flyout-button-text">
        {{ props.button }}
        <f-icon icon="f-icon-arrow-down" />
      </span>

      <f-icon size="20px" icon="f-icon-ellipsis" />
    </button>

    <div class="vt-flyout-menu">
      <VTMenu :items="items">
        <slot />
      </VTMenu>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { MenuItem, MenuItemChild } from '../types/menu'
import { useFocusContainer } from '../composables/FocusContainer'
import VTMenu from './VTMenu.vue'

const props = defineProps<{
  button?: string
  items?: (MenuItem | MenuItemChild)[]
  label?: string
}>()

const open = ref(false)
const elRef = ref<HTMLElement>()
const onBlur = () => {
  open.value = false
}

useFocusContainer({
  elRef,
  onBlur
})
</script>
