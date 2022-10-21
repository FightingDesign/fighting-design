import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import { FTag } from '../index'

describe('FTag', () => {
  test('class', () => {
    const wrapper = mount(FTag)
    expect(wrapper.classes()).toContain('f-tag')
  })

  test('type', () => {
    const type = ['default', 'primary', 'success', 'danger', 'warning'] as const
    type.forEach((item) => {
      const wrapper = mount(FTag, {
        props: { type: item }
      })
      expect(wrapper.classes()).toContain(`f-tag__${item}`)
    })
  })

  test('line', () => {
    const wrapper = mount(FTag, {
      props: { line: true }
    })
    expect(wrapper.classes()).toContain('f-tag__line')
  })

  test('round', () => {
    const wrapper = mount(FTag, {
      props: { round: true }
    })
    expect(wrapper.classes()).toContain('f-tag__round')
  })

  test('background', () => {
    const wrapper = mount(FTag, {
      props: { background: 'red' }
    })
    expect(wrapper.attributes('style')).toContain('red')
  })

  test('color', () => {
    const wrapper = mount(FTag, {
      props: { color: 'orange' }
    })
    expect(wrapper.attributes('style')).toContain('orange')
  })

  // test('before-icon', () => {
  //   const wrapper = mount(FTag, {
  //     props: { beforeIcon: 'f-icon-Customermanagement' }
  //   })
  //   expect(wrapper.find('.f-icon').classes()).toContain(
  //     'f-icon-Customermanagement'
  //   )
  // })

  // test('after-icon', () => {
  //   const wrapper = mount(FTag, {
  //     props: { afterIcon: 'f-icon-Customermanagement' }
  //   })
  //   expect(wrapper.find('.f-icon').classes()).toContain(
  //     'f-icon-Customermanagement'
  //   )
  // })

  test('size', () => {
    const size = ['large', 'middle', 'small', 'mini'] as const
    size.forEach((item) => {
      const wrapper = mount(FTag, {
        props: { size: item }
      })
      expect(wrapper.classes()).toContain(`f-tag__${item}`)
    })
  })

  test('simple', () => {
    const wrapper = mount(FTag, {
      props: { simple: true }
    })
    expect(wrapper.classes()).toContain('f-tag__simple')
  })

  test('block', () => {
    const wrapper = mount(FTag, {
      props: { block: true }
    })
    expect(wrapper.classes()).toContain('f-tag__block')
  })
})
