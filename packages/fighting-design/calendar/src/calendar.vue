<script lang="ts" setup name="FCalendar">
  import { Props } from './calendar'
  import { ref, computed, watchEffect, watch } from 'vue'
  import { FIcon } from '../../index'
  import { lunarCalendar } from '../../_utils'
  import type { Ref, ComputedRef } from 'vue'
  import type {
    mowDataClassListInterface as c,
    optionClickInterface as d,
    addPrefixInterface as e,
    getLunarInterface as f,
    handleClickInterface as g
  } from './interface'
  import type { solar2lunarReturnInterface as h } from '../../_interface'
  import { WEEK_DATA } from '../../_model/calendar/data'
  import { dayMonth } from '../../_model/calendar/utils'

  const prop = defineProps(Props)

  const year: Ref<number> = ref<number>(prop.date.getFullYear())
  const month: Ref<number> = ref<number>(prop.date.getMonth())
  const date: Ref<number> = ref<number>(prop.date.getDate())
  const detailDay: Ref<h> = ref<h>(null as unknown as h)
  // 获取当前月份的 1号是周几
  const firstDayWeek = ref(
    new Date(`${year.value}/${month.value + 1}/1`).getDay()
  )

  watch(
    () => month.value,
    (newVal: number): void => {
      firstDayWeek.value = new Date(`${year.value}/${newVal + 1}/1`).getDay()
    }
  )

  // 上个月需要展示的天数
  const lastMonthDay = computed((): [] => {
    // 上个月的天数
    let lastDays: number = dayMonth(year.value, month.value - 1)
    // 需要展示的上个月信息
    const showLastListResult = []

    for (let i = 0; i < firstDayWeek.value; i++) {
      const dayList = lunarCalendar.solar2lunar(
        year.value,
        month.value,
        lastDays
      )
      showLastListResult.push(dayList)
      lastDays--
    }

    return showLastListResult.reverse()
  })

  // 下个月需要展示的天数
  const nextMonthDay = computed(() => {
    // 获取当前月份的时间
    const thisMonthDay: number =
      dayMonth(year.value, month.value) + firstDayWeek.value
    // 下个月需要展示的天数
    const nextShowDay: number = 7 - (thisMonthDay % 7)

    if (!nextShowDay) {
      return []
    }

    const showNextListResult = []

    for (let i = 0; i < nextShowDay; i++) {
      const dayList = lunarCalendar.solar2lunar(
        year.value,
        month.value + 2,
        i + 1
      )
      showNextListResult.push(dayList)
    }

    return showNextListResult
  })

  // 获取当前月份多少天
  const currentMonthDay = computed(() => {
    return dayMonth(year.value, month.value)
  })

  // 点击上个月切换按钮
  const changeLastMonth = (): void => {
    if (month.value > 0) {
      month.value--
      return
    }
    year.value--
    month.value = 11
  }

  // 点击下个月切换按钮
  const changeNextMonth = (): void => {
    if (month.value < 11) {
      month.value++
      return
    }
    year.value++
    month.value = 0
  }

  // const loadDiffDay = diffDay(getYear.value, getMonth.value)
  // const loadDiffDay = diffDay(prop.date)

  // const {
  //   lastMonthDay,
  //   nextMonthDay,
  //   currentMonthDay,
  //   changeLastMonth,
  //   changeNextMonth
  // } = loadDiffDay

  // 当前日期高亮显示
  const mowDataClassList: c = (data: number): string => {
    return data === date.value ? 'f-calendar-day-today' : ''
  }

  // 点击操作栏
  const optionClick: d = (evt: MouseEvent): void => {
    const option = {
      'f-icon f-icon-arrow-left': (): void => {
        changeLastMonth()
      },
      'f-icon f-icon-column1': (): void => {
        month.value = prop.date.getMonth()
        year.value = prop.date.getFullYear()
        date.value = prop.date.getDate()
      },
      'f-icon f-icon-arrow-right': (): void => {
        changeNextMonth()
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
    return `${year.value}年 ${addPrefix(month.value + 1)}月 ${addPrefix(
      date.value
    )}日`
  })

  // 农历
  const getLunar: f = (day: number): h => {
    const lunarDate = lunarCalendar.solar2lunar(
      year.value,
      month.value + 1,
      day
    )
    return lunarDate as h
  }

  // 修改下面页脚内容
  watchEffect((): void => {
    const lunarDate = lunarCalendar.solar2lunar(
      year.value,
      month.value + 1,
      date.value
    )
    detailDay.value = lunarDate as h
  })

  // 点击对每一天
  const handleClick: g = (day: number): void => {
    date.value = day
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
        v-for="day in currentMonthDay"
        :key="day"
        :class="['f-calendar-day-li', mowDataClassList(day)]"
        @click="handleClick(day)"
      >
        <span class="f-calendar-solar">{{ day }}</span>
        <span v-if="lunar" class="f-calendar-lunar">
          {{ getLunar(day).festival || getLunar(day).IDayCn }}
        </span>
      </li>

      <li
        v-for="day in nextMonthDay"
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
