import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import { FRate } from '../index'

describe('FRate', () => {
  test('class', () => {
    const wrapper = mount(FRate)
    expect(wrapper.classes()).toContain('f-rate')
  })

  // test('max', () => {
  //   const wrapper = mount(FRate, {
  //     props: { max: 10 }
  //   })
  //   expect(wrapper.find('.f-rate-row').findAll('.f-rate-item').length).toBe(10)
  // })

  // test('size', () => {
  //   const wrapper = mount(FRate, {
  //     props: { size: '20px' }
  //   })
  //   expect(wrapper.find('.f-icon').attributes('style')).toContain('20px')
  // })
  // test('textShow', () => {
  //   const wrapper = mount(FRate, {
  //     props: { textShow: true }
  //   })
  //   expect(wrapper.find('.f-rate-text')).not.toBe(null)
  // })

  // test('textColor', () => {
  //   const wrapper = mount(FRate, {
  //     props: { textShow: true, textColor: 'red' }
  //   })
  //   expect(wrapper.find('.f-rate-text').attributes('style')).toContain('red')
  // })

  // test('text-size', () => {
  //   const wrapper = mount(FRate, {
  //     props: { textShow: true, textSize: '20px' }
  //   })
  //   expect(wrapper.find('.f-rate-text').attributes('style')).toContain('20px')
  // })

  // test('change',async () => {
  //   const wrapper = mount(FRate, {})
  //   await wrapper.find('.f-rate-right').trigger('click')
  //   expect(wrapper.emitted().change).toBeTruthy()
  // })
})
