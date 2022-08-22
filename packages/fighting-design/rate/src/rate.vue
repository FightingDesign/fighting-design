<script lang="ts" setup name="FRate">
  import { onMounted, reactive, ref, watchEffect } from 'vue'
  import { Props, Emits } from './rate'

  const prop = defineProps(Props)
  const emit = defineEmits(Emits)
  const event = ref()
  const instances = reactive<{ hover: boolean }[]>([])

  const draw = (current: number) => {
    for (let index = 0; index < instances.length; index++) {
      instances[index].hover = index <= current
    }
  }

  onMounted(() => {
    for (let i = 0; i < prop.count; i++) {
      instances.push({ hover: false })
    }
  })

  const redraw = () => {
    draw(Number(prop.modelValue) - 1)
  }

  watchEffect((): void => {
    redraw()
    event.value = prop.readonly ? '' : 'mouseover'
  })
</script>

<template>
  <div class="rate" @mouseout="redraw()">
    <div
      v-for="(ins, index) in instances"
      :key="index"
      :class="['rate-icon-parent']"
      @[event]="draw(index)"
      @click="emit('update:modelValue', index + 1)"
    >
      <div class="rate-icon">
        <slot v-if="ins.hover" name="selected" />
        <slot v-else name="unselected" />
      </div>
    </div>
  </div>
</template>
