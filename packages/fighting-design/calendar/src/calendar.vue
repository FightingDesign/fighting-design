<script lang="ts" setup name="FCalendar">
  import { Props, Emits } from './calendar'
  import { ref, computed } from 'vue'
  import type { Ref } from 'vue'

  const prop = defineProps(Props)
  defineEmits(Emits)

  const getYear: Ref<number> = ref<number>(prop.date.getFullYear())
  const getMonth: Ref<number> = ref<number>(prop.date.getMonth())
  const getDate: Ref<number> = ref<number>(prop.date.getDate())

  console.log(getYear.value, getMonth.value, getDate.value)

  // 获取每个月多少天
  const dayMonth = (month: number, year: number): number => {
    if (month !== 1) {
      const months: number[] = [31, 0, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
      return months[month]
    }
    return (year % 4 == 0 && year % 100 != 0) || year % 400 == 0 ? 29 : 28
  }

  // 获取当前月份多少天
  const getDayMonth = computed(() => {
    return dayMonth(getMonth.value, getYear.value)
  })

  // 将小写转换为大写
  const convertUppercase = (week: number): string => {
    return ['日', '一', '二', '三', '四', '五', '六'][week - 1]
  }

  const mowDataClassList = (data: number): string => {
    return data === getDate.value ? 'f-calendar-day-today' : ''
  }
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
      >
        {{ day }}
      </li>
    </ul>
  </div>
</template>
