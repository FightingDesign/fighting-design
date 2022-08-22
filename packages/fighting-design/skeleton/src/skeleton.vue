<script lang="ts" setup name="FSkeleton">
  import { computed, toRefs, useSlots } from 'vue'
  import { Props, Emits } from './skeleton'
  import { isNumber } from '../../_utils'

  const props = defineProps(Props)

  const { loading, rounded, animated, circled, rows, size } = toRefs(props)

  defineEmits(Emits)

  const mapClassSizes: {
    [className: string]: boolean
  } = {
    'f-skeleton-size--default': size.value === 'default',
    'f-skeleton-size--small': size.value === 'small',
    'f-skeleton-size--large': size.value === 'large'
  }

  const classFSkeleton = computed(() => {
    return [
      'f-skeleton',
      {
        'f-skeleton--rounded': rounded.value,
        'f-skeleton--animated': animated.value,
        'f-skeleton--circled': circled.value
      },
      {
        ...mapClassSizes
      }
    ]
  })

  const multiSkeleton = isNumber(rows.value) && rows.value > 1

  const slots = useSlots()

  const renderable = computed(() => {
    if (slots.default) {
      return loading.value === true
    } else {
      return true
    }
  })
</script>

<template>
  <template v-if="multiSkeleton">
    <template v-if="renderable">
      <div v-for="_ of rows" :class="classFSkeleton" v-bind="$attrs"></div>
    </template>
    <slot v-else></slot>
  </template>
  <template v-else>
    <div v-if="renderable" :class="classFSkeleton" v-bind="$attrs"></div>
    <slot v-else></slot>
  </template>
</template>
