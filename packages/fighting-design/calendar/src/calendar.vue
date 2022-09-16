<script lang="ts" setup name="FCalendar">
  import { Props } from './calendar'
  import { ref, computed } from 'vue'
  import type { Ref, ComputedRef } from 'vue'

  const prop = defineProps(Props)

  const getYear: Ref<number> = ref<number>(prop.date.getFullYear())
  const getMonth: Ref<number> = ref<number>(prop.date.getMonth())
  const getDate: Ref<number> = ref<number>(prop.date.getDate())

  // 获取每个月多少天
  const dayMonth = (month: number, year: number): number => {
    if (month !== 1) {
      const months = [31, 0, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31] as const
      return months[month]
    }
    return (year % 4 == 0 && year % 100 != 0) || year % 400 == 0 ? 29 : 28
  }

  // 获取当前月份多少天
  const getDayMonth: ComputedRef<number> = computed((): number => {
    return dayMonth(getMonth.value, getYear.value)
  })

  // 将小写转换为大写
  const convertUppercase = (week: number): string => {
    return ['日', '一', '二', '三', '四', '五', '六'][week - 1]
  }

  // 当前日期高亮显示
  const mowDataClassList = (data: number): string => {
    return data === getDate.value ? 'f-calendar-day-today' : ''
  }

  // 计算今天周几
  const dayWeek: ComputedRef<number> = computed((): number => {
    const firstDayWeek: number = new Date(
      `${getYear.value}/${getMonth.value + 1}/1`
    ).getDay()

    return firstDayWeek === 0 ? 6 : firstDayWeek
  })
</script>

<template>
  <div class="f-calendar">
    <!-- 周几 -->
    <ul class="f-calendar-week">
      <li v-for="week in 7" :key="week" class="f-calendar-week-li">
        {{ convertUppercase(week) }}
      </li>
    </ul>

    <!-- 每一天 -->
    <ul class="f-calendar-day">
      <li
        v-for="day in getDayMonth"
        :key="day"
        :class="['f-calendar-day-li', mowDataClassList(day)]"
        :style="{ 'margin-left': day === 1 ? `${dayWeek * 50}px` : '' }"
      >
        {{ day }}
      </li>
    </ul>
  </div>
</template>
