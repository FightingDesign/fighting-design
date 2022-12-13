import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import { FExpandCard } from '../index'

describe('FExpandCard', () => {
  test('class', () => {
    const wrapper = mount(FExpandCard, {
      props: {
        imageList: [
          'https://tianyuhao.cn/images/auto/1.jpg',
          'https://tianyuhao.cn/images/auto/2.jpg',
          'https://tianyuhao.cn/images/auto/3.jpg'
        ]
      }
    })
    expect(wrapper.find('div').classes()).toContain('f-expand-card')
  })
})
