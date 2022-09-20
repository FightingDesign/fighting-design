<script lang="ts" setup name="FCalendar">
  import { Props } from './calendar'
  import { ref, computed, watchEffect } from 'vue'
  import { FIcon } from '../../index'
  import { lunarCalendar } from '../../_utils'
  import type { Ref, ComputedRef } from 'vue'
  import type {
    // dayMonthInterface as a,
    // convertUppercaseInterface as b,
    mowDataClassListInterface as c,
    optionClickInterface as d,
    addPrefixInterface as e,
    getLunarInterface as f,
    handleClickInterface as g
  } from './interface'
  import type {
    solar2lunarReturnInterface as h,
    classListInterface as i
  } from '../../_interface'
  import { dayMonth } from '../../_model/calendar/utils'
  import { WEEK_DATA } from '../../_model/calendar/data'
  import { diffDay } from '../../_model/calendar/diff-day'

  const prop = defineProps(Props)

  const getYear: Ref<number> = ref<number>(prop.date.getFullYear())
  const getMonth: Ref<number> = ref<number>(prop.date.getMonth())
  const getDate: Ref<number> = ref<number>(prop.date.getDate())
  const detailDay: Ref<h> = ref<h>(null as unknown as h)

  const loadDiffDay = diffDay(getYear.value, getMonth.value)

  const { lastMonthDay, nestMonthDay } = loadDiffDay

  // 获取当前月份多少天
  const getDayMonth: ComputedRef<number> = computed((): number => {
    return dayMonth(getYear.value, getMonth.value)
  })

  // 当前日期高亮显示
  const mowDataClassList: c = (data: number): i => {
    return [
      {
        'f-calendar-day-today': data === getDate.value
      }
    ]
  }

  // 点击操作栏
  const optionClick: d = (evt: MouseEvent): void => {
    const option = {
      'f-icon f-icon-arrow-left': (): void => {
        if (getMonth.value > 0) {
          getMonth.value--
          return
        }
        getYear.value--
        getMonth.value = 11
      },
      'f-icon f-icon-column1': (): void => {
        getMonth.value = prop.date.getMonth()
        getYear.value = prop.date.getFullYear()
        getDate.value = prop.date.getDate()
      },
      'f-icon f-icon-arrow-right': (): void => {
        if (getMonth.value < 11) {
          getMonth.value++
          return
        }
        getYear.value++
        getMonth.value = 0
      }
    }

    const className: string = (evt.target as HTMLElement).className
    if (className !== 'f-calendar-option') {
      option[className]()
    }
  }

  // 给数字前面加 0
  const addPrefix: e = (num: number): string => {
    return num > 9 ? num.toString() : `0${num}`
  }

  // 当前时间
  const nowTime: ComputedRef<string> = computed((): string => {
    return `${getYear.value}年 ${addPrefix(getMonth.value + 1)}月 ${addPrefix(
      getDate.value
    )}日`
  })

  // 农历
  const getLunar: f = (day: number): h => {
    const lunarDate = lunarCalendar.solar2lunar(
      getYear.value,
      getMonth.value + 1,
      day
    )
    return lunarDate as h
  }

  // 修改下面页脚内容
  watchEffect((): void => {
    const lunarDate = lunarCalendar.solar2lunar(
      getYear.value,
      getMonth.value + 1,
      getDate.value
    )
    detailDay.value = lunarDate as h
  })

  // 点击对每一天
  const handleClick: g = (day: number): void => {
    getDate.value = day
  }
</script>

<template>
  <div class="f-calendar">
    <!-- 头部操作栏 -->
    <header v-if="showHeader" class="f-calendar-header">
      <!-- 当前时间 -->
      <div class="f-calendar-time">
        <span class="f-calendar-time-now">{{ nowTime }}</span>
      </div>

      <!-- 操作栏 -->
      <div class="f-calendar-option" @click="optionClick">
        <f-icon :size="24" icon="f-icon-arrow-left" />
        <f-icon :size="21" icon="f-icon-column1" />
        <f-icon :size="24" icon="f-icon-arrow-right" />
      </div>
    </header>

    <!-- 周几 -->
    <ul class="f-calendar-week">
      <li
        v-for="(week, index) in WEEK_DATA"
        :key="index"
        class="f-calendar-week-li"
      >
        {{ week }}
      </li>
    </ul>

    <!-- 每一天 -->
    <ul class="f-calendar-day">
      <li
        v-for="day in lastMonthDay"
        :key="day"
        :class="['f-calendar-day-li', 'f-calendar-day-li-last']"
      >
        <span class="f-calendar-solar">{{ day.cDay }}</span>
        <span v-if="lunar" class="f-calendar-lunar">
          {{ day.festival || day.IDayCn }}
        </span>
      </li>

      <li
        v-for="day in getDayMonth"
        :key="day"
        :class="['f-calendar-day-li', ...mowDataClassList(day)]"
        @click="handleClick(day)"
      >
        <span class="f-calendar-solar">{{ day }}</span>
        <span v-if="lunar" class="f-calendar-lunar">
          {{ getLunar(day).festival || getLunar(day).IDayCn }}
        </span>
      </li>

      <li
        v-for="day in nestMonthDay"
        :key="day"
        :class="['f-calendar-day-li', 'f-calendar-day-li-last']"
      >
        <span class="f-calendar-solar">{{ day.cDay }}</span>
        <span v-if="lunar" class="f-calendar-lunar">
          {{ day.festival || day.IDayCn }}
        </span>
      </li>
    </ul>

    <!-- 页脚 -->
    <footer v-if="showFooter" class="f-calendar-footer">
      <ul class="f-calendar-footer-list">
        <li>日期：{{ detailDay.date }}</li>
        <li>农历：{{ detailDay.lunarDate }}</li>
        <li>星期：{{ detailDay.ncWeek }}</li>
        <li>属性：{{ detailDay.Animal }}</li>
        <li>星座：{{ detailDay.constellation }}</li>
        <li>纪年：{{ detailDay.gzYear }}</li>
        <li>纪月：{{ detailDay.gzMonth }}</li>
        <li>纪日：{{ detailDay.gzDay }}</li>
      </ul>
    </footer>
  </div>
</template>
