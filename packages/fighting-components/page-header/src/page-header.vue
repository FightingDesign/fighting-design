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
  <header class="f-page-header">
    <div class="f-page-header-left" @click="handleClick">
      <div v-if="icon || $slots.icon" class="f-page-header-left__icon">
        <slot name="icon">
          <f-icon v-if="icon" :icon="icon" :size="iconSize" />
        </slot>
      </div>
      <div class="f-page-header-left__text">
        {{ backText }}
      </div>
    </div>
    <div :class="[{ center: titleCenter }]" class="f-page-header-main">
      <div
        :class="[titleClass]"
        :style="[
          { 'font-weight': titleBold ? 'bold' : 'normal', color: titleColor }
        ]"
        class="f-page-header-main__title"
      >
        <slot name="title">{{ title }}</slot>
      </div>
      <div
        v-if="subtitle || $slots.subtitle"
        class="f-page-header-main__subtitle"
      >
        <slot name="subtitle">{{ subtitle }}</slot>
      </div>
    </div>
  </header>
</template>
