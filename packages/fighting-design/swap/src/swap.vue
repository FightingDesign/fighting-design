<script lang="ts" setup name="FSwap">
  import { computed, ref } from 'vue'
  import { Props, Emits } from './swap'
  import type { ComputedRef, CSSProperties } from 'vue'
  import type {
    OrdinaryFunctionInterface as a,
    ClassListInterface as b
  } from '../../_interface'

  const prop = defineProps(Props)
  const emit = defineEmits(Emits)

  const face = ref<string>('😈')
  const sound = ref<string>('f-icon-sound-filling-fill')
  const theme = ref<string>('f-icon-Daytimemode')
  const unfold = ref<string>('f-icon-zhankai')
  const favorites = ref<string>('f-icon-favorites')

  if (!prop.modelValue === true) {
    face.value = '😇'
    sound.value = 'f-icon-sound-Mute1'
    theme.value = 'f-icon-nightmode'
    unfold.value = 'f-icon-shouqi'
    favorites.value = 'f-icon-favorites-fill'
  }

  const changeSwap: a = (): void => {
    emit('update:modelValue', !prop.modelValue)
    emit('change', !prop.modelValue)
    if (!prop.modelValue === true) {
      face.value = '😈'
      sound.value = 'f-icon-sound-filling-fill'
      theme.value = 'f-icon-Daytimemode'
      unfold.value = 'f-icon-zhankai'
      favorites.value = 'f-icon-favorites'
    }
    if (!prop.modelValue === false) {
      face.value = '😇'
      sound.value = 'f-icon-sound-Mute1'
      theme.value = 'f-icon-nightmode'
      unfold.value = 'f-icon-shouqi'
      favorites.value = 'f-icon-favorites-fill'
    }
  }

  const rollStyle: ComputedRef<CSSProperties> = computed((): CSSProperties => {
    const { modelValue, size } = prop
    const _size = {
      large: '65px',
      middle: '45px',
      small: '25px'
    } as const

    return {
      right: modelValue ? '0px' : _size[size]
    } as const
  })

  const FSswapClass: ComputedRef<b> = computed((): b => {
    const { size } = prop

    return [
      'f-swap-off',
      {
        [`f-swap-${size}`]: size
      }
    ] as const
  })
</script>

<template>
  <div class="f-swap">
    <div :class="FSswapClass" @click="changeSwap">
      <div :style="rollStyle">
        <f-icon
          v-show="prop.type === 'sound'"
          :class="FSswapClass"
          :icon="sound"
        />
        <div
          :class="[
            prop.modelValue === true
              ? 'sound-on FSswapClass'
              : 'sound-off FSswapClass'
          ]"
        >
          <f-icon
            v-show="prop.type === 'theme'"
            :class="FSswapClass"
            :icon="theme"
          />
        </div>
        <f-icon
          v-show="prop.type === 'flip'"
          :class="FSswapClass"
          :icon="unfold"
        />
        <div
          :class="[
            prop.modelValue === true
              ? 'swap-on FSswapClass'
              : 'swap-off FSswapClass'
          ]"
        >
          <f-icon
            v-show="prop.type === 'favorites'"
            :class="FSswapClass"
            :icon="favorites"
          />
        </div>
        <div
          v-show="prop.type === 'rotate'"
          :class="[
            prop.modelValue === true
              ? 'swap-on FSswapClass'
              : 'swap-off FSswapClass'
          ]"
        >
          {{ face }}
        </div>
      </div>
    </div>
  </div>
</template>
