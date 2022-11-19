<script lang="ts" setup name="FTimePicker">
  import { Props } from './props'
  import { ref, watch } from 'vue'
  import { FInput } from '../../input'
  import { FDropdown } from '../../dropdown'
  import type { TimePickerPropsType } from './interface'
  import type { Ref } from 'vue'

  const prop: TimePickerPropsType = defineProps(Props)
  const emit = defineEmits({
    'update:time': (val: string): string => val
  })

  // 选择的日期
  const pickerTime: Ref<string> = ref<string>(prop.time)

  /**
   * 监视绑定值，发生变化之后同步数据
   */
  watch(
    (): string => pickerTime.value,
    (newVal): void => {
      emit('update:time', newVal)
    }
  )
</script>

<template>
  <div class="f-time-picker">
    <f-dropdown>
      <f-input v-model="pickerTime" type="text" readonly />

      <template #content>
        <div class="f-time-picker__content">
          <!-- 小时容器 -->
          <div class="f-time-picker__hour">
            <div
              v-for="hour in 24"
              :key="hour"
              class="f-time-picker__hour-item"
            >
              {{ hour - 1 }}
            </div>
          </div>

          <!-- 时间容器 -->
          <div class="f-time-picker__minute">
            <div
              v-for="minute in 60"
              :key="minute"
              class="f-time-picker__minute-item"
            >
              {{ minute }}
            </div>
          </div>
        </div>
      </template>
    </f-dropdown>
  </div>
</template>
