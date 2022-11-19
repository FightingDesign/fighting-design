<script lang="ts" setup name="FDatePicker">
  import { Props } from './props'
  import { FInput } from '../../input'
  import { FDropdown } from '../../dropdown'
  import { FCalendar } from '../../calendar'
  import type { DatePickerPropsType } from './interface'

  const prop: DatePickerPropsType = defineProps(Props)

  const date = new Date()
</script>

<template>
  <div class="f-date-picker">
    <f-dropdown>
      <f-input type="text" readonly />

      <template #content>
        <div class="f-date-picker__content">
          <f-calendar
            v-model:date="date"
            :day-cell-height="40"
            :week-cell-height="40"
          />
        </div>
      </template>
    </f-dropdown>
  </div>
</template>
