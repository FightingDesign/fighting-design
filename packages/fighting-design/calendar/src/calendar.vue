<script lang="ts" setup name="FCalendar">
  import { Props, Emits } from './calendar'
  import { ref, computed } from 'vue'
  import { FButton } from '../../index'
  import { addZero, isString } from '../../_utils'
  import type { Ref, ComputedRef, CSSProperties } from 'vue'
  import type {
    mowDataClassListInterface as c,
    optionClickInterface as d,
    handleClickInterface as g,
    targetType
  } from './interface'
  import type { getLunarDetailReturnInterface as h } from '../../_interface'
  import { WEEK_DATA } from '../../_model/calendar/data'
  import { diffDay } from '../../_model/calendar/diff-day'

  const prop = defineProps(Props)
  const emit = defineEmits(Emits)

  const year: Ref<number> = ref<number>(prop.date.getFullYear())
  const month: Ref<number> = ref<number>(prop.date.getMonth())
  const date: Ref<number> = ref<number>(prop.date.getDate())
  const detailDay: Ref<h> = ref<h>(null as unknown as h)

  const { AllMonthDays, changeLastMonth, changeNextMonth } = diffDay(
    year,
    month
  )

  // 当前日期高亮显示
  const mowDataClassList: c = (data: number): string => {
    return data === date.value ? 'f-calendar-day-today' : ''
  }

  // 点击操作栏
  const optionClick: d = (target: targetType): void => {
    const option = {
      last: (): void => changeLastMonth(),
      next: (): void => changeNextMonth(),
      now: (): void => {
        month.value = prop.date.getMonth()
        year.value = prop.date.getFullYear()
        date.value = prop.date.getDate()
      }
    }

    option[target]()
  }

  // 当前时间
  const nowTime: ComputedRef<string> = computed((): string => {
    return `${year.value}年 ${addZero(month.value + 1)}月 ${addZero(
      date.value
    )}日`
  })

  // 点击对每一天
  const handleClick: g = (day: number, moth: number): void => {
    date.value = day

    // if (moth) {
    //   if (moth > month.value + 1) {
    //     changeNextMonth()
    //   } else {
    //     changeLastMonth()
    //   }
    // }

    emit('change-date', {
      year: year.value,
      month: moth || month.value,
      day
    } as const)
  }

  const classList: ComputedRef<CSSProperties> = computed((): CSSProperties => {
    const { borderColor, dayCellHeight, weekCellHeight } = prop

    return {
      '--f-calendar-border-color': borderColor,
      '--f-calendar-day-height': isString(dayCellHeight)
        ? dayCellHeight
        : dayCellHeight + 'px',
      '--f-calendar-week-height': isString(weekCellHeight)
        ? weekCellHeight
        : weekCellHeight + 'px'
    }
  })
</script>

<template>
  <div
    :class="['f-calendar', { 'f-calendar-border': border }]"
    :style="classList"
  >
    <!-- 头部操作栏 -->
    <header v-if="showHeader" class="f-calendar-header">
      <!-- 当前时间 -->
      <div class="f-calendar-time">
        <span class="f-calendar-time-now">{{ nowTime }}</span>
      </div>

      <!-- 操作栏 -->
      <div class="f-calendar-option">
        <div class="f-calendar-last" @click="optionClick('last')">
          <slot name="last-change">
            <f-button text size="mini" type="primary">上个月</f-button>
          </slot>
        </div>
        <div class="f-calendar-now" @click="optionClick('now')">
          <slot name="now-change">
            <f-button text size="mini" type="primary">今天</f-button>
          </slot>
        </div>
        <div class="f-calendar-next" @click="optionClick('next')">
          <slot name="next-change">
            <f-button text size="mini" type="primary">下个月</f-button>
          </slot>
        </div>
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
    <ul :class="['f-calendar-day']">
      <li
        v-for="(days, index) in AllMonthDays"
        :key="index"
        :class="['f-calendar-day-li', mowDataClassList(days.cDay)]"
        @click="handleClick(days.cDay, days.cMonth)"
      >
        <span class="f-calendar-solar">{{ days.cDay }}</span>
        <span v-if="lunar" class="f-calendar-lunar">
          {{ days.festival || days.IDayCn }}
        </span>
      </li>
    </ul>

    <!-- 页脚 -->
    <footer v-if="showFooter" class="f-calendar-footer">
      <ul class="f-calendar-footer-list">
        <li>日期：{{ detailDay.date }}</li>
        <li>农历：{{ detailDay.lunarDate }}</li>
        <li>星期：{{ detailDay.ncWeek }}</li>
        <li>属性：{{ detailDay.animal }}</li>
        <li>星座：{{ detailDay.constellation }}</li>
        <li>纪年：{{ detailDay.gzYear }}</li>
        <li>纪月：{{ detailDay.gzMonth }}</li>
        <li>纪日：{{ detailDay.gzDay }}</li>
      </ul>
    </footer>
  </div>
</template>
