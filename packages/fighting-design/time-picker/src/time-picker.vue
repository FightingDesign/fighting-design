<script lang="ts" setup name="FTimePicker">
  import { Props } from './props'
  import { ref, watch, reactive } from 'vue'
  import { FInput } from '../../input'
  import { FDropdown } from '../../dropdown'
  import { addZero, isString } from '../../_utils'
  import { FIconClockTime } from '../../_svg'
  import type { Ref } from 'vue'
  import type {
    TimePickerPropsType,
    TimePickerTimeListInterface,
    TimePickerHandleClickInterface
  } from './interface'

  const prop: TimePickerPropsType = defineProps(Props)
  const emit = defineEmits({
    'update:time': (val: string): boolean => isString(val)
  })

  // 获取当前的时间
  const nowDate: Date = new Date()
  // 选择的日期
  const pickerTime: Ref<string> = ref<string>(prop.time)
  // 当前小时
  const timeList: TimePickerTimeListInterface =
    reactive<TimePickerTimeListInterface>({
      hover: addZero(nowDate.getHours()),
      minute: addZero(nowDate.getMinutes())
    })

  /**
   * 监视绑定值，发生变化之后同步数据
   */
  watch(
    (): string => pickerTime.value,
    (newVal: string): void => {
      emit('update:time', newVal)
    }
  )

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
  const handleClick: TimePickerHandleClickInterface = (
    date: number,
    params: 'hover' | 'minute'
  ): void => {
    timeList[params] = addZero(date)
  }
</script>

<template>
  <div class="f-time-picker">
    <f-dropdown>
      <f-input
        v-model="pickerTime"
        type="text"
        readonly
        clear
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
