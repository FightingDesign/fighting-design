import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import { FCalendar } from '../index'

describe('Calendar', () => {
  test('class', () => {
    const wrapper = mount(FCalendar,
      {
        props: { date: new Date() }
      })
    expect(wrapper.classes()).toContain('f-calendar')
  })

  test('border', () => {
    const wrapper = mount(FCalendar,
      {
        props: { date: new Date(), border: true }
      })
    expect(wrapper.classes()).toContain('f-calendar__border')
  })

  test('borderColor', () => {
    const wrapper = mount(FCalendar,
      {
        props: { date: new Date(), border: true, borderColor: 'red' }
      })
    expect(wrapper.attributes('style')).toContain('--calendar-border-color: red')
  })

  test('dayCellHeight', () => {
    const wrapper = mount(FCalendar,
      {
        props: { date: new Date(), dayCellHeight: '20px' }
      })
    expect(wrapper.attributes('style')).toContain('--calendar-day-cell-height: 20px')
  })

  test('dayCellHeight', () => {
    const wrapper = mount(FCalendar,
      {
        props: { date: new Date(), dayCellHeight: 44 }
      })
    expect(wrapper.attributes('style')).toContain('--calendar-day-cell-height: 44px')
  })

  test('weekCellHeight', () => {
    const wrapper = mount(FCalendar,
      {
        props: { date: new Date(), weekCellHeight: '20px' }
      })
    expect(wrapper.attributes('style')).toContain('--calendar-week-cell-height: 20px')
  })

  test('weekCellHeight', () => {
    const wrapper = mount(FCalendar,
      {
        props: { date: new Date(), weekCellHeight: 44 }
      })
    expect(wrapper.attributes('style')).toContain('--calendar-week-cell-height: 44px')
  })
})
