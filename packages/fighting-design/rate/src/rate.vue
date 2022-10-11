<script lang="ts" setup name="FRate">
  import { Props, Emits } from './rate'
  import { FIcon } from '../../icon'
  import { ref, watch } from 'vue'

  const prop = defineProps(Props)
  const emit = defineEmits(Emits)

  const starValue = ref(prop.modelValue)

  // 反复移动时触发
  const onMouseover = (index: number): void => {
    starValue.value = index
  }

  // 移出触发
  const onMouseout = (): void => {
    starValue.value = prop.modelValue
  }

  // 点击触发
  const handleClick = (index: number): void => {
    starValue.value = index
    emit('update:modelValue', index)
    emit('change', index)
  }

  watch(
    (): number => prop.modelValue,
    (): void => {
      starValue.value = prop.modelValue
    }
  )
</script>

<template>
  <div class="f-rate">
    <ul class="f-rate-list">
      <li
        v-for="(star, index) in max"
        :key="index"
        class="f-rate-star"
        @mouseout="onMouseout"
        @mouseover="onMouseover(index + 1)"
        @click="handleClick(index + 1)"
      >
        <f-icon
          icon="f-icon-collection-fill"
          :color="starValue > index ? '#fcc202' : '#eef'"
          :size="25"
        />
      </li>
    </ul>
  </div>
</template>
