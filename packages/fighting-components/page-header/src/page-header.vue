<script lang="ts" setup name="FPageHeader">
  import { FIcon } from '@fighting-design/fighting-components/icon'
  import { Props, Emits } from './page-header'
  import type { handleClickInterface } from './interface'

  defineProps(Props)
  const emit = defineEmits(Emits)

  const handleClick: handleClickInterface = (): void => {
    emit('back')
  }
</script>

<template>
  <header class="f-header">
    <div class="f-header-left" @click="handleClick">
      <div v-if="icon || $slots.icon" class="f-header-left__icon">
        <slot name="icon">
          <f-icon v-if="icon" :icon="icon" :size="iconSize" />
        </slot>
      </div>
      <div class="f-header-left__text">
        {{ backText }}
      </div>
    </div>
    <div :class="[{ center: titleCenter }]" class="f-header-main">
      <div
        :class="[titleClass]"
        :style="[
          { 'font-weight': titleBold ? 'bold' : 'normal', color: titleColor }
        ]"
        class="f-header-main__title"
      >
        <slot name="title">{{ title }}</slot>
      </div>
      <div v-if="subtitle || $slots.subtitle" class="f-header-main__subtitle">
        <slot name="subtitle">{{ subtitle }}</slot>
      </div>
    </div>
  </header>
</template>
