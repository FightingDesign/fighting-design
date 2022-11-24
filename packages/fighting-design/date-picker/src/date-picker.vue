<script lang="ts" setup name="FDatePicker">
  import { Props } from './props'
  import { computed } from 'vue'
  import { FInput } from '../../input'
  import { FDropdown } from '../../dropdown'
  import { FCalendar } from '../../calendar'
  import type { WritableComputedRef } from 'vue'
  import type { CalendarCallbackInterface } from '../../calendar'
  import type { DatePickerPropsType } from './interface'

  const prop: DatePickerPropsType = defineProps(Props)
  const emit = defineEmits({
    'update:date': (val: string): string => val
  })

  // 传递给日历组件的当前时间
  const date: Date = new Date()

  /**
   * 获取选择的日期 & 设置日期
   */
  const pickerDate: WritableComputedRef<string> = computed({
    /**
     * 获取值返回 date
     */
    get: (): string => prop.date,
    /**
     * 设置值
     *
     * @param val 最新的值
     */
    set: (val: string): void => {
      emit('update:date', val)
    }
  })

  /**
   * 选取时间
   *
   * 通过点击日历上的时间进行选取
   */
  const changeDate: CalendarCallbackInterface = ({
    year,
    month,
    date
  }): void => {
    // 如果存在格式化配置项
    if (prop.format) {
      const checkDate = { YYYY: year, MM: month, DD: date }

      let formatDate: string = prop.format

      for (const key in checkDate) {
        formatDate = formatDate.replace(key, checkDate[key])
      }
      pickerDate.value = formatDate
      return
    }
    pickerDate.value = `${year}/${month}/${date}`
  }
</script>

<template>
  <div class="f-date-picker">
    <f-dropdown :disabled="readonly">
      <f-input
        v-model="pickerDate"
        :clear="clear"
        :size="size"
        :readonly="readonly"
      />

      <template #content>
        <div class="f-date-picker__content">
          <f-calendar
            v-model:date="date"
            :day-cell-height="40"
            :week-cell-height="40"
            :on-change-date="changeDate"
          />
        </div>
      </template>
    </f-dropdown>
  </div>
</template>
