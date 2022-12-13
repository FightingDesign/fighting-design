<script lang="ts" setup name="FCalendar">
  import { Props } from './props'
  import { ref, computed, watch } from 'vue'
  import { FSvgIcon } from '../../svg-icon'
  import { FText } from '../../text'
  import { FIconChevronLeftVue, FIconChevronRightVue } from '../../_svg'
  import { addZero, sizeChange, WEEK_DATA } from '../../_utils'
  import { useCalculiTime, useRun } from '../../_hooks'
  import type { CSSProperties } from 'vue'

  const prop = defineProps(Props)

  /**
   * 当前年份
   */
  const year = ref<number>(prop.date.getFullYear())
  /**
   * 当前月份
   */
  const month = ref<number>(prop.date.getMonth())
  /**
   * 当前日期
   */
  const date = ref<number>(prop.date.getDate())

  const { AllMonthDays, changeLastMonth, changeNextMonth } = useCalculiTime(year, month)

  /**
   * 当前日期高亮显示
   *
   * @param _month 月份
   * @param _date 日期
   */
  const mowDataClassList = (_month: number, _date: number): string => {
    if (_date === date.value && _month === month.value + 1) {
      return 'f-calendar__day-today'
    }
    if (_month !== month.value + 1) {
      return 'f-calendar__not-month'
    }
    return ''
  }

  /**
   * 点击操作栏
   *
   * @param target 不同类型用于切换当前时间、下个月、上个月
   */
  const optionClick = (target: 'last' | 'now' | 'next'): void => {
    const option = {
      last: (): void => changeLastMonth(),
      next: (): void => changeNextMonth(),
      now: (): void => {
        month.value = prop.date.getMonth()
        year.value = prop.date.getFullYear()
        date.value = prop.date.getDate()
      }
    } as const

    option[target] && option[target]()
  }

  /**
   * 当前时间
   */
  const nowTime = computed((): string => {
    return `${year.value} / ${addZero(month.value + 1)} / ${addZero(date.value)}`
  })

  /**
   * 点击对每一天
   *
   * @param _month 当前月份
   * @param _date 当前日期
   */
  const handleClick = (_month: number, _date: number): void => {
    date.value = _date

    // 如果点击上个月的选项，则调整上个月
    if (_month < month.value + 1) {
      changeLastMonth()
    } else if (_month > month.value + 1) {
      changeNextMonth()
    }

    useRun(prop.onChangeDate, {
      year: year.value,
      month: _month || month.value,
      date: _date
    })
  }

  /**
   * 类名列表
   */
  const classList = computed((): CSSProperties => {
    const { borderColor, dayCellHeight, weekCellHeight } = prop

    return {
      '--f-calendar-border-color': borderColor,
      '--f-calendar-day-height': sizeChange(dayCellHeight),
      '--f-calendar-week-height': sizeChange(weekCellHeight)
    } as CSSProperties
  })

  /**
   * 检测当前日期是否存在备忘录
   *
   * @param date 当前日期
   */
  const isMemorandum = (date: string): boolean => {
    if (!prop.memorandum) {
      return false
    }
    return Object.keys(prop.memorandum).includes(date)
  }

  /**
   * 当月份发生改变时候触发的回调
   */
  watch(
    (): number => month.value,
    (newValue: number): void => {
      useRun(prop.onChangeMonth, {
        year: year.value,
        month: newValue + 1,
        date: date.value
      })
    }
  )
</script>

<template>
  <div :class="['f-calendar', { 'f-calendar__border': border }]" :style="classList">
    <!-- 头部操作栏 -->
    <header v-if="showHeader" class="f-calendar__header">
      <f-svg-icon :icon="FIconChevronLeftVue" @click.stop="optionClick('last')" />
      <div class="f-calendar__option">
        <span class="f-calendar__now-time">{{ nowTime }}</span>
        <span class="f-calendar__now-date" @click.stop="optionClick('now')"> 今天 </span>
      </div>
      <f-svg-icon :icon="FIconChevronRightVue" @click.stop="optionClick('next')" />
    </header>

    <!-- 周几 -->
    <ul class="f-calendar__week">
      <li v-for="(week, index) in WEEK_DATA" :key="index" class="f-calendar__week-li">
        {{ week }}
      </li>
    </ul>

    <!-- 每一天 -->
    <ul class="f-calendar__day">
      <li
        v-for="(days, index) in AllMonthDays"
        :key="index"
        :class="['f-calendar__day-li', mowDataClassList(days.cMonth, days.cDay)]"
        @click.stop="handleClick(days.cMonth, days.cDay)"
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
