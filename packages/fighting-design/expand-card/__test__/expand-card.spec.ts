import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import { FExpandCard } from '../index'
import type { ExpandCardImageList } from '../index'

const imageList: ExpandCardImageList = [
  {
    url: 'https://raw.githubusercontent.com/Tyh2001/images/master/fighting-design/1.jpg',
    text: '1'
  },
  {
    url: 'https://raw.githubusercontent.com/Tyh2001/images/master/fighting-design/2.jpg',
    text: '2'
  }
]

describe('FExpandCard', () => {
  test('class', () => {
    const wrapper = mount(FExpandCard, {
      props: { imageList }
    })
    expect(wrapper.classes()).toContain('f-expand-card')
  })

  test('round', () => {
    const wrapper = mount(FExpandCard, {
      props: { imageList, round: true }
    })
    expect(wrapper.classes()).toContain('f-expand-card__round')
  })

  test('color', () => {
    const wrapper = mount(FExpandCard, {
      props: { imageList, color: 'red' }
    })
    expect(wrapper.attributes('style')).toContain('--expand-card-color: red')
  })

  test('width', () => {
    const wrapper = mount(FExpandCard, {
      props: { imageList, width: '200px' }
    })
    expect(wrapper.attributes('style')).toContain('--expand-card-width: 200px')
  })

  test('width', () => {
    const wrapper = mount(FExpandCard, {
      props: { imageList, width: 400 }
    })
    expect(wrapper.attributes('style')).toContain('--expand-card-width: 400px')
  })

  test('height', () => {
    const wrapper = mount(FExpandCard, {
      props: { imageList, height: '200px' }
    })
    expect(wrapper.attributes('style')).toContain('--expand-card-height: 200px')
  })

  test('height', () => {
    const wrapper = mount(FExpandCard, {
      props: { imageList, height: 400 }
    })
    expect(wrapper.attributes('style')).toContain('--expand-card-height: 400px')
  })

  test('vertical', () => {
    const wrapper = mount(FExpandCard, {
      props: { imageList, vertical: true }
    })
    expect(wrapper.classes()).toContain('f-expand-card__vertical')
  })
})
