import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import { FInputNumber } from '../index'

describe('InputNumber', () => {
  test('class', () => {
    const wrapper = mount(FInputNumber)
    expect(wrapper.classes()).toContain('f-input-number')
  })

  test('model', () => {
    const wrapper = mount(FInputNumber, {
      props: { model: 'switch' }
    })
    expect(wrapper.find('.f-input-number__switch').classes()).toContain('f-input-number__switch')
  })

  test('model', () => {
    const wrapper = mount(FInputNumber, {
      props: { model: 'button' }
    })
    expect(wrapper.find('.f-input-number__plus').classes()).toContain('f-input-number__plus')
    expect(wrapper.find('.f-input-number__minus').classes()).toContain('f-input-number__minus')
  })

  // test('size',()=> {
  //   const size = ['large', 'middle', 'small', 'mini'] as const
  //   size.forEach(item=>{
  //     const wrapper = mount(FInputNumber,{
  //       props: {size:item}
  //     })
  //     expect(wrapper)
  //   })
  // })
})
