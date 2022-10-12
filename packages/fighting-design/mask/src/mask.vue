<script lang="ts" setup name="FMask">
  import { Props, Emits } from './mask'

  defineProps(Props)
  defineEmits(Emits)
</script>

<template>
  <teleport to="body" :disabled="!appendToBody">
    <transition name="f-mask-fade">
      <div class="f-mask">
        <div class="f-mask-mask" />
        <div class="f-mask-container">
          <div class="f-mask-wrapper">
            <slot />
          </div>
        </div>
      </div>
    </transition>
  </teleport>
</template>
