<script lang="ts" setup name="FTag">
  import { Props, Emits } from './tag'
  import { computed } from 'vue'
  import type { handleCloseInterface } from './interface'

  const prop = defineProps(Props)
  const emit = defineEmits(Emits)

  const classList = computed(() => {
    const { simple, type, size, block, border, round } = prop

    return [
      'f-tag',
      `f-tag-${type}`,
      {
        'f-tag-simple': simple,
        'f-tag-block': block,
        'f-tag-border': border,
        'f-tag-round': round,
        [`f-tag-${size}`]: size
      }
    ]
    // return [
    //   'f-tag',
    //   simple ? `f-tag-sim-${type}` : `f-tag-${type}`,
    //   {
    //     [`f-tag-${size}`]: size,
    //     'f-block': block,
    //     'f-no-border': !hit
    //   }
    // ]
  })

  // let styleList = {
  //   borderRadius: prop.round
  // }

  // if (prop.color) {
  //   styleList = Object.assign(
  //     styleList,
  //     prop.simple
  //       ? {
  //           color: prop.color,
  //           border: `1px solid ${prop.color}`,
  //           backgroundColor: '#fff'
  //         }
  //       : {
  //           backgroundColor: prop.color,
  //           color: '#fff',
  //           border: `1px solid ${prop.color}`
  //         }
  //   )
  // }

  const handleClose: handleCloseInterface = (evt: MouseEvent): void => {
    emit('close', evt)
  }
</script>

<template>
  <div :class="classList">
    <!-- <span class="f-tag-text"> -->
    <i v-if="leftIcon" :class="['f-icon', leftIcon]" />
    <slot />
    <i v-if="rightIcon" :class="['f-icon', rightIcon]" />

    <i
      v-if="close"
      class="f-iolor"
      icon="f-icon-close"
      @click.stop="handleClose"
    />
    <!-- </span> -->
  </div>
</template>
