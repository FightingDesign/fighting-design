<template>
  <div
    :class="cls"
    :style="sty"
  >
    <span class="f-text">
      <i v-if="leftIcon" :class="['f-icon', leftIcon]"/>
      <slot />
      <i v-if="rightIcon" :class="['f-icon', rightIcon]"/>
      <i v-if="closable" :class="['f-icon', 'f-icon-close']" />
    </span>
  </div>
</template>

<script lang="ts" setup name="FTag">
  import { Props, Emits } from './tag'
  import type { onClickInterface } from '@fighting-design/fighting-type'
  import { computed } from 'vue';

  const { simple, type, size, block, hit, round, color } = defineProps(Props)
  const emit = defineEmits(Emits)
  const ftColor = simple ? '#fff' : color
  const bgColor = simple ? color : '#fff'

  const cls = computed(() => 
    [
      'f-tag',
      (simple ? `f-tag-sim-${type}` : `f-tag-${type}`),
      
      {
        [`f-tag-${size}`]: size,
        'f-block': block,
        'f-no-border': !hit,
      }
    ]
  );

  const sty = computed(()=> {
   return {
     color: ftColor,
     backgroundColor: bgColor,
     borderRadius: round, 
     border: `1px solid ${color}`,
   }
  })

  const handleClose: onClickInterface = (event: PointerEvent): void => {
    event.stopPropagation()
    emit('close', event)
  }
</script>
