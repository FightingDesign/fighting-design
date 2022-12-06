<script lang="ts" setup name="FTimePicker">
  import { Props } from './props'
  import { reactive, computed, watch } from 'vue'
  import { FInput } from '../../input'
  import { FDropdown } from '../../dropdown'
  import { addZero, isString } from '../../_utils'
  import { FIconClockTime } from '../../_svg'
  import type { TimePickerTimeListInterface } from './interface'

  const prop = defineProps(Props)
  const emit = defineEmits({
    'update:time': (val: string): boolean => isString(val)
  })

  /**
   * 获取当前的时间
   */
  const nowDate: Date = new Date()
  /**
   * 当前日期对象
   */
  const timeList = reactive({
    hover: addZero(nowDate.getHours()),
    minute: addZero(nowDate.getMinutes())
  } as TimePickerTimeListInterface)

  /**
   * 获取选择的时间 & 设置时间
   */
  const pickerTime = computed({
    /**
     * 获取值返回 time
     */
    get: (): string => prop.time,
    /**
     * 设置值
     *
     * @param val 最新的值
     */
    set: (val: string): void => {
      emit('update:time', val)
    }
  })

  /**
   * 监视 timeList 对象发生变化同步最新选取的时间
   */
  watch(
    (): TimePickerTimeListInterface => timeList,
    (): void => {
      pickerTime.value = `${timeList.hover}:${timeList.minute}`
    },
    { deep: true }
  )

  /**
   * 点击对应的时间进行选取
   *
   * @param date 当前的时间数字
   * @param params 小时还是分钟
   */
  const handleClick = (date: number, params: 'hover' | 'minute'): void => {
    timeList[params] = addZero(date)
  }
</script>

<template>
  <div class="f-time-picker">
    <f-dropdown :disabled="readonly">
      <f-input
        v-model="pickerTime"
        type="text"
        :readonly="readonly"
        :clear="clear"
        :after-icon="FIconClockTime"
      />

      <template #content>
        <div class="f-time-picker__content">
          <!-- 小时容器 -->
          <div class="f-time-picker__hour">
            <div
              v-for="hour in 24"
              :key="hour"
              class="f-time-picker__hour-item"
              @click.stop="handleClick(hour, 'hover')"
            >
              {{ addZero(hour - 1) }}
            </div>
          </div>

          <!-- 时间容器 -->
          <div class="f-time-picker__minute">
            <div
              v-for="minute in 60"
              :key="minute"
              class="f-time-picker__minute-item"
              @click.stop="handleClick(minute, 'minute')"
            >
              {{ addZero(minute) }}
            </div>
          </div>
        </div>
      </template>
    </f-dropdown>
  </div>
</template>
