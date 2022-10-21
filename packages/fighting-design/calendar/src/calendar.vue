<script lang="ts" setup name="FCalendar">
  import { Props, Emits } from './calendar'
  import { ref, computed, watch } from 'vue'
  import { FButton } from '../../button'
  import { FText } from '../../text'
  import { addZero, sizeChange } from '../../_utils'
  import { WEEK_DATA } from '../../_model/calendar/data'
  import { diffDay } from '../../_model/calendar/diff-day'
  import type { Ref, ComputedRef, CSSProperties } from 'vue'
  import type {
    CalendarMowDataClassListInterface as c,
    CalendarOptionClickInterface as d,
    CalendarHandleClickInterface as g,
    CalendarTargetType
  } from './interface'

  const prop = defineProps(Props)
  const emit = defineEmits(Emits)

  const year: Ref<number> = ref<number>(prop.date.getFullYear())
  const month: Ref<number> = ref<number>(prop.date.getMonth())
  const date: Ref<number> = ref<number>(prop.date.getDate())

  const { AllMonthDays, changeLastMonth, changeNextMonth } = diffDay(
    year,
    month
  )

  // 当前日期高亮显示
  const mowDataClassList: c = (_month: number, _date: number): string => {
    if (_date === date.value && _month === month.value + 1) {
      return 'f-calendar__day-today'
    }
    if (_month !== month.value + 1) {
      return 'f-calendar__not-month'
    }
    return ''
  }

  // 点击操作栏
  const optionClick: d = (target: CalendarTargetType): void => {
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
  const handleClick: g = (_month: number, _date: number): void => {
    date.value = _date

    // 如果点击上个月的选项，则调整上个月
    if (_month < month.value + 1) {
      changeLastMonth()
    } else if (_month > month.value + 1) {
      changeNextMonth()
    }

    emit('change-date', {
      year: year.value,
      month: _month || month.value,
      date: _date
    } as const)
  }

  const classList: ComputedRef<CSSProperties> = computed((): CSSProperties => {
    const { borderColor, dayCellHeight, weekCellHeight } = prop

    return {
      '--f-calendar-border-color': borderColor,
      '--f-calendar-day-height': sizeChange(dayCellHeight),
      '--f-calendar-week-height': sizeChange(weekCellHeight)
    }
  })

  const isMemorandum = (date: string): boolean => {
    if (!prop.memorandum) {
      return false
    }
    return Object.keys(prop.memorandum).includes(date)
  }

  // 当月份发生改变时候触发的回调
  watch(
    (): number => month.value,
    (newValue: number): void => {
      emit('change-switch', {
        year: year.value,
        month: newValue + 1,
        date: date.value
      } as const)
    }
  )
</script>

<template>
  <div
    :class="['f-calendar', { 'f-calendar__border': border }]"
    :style="classList"
  >
    <!-- 头部操作栏 -->
    <header v-if="showHeader" class="f-calendar__header">
      <!-- 当前时间 -->
      <div class="f-calendar__time">
        <span class="f-calendar__time-now">{{ nowTime }}</span>
      </div>

      <!-- 操作栏 -->
      <div class="f-calendar__option">
        <div class="f-calendar__last" @click="optionClick('last')">
          <slot name="last-change">
            <f-button text size="mini" type="primary">上个月</f-button>
          </slot>
        </div>
        <div class="f-calendar__now" @click="optionClick('now')">
          <slot name="now-change">
            <f-button text size="mini" type="primary">今天</f-button>
          </slot>
        </div>
        <div class="f-calendar__next" @click="optionClick('next')">
          <slot name="next-change">
            <f-button text size="mini" type="primary">下个月</f-button>
          </slot>
        </div>
      </div>
    </header>

    <!-- 周几 -->
    <ul class="f-calendar__week">
      <li
        v-for="(week, index) in WEEK_DATA"
        :key="index"
        class="f-calendar__week-li"
      >
        {{ week }}
      </li>
    </ul>

    <!-- 每一天 -->
    <ul class="f-calendar__day">
      <li
        v-for="(days, index) in AllMonthDays"
        :key="index"
        :class="[
          'f-calendar__day-li',
          mowDataClassList(days.cMonth, days.cDay)
        ]"
        @click="handleClick(days.cMonth, days.cDay)"
      >
        <span class="f-calendar__solar">{{ days.cDay }}</span>
        <span v-if="lunar" class="f-calendar__lunar">
          {{ days.festival || days.IDayCn }}
        </span>

        <!-- 备忘栏 -->
        <div v-if="isMemorandum(days.date)" class="f-calendar__memorandum">
          <f-text
            v-for="(item, i) in memorandum[days.date]"
            :key="i"
            :type="item.type || 'default'"
            :size="14"
            center
            class="f-calendar__memorandum-item"
          >
            {{ item.content }}
          </f-text>
        </div>
      </li>
    </ul>
  </div>
</template>
