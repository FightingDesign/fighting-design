import { markRaw } from 'vue'
import { mount } from '@vue/test-utils'
import { vi, describe, expect, test } from 'vitest'
import { FIconStarB } from '@fighting-design/fighting-icon'
import { FRate } from '../index'

describe('FRate', () => {
  test('create', () => {
    const wrapper = mount(FRate)
    const domWrapperList = wrapper.findAll('.f-rate__star')

    expect(wrapper.classes()).toContain('f-rate')
    expect(wrapper.attributes('role')).toBe('slider')
    expect(domWrapperList.length).toBe(5)
  })

  test('clicking the star should be reactive', async () => {
    const wrapper = mount(FRate, {
      props: { 
        modelValue: 2,
        'onUpdate:modelValue': (val: number) => {
          wrapper.setProps({ modelValue: val })
        }
      }
    })
    expect(wrapper.props('modelValue')).toBe(2)
    const domWrapperList = wrapper.findAll('.f-rate__star')
    // click the first star
    await domWrapperList[0].trigger('click')
    expect(wrapper.props('modelValue')).toBe(1)
    // click the last star
    await domWrapperList[domWrapperList.length - 1].trigger('click')
    expect(wrapper.props('modelValue')).toBe(5)
  })

  test('max', () => {
    const max = 10
    const wrapper = mount(FRate, {
      props: { max }
    })
    const domWrapperList = wrapper.findAll('.f-rate__star')
    expect(domWrapperList.length).toBe(max)
  })

  test('effectColor', async () => {
    const activeStarCount = 2
    const wrapper = mount(FRate, {
      props: {
        effectColor: 'red',
        modelValue: activeStarCount
      }
    })
    wrapper.findAll('.f-svg-icon').forEach((itemWrapper, index)=> {
      if (index < activeStarCount) {
        expect(itemWrapper.attributes('style')).toContain('--svg-icon-color: red')
      }
    })
  })

  test('invalidColor', async () => {
    const activeStarCount = 2
    const wrapper = mount(FRate, {
      props: {
        invalidColor: '#eee',
        modelValue: activeStarCount
      }
    })
    wrapper.findAll('.f-svg-icon').forEach((itemWrapper, index)=> {
      if (index >= activeStarCount) {
        expect(itemWrapper.attributes('style')).toContain('--svg-icon-color: #eee')
      }
    })
  })

  test('readonly', () => {
    const wrapper = mount(FRate, {
      props: { readonly: true }
    })
    expect(wrapper.find('.f-rate__star').classes()).toContain('f-rate__star-readonly')
  })

  test('clicking the star should not be reactive when set readonly', async () => {
    const activeStarCount = 2
    const wrapper = mount(FRate, {
      props: {
        readonly: true, 
        modelValue: activeStarCount,
        'onUpdate:modelValue': (val: number) => {
          wrapper.setProps({ modelValue: val })
        }
      }
    })
    expect(wrapper.props('modelValue')).toBe(activeStarCount)
    await wrapper.find('.f-rate__star').trigger('click')
    expect(wrapper.props('modelValue')).toBe(activeStarCount)
  })

  test('icon', () => {
    const wrapper = mount(FRate, {
      props: {
        icon: markRaw(FIconStarB)
      }
    })
    expect(wrapper.findComponent(FIconStarB).exists()).toBeTruthy()
  })

  test('size', () => {
    const wrapper = mount(FRate, {
      props: { size: 20 }
    })
    expect(wrapper.find('.f-svg-icon').attributes('style')).toContain('--svg-icon-size: 20px')
  })

  test('textShow', async () => {
    const wrapper = mount(FRate, {
      props: {
        textArr: ['1星', '2星', '3星', '4星', '5星'],
        textShow: true,
        modelValue: 2
      }
    })
    expect(wrapper.find('.f-text').text()).toBe('2星')
    await wrapper.setProps({ modelValue: 3 })
    expect(wrapper.find('.f-text').text()).toBe('3星')
  })

  test('textColor', () => {
    const wrapper = mount(FRate, {
      props: {
        textShow: true,
        textColor: 'red'
      }
    })
    expect(wrapper.find('.f-text').attributes('style')).toContain('--text-color: red')
  })

  test('textSize', () => {
    const wrapper = mount(FRate, {
      props: {
        textShow: true,
        textSize: 20
      }
    })
    expect(wrapper.find('.f-text').attributes('style')).toContain('--text-size: 20px')
  })

  test('onChange', async () => {
    const onChange = vi.fn((val: number) => val)
    const wrapper = mount(FRate, {
      props: { onChange }
    })
    await wrapper.find('.f-rate__star').trigger('click')
    expect(onChange).toHaveBeenCalled()
    expect(onChange).toHaveBeenCalledWith(1)
  })
})
