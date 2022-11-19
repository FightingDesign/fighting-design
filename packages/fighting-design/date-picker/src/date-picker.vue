<script lang="ts" setup name="FDatePicker">
  import { Props } from './props'
  import { ref, watch } from 'vue'
  import { FInput } from '../../input'
  import { FDropdown } from '../../dropdown'
  import { FCalendar } from '../../calendar'
  import type { Ref } from 'vue'
  import type { CalendarCallbackInterface } from '../../calendar'
  import type { DatePickerPropsType } from './interface'

  const prop: DatePickerPropsType = defineProps(Props)
  const emit = defineEmits({
    'update:date': (val: string): string => val
  })

  // 传递给日历组件的当前时间
  const date: Date = new Date()
  // 选择的日期
  const pickerDate: Ref<string> = ref<string>(prop.date)

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
    pickerDate.value = `${year}/${month}/${date}`
  }

  /**
   * 监视绑定值，发生变化之后同步数据
   */
  watch(
    (): string => pickerDate.value,
    (newVal): void => {
      emit('update:date', newVal)
    }
  )
</script>

<template>
  <div class="f-date-picker">
    <f-dropdown>
      <f-input v-model="pickerDate" type="text" readonly />

      <template #content>
        <div class="f-date-picker__content">
          <f-calendar
            v-model:date="date"
            :day-cell-height="40"
            :week-cell-height="40"
            :change-date="changeDate"
          />
        </div>
      </template>
    </f-dropdown>
  </div>
</template>
