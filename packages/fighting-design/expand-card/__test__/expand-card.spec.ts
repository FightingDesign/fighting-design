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

  test('round', () => {
    const wrapper = mount(FExpandCard, {
      props: {
        imageList: [
          'https://tianyuhao.cn/images/auto/1.jpg',
          'https://tianyuhao.cn/images/auto/2.jpg',
          'https://tianyuhao.cn/images/auto/3.jpg'
        ],
        round: true
      }
    })
    expect(wrapper.find('.f-expand-card__item').classes()).toContain('f-expand-card__round')
  })

  test('round', () => {
    const wrapper = mount(FExpandCard, {
      props: {
        imageList: [
          { url: 'https://tianyuhao.cn/images/auto/1.jpg', text: '1' },
          { url: 'https://tianyuhao.cn/images/auto/2.jpg', text: '2' }
        ],
        color: 'red'
      }
    })
    expect(wrapper.find('.f-expand-card__title').attributes('style')).toContain('color: red')
  })

  test('width', () => {
    const wrapper = mount(FExpandCard, {
      props: {
        imageList: [
          { url: 'https://tianyuhao.cn/images/auto/1.jpg', text: '1' },
          { url: 'https://tianyuhao.cn/images/auto/2.jpg', text: '2' }
        ],
        width: '200px'
      }
    })
    expect(wrapper.attributes('style')).toContain('width: 200px')
  })

  test('width', () => {
    const wrapper = mount(FExpandCard, {
      props: {
        imageList: [
          { url: 'https://tianyuhao.cn/images/auto/1.jpg', text: '1' },
          { url: 'https://tianyuhao.cn/images/auto/2.jpg', text: '2' }
        ],
        width: 400
      }
    })
    expect(wrapper.attributes('style')).toContain('width: 400px')
  })

  test('height', () => {
    const wrapper = mount(FExpandCard, {
      props: {
        imageList: [
          { url: 'https://tianyuhao.cn/images/auto/1.jpg', text: '1' },
          { url: 'https://tianyuhao.cn/images/auto/2.jpg', text: '2' }
        ],
        height: '200px'
      }
    })
    expect(wrapper.attributes('style')).toContain('height: 200px')
  })

  test('height', () => {
    const wrapper = mount(FExpandCard, {
      props: {
        imageList: [
          { url: 'https://tianyuhao.cn/images/auto/1.jpg', text: '1' },
          { url: 'https://tianyuhao.cn/images/auto/2.jpg', text: '2' }
        ],
        height: 400
      }
    })
    expect(wrapper.attributes('style')).toContain('height: 400px')
  })
})
