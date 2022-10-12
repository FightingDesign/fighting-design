<script lang="ts" setup name="FMask">
  import { Props, Emits } from './mask'
  import type { OrdinaryFunctionInterface as a } from '../../_interface'

  const prop = defineProps(Props)
  const emit = defineEmits(Emits)

  const closeMask: a = (): void => {
    if (!prop.maskClose) return
    emit('update:visible', false)
  }
</script>

<template>
  <teleport to="body" :disabled="!appendToBody">
    <transition name="f-mask-fade">
      <div v-show="visible" class="f-mask">
        <div class="f-mask-container" @click.self="closeMask">
          <div class="f-mask-wrapper">
            <slot />
          </div>
        </div>
      </div>
    </transition>
  </teleport>
</template>
