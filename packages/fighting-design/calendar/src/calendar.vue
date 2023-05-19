<script lang="ts" setup>
  import { Props } from './props'
  import { computed, watch, reactive } from 'vue'
  import { FSvgIcon } from '../../svg-icon'
  import { FIconChevronLeft, FIconChevronRight } from '../../_svg'
  import { addZero, isDate } from '../../_utils'
  import { useCalendar, useRun, useGlobal, useList } from '../../_hooks'
  import type { GetLunarDetailReturn } from '../../_hooks'

  defineOptions({ name: 'FCalendar' })

  const prop = defineProps(Props)

  /**
   * 获取日期参数
   *
   * 如果传入的不是一个 Date 对象，则实例化一个当前日期对象
   */
  const nowDate = computed((): Date => (isDate(prop.date) ? prop.date : new Date()))

  /** 日期集合 */
  const dateParams = reactive({
    year: nowDate.value.getFullYear(),
    month: nowDate.value.getMonth() + 1,
    date: nowDate.value.getDate()
  })

  const { AllMonthDays, changeLastMonth, changeNextMonth } = useCalendar(dateParams)
  const { getLang } = useGlobal()
  const { run } = useRun()
  const { styles, classes } = useList(prop, 'calendar')

  /** 星期列表 */
  const weekList = computed((): string[] => getLang('calendar').value.weekList)

  /**
   * 当前日期高亮显示
   *
   * @param { number } month 月份
   * @param { number } date 日期
   * @returns { string } class 类名
   */
  const mowDataClassList = (month: number, date: number): string => {
    /** 如果当前的月份和日期和绑定的日期相同，则高亮显示 */
    if (date === dateParams.date && month === dateParams.month) {
      return 'f-calendar__day-today'
    }

    /** 如果不是当前月份的时间 */
    if (month !== dateParams.month) {
      return 'f-calendar__not-month'
    }

    return ''
  }

  /**
   * 点击操作栏
   *
   * @param { 'last' | 'now' | 'next' } target 不同类型用于切换当前时间、下个月、上个月
   */
  const optionClick = (target: 'last' | 'now' | 'next'): void => {
    /**
     * 操作栏可选项对象映射
     *
     * @param { Function } last 点击上个月执行的方法
     * @param { Function } next 点击下个月执行的方法
     * @param { Function } now 点击今天执行的方法
     */
    const option = {
      last: (): void => changeLastMonth(),
      next: (): void => changeNextMonth(),
      now: (): void => {
        dateParams.month = prop.date.getMonth()
        dateParams.year = prop.date.getFullYear()
        dateParams.date = prop.date.getDate()
      }
    } as const

    /** 如果存在则执行指定方法 */
    option[target] && option[target]()
  }

  /** 当前时间 */
  const nowTime = computed((): string => {
    return `${dateParams.year} / ${addZero(dateParams.month)} / ${addZero(
      dateParams.date
    )}`
  })

  /**
   * 点击对每一天
   *
   * @param { number } days 日期对象
   */
  const handleClick = (days: GetLunarDetailReturn): void => {
    /**
     * 上一次的时间
     *
     * 用于判断点击的时间是否和上一次的相同
     */
    const lastDay: number = dateParams.date

    /** 同步更新日期 */
    dateParams.date = days.day

    /**
     * 切换到下一年
     *
     * 如果年份大于当前绑定的年份，或者月份大于当前绑定的月份
     */
    if (days.year > dateParams.year || days.month > dateParams.month) {
      changeNextMonth()
    } else if (days.year > dateParams.year || days.month < dateParams.month) {
      /**
       * 切换到上一年
       *
       * 如果年份小于当前绑定的年份，或者月份小于当前绑定的月份
       */
      changeLastMonth()
    }

    /**
     * 执行回调方法
     *
     * 点击对应着日期的切换，如果切换则执行回调
     *
     * 判断显示点击相同时间指定回调
     */
    if (lastDay !== days.day) {
      run(prop.onChangeDate, {
        year: dateParams.year,
        month: days.month || dateParams.month,
        date: days.day
      })
    }
  }

  /** 当月份发生改变时候触发的回调 */
  watch(
    (): number => dateParams.month,
    /**
     * @param { number } month 最新的月份
     */
    (month: number): void => {
      run(prop.onChangeMonth, {
        year: dateParams.year,
        month,
        date: dateParams.date
      })
    }
  )

  /** 样式列表 */
  const styleList = styles(['borderColor', 'dayCellHeight', 'weekCellHeight'])

  /** 类名列表 */
  const classList = classes(['border'], 'f-calendar')
</script>

<template>
  <div :class="classList" :style="styleList">
    <!-- 头部操作栏 -->
    <header v-if="showHeader" class="f-calendar__header">
      <!-- 上个月切换按钮 -->
      <f-svg-icon :icon="FIconChevronLeft" @click.stop="optionClick('last')" />

      <!-- 操作栏 -->
      <div class="f-calendar__option">
        <span class="f-calendar__now-time">{{ nowTime }}</span>
        <span class="f-calendar__now-date" @click.stop="optionClick('now')">今天</span>
      </div>

      <!-- 下个月切换按钮 -->
      <f-svg-icon :icon="FIconChevronRight" @click.stop="optionClick('next')" />
    </header>

    <!-- 周几 -->
    <div class="f-calendar__week">
      <div v-for="(week, index) in weekList" :key="index" class="f-calendar__week-item">
        {{ week }}
      </div>
    </div>

    <!-- 每一天 -->
    <div class="f-calendar__day">
      <div
        v-for="(days, index) in AllMonthDays"
        :key="index"
        :class="['f-calendar__day-item', mowDataClassList(days.month, days.day)]"
        @click.stop="handleClick(days)"
      >
        <span class="f-calendar__solar">{{ days.day }}</span>
        <span v-if="lunar" class="f-calendar__lunar">
          <!-- 农历节日 -> 阳历节日 -> 节气 -> 农历日期 -->
          {{ days.lunarFestival || days.festival || days.term || days.IDayCn }}
        </span>
      </div>
    </div>
  </div>
</template>
