<script lang="ts" setup>
  import { Props } from './props'
  import { FInput } from '../../input'
  import { FTrigger } from '../../trigger'
  import { FCalendar } from '../../calendar'
  import { EMIT_DATE } from '../../_tokens'
  import { useModel } from '../../_hooks'
  import { isString, addZero, warning } from '../../_utils'
  import { FIconCalendar } from '../../_svg'
  import type { CalendarChangeParams } from '../../calendar'

  defineOptions({name: 'FDatePicker'})

  const prop = defineProps(Props)
  const emit = defineEmits({
    [EMIT_DATE]: (val: string): boolean => isString(val)
  })

  /** 传递给日历组件的当前时间 */
  const date = new Date()

  const { keyword } = useModel<string>(
    (): string => prop.date,
    (val: string): void => {
      emit(EMIT_DATE, val)
    }
  )

  /**
   * 选取时间
   *
   * 通过点击日历上的时间进行选取
   *
   * @param { number } year 年份
   * @param { number } month 月份
   * @param { number } date 日期
   */
  const changeDate = ({ year, month, date }: CalendarChangeParams): void => {
    /**
     * 格式化规则
     *
     * 字符串中必须包含 YYYY 或者 MM 或者 DD
     */
    const formatRule = RegExp(/([Y]{4})|([M]{2})|([D]{2})/)

    /** 如果存在格式化配置项 */
    if (!formatRule.test(prop.format)) {
      /** 在非标准格式下提示警告错误 */
      if (__DEV__) {
        /** format 不是一个标准格式，将使用默认格式 */
        warning(
          'f-date-picker',
          '`format` is not a standard format, default format will be used'
        )
      }

      keyword.value = `${year}/${prop.addZero ? addZero(month) : month}/${
        prop.addZero ? addZero(date) : date
      }`
      return
    }

    /** 格式化映射对象 */
    const checkDate = {
      YYYY: year,
      MM: prop.addZero ? addZero(month) : month,
      DD: prop.addZero ? addZero(date) : date
    }

    /** 需要格式化的时间格式 */
    let formatDate: string = prop.format

    for (const key in checkDate) {
      /**
       * @see String.prototype.replace() https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/replace
       * @see String.prototype.replace https://caniuse.com/?search=String.prototype.replace
       */
      formatDate = formatDate.replace(
        key,
        checkDate[key as keyof typeof checkDate].toString()
      )
    }

    /** 将绑定值设置为格式化后的日期 */
    keyword.value = formatDate
  }
</script>

<template>
  <div class="f-date-picker">
    <f-trigger trigger="click" :disabled="disabled">
      <!-- 输入框 -->
      <f-input
        v-model="keyword"
        autocomplete="off"
        readonly
        :disabled="disabled"
        :placeholder="placeholder || '请选择日期'"
        :clear="clear"
        :size="size"
        :after-icon="FIconCalendar"
      />

      <!-- 
        主要内容插入
        插入的是 dropdown 的 content 插槽
        将日期组件插入其中
      -->
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
    </f-trigger>
  </div>
</template>
