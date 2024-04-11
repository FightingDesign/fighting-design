import { mount } from '@vue/test-utils'
import { vi, describe, expect, test } from 'vitest'
import { FIconFaceSmile } from '@fighting-design/fighting-icon'
import { FTag } from '../index'
import { FIGHTING_SIZE, FIGHTING_TYPE } from '../../_tokens'
import type { FightingType } from '../../_interface'
import { markRaw } from 'vue'

describe('FTag', () => {
  test('should render slot', () => {
    const wrapper = mount(FTag, {
      slots: { default: '这是一个标签' }
    })
    expect(wrapper.find('.f-tag').text()).toContain('这是一个标签')
  })

  test('class', () => {
    const wrapper = mount(FTag)
    expect(wrapper.find('.f-tag').exists()).toBeTruthy()
  })

  test('type', () => {
    FIGHTING_TYPE.forEach((item: FightingType): void => {
      const wrapper = mount(FTag, {
        props: { type: item }
      })
      expect(wrapper.find('.f-tag').classes()).toContain(`f-tag__${item}`)
    })
  })

  test('round', () => {
    const wrapper = mount(FTag, {
      props: { round: true }
    })
    expect(wrapper.find('.f-tag').classes()).toContain('f-tag__round')
  })

  test('background', () => {
    const wrapper = mount(FTag, {
      props: { background: 'red' }
    })
    expect(wrapper.find('.f-tag').attributes('style')).toContain('--tag-background: red')
  })

  test('color', () => {
    const wrapper = mount(FTag, {
      props: { color: 'orange' }
    })
    expect(wrapper.find('.f-tag').attributes('style')).toContain('--tag-color: orange')
  })

  test('beforeIcon', () => {
    const wrapper = mount(FTag, {
      props: { beforeIcon: markRaw(FIconFaceSmile) }
    })
    expect(wrapper.findComponent(FIconFaceSmile).exists()).toBeTruthy()
  })

  test('afterIcon', () => {
    const wrapper = mount(FTag, {
      props: { afterIcon: markRaw(FIconFaceSmile) }
    })
    expect(wrapper.findComponent(FIconFaceSmile).exists()).toBeTruthy()
  })

  test('size', () => {
    FIGHTING_SIZE.forEach(item => {
      const wrapper = mount(FTag, {
        props: { size: item }
      })
      expect(wrapper.find('.f-tag').classes()).toContain(`f-tag__${item}`)
    })
  })

  test('simple', () => {
    const wrapper = mount(FTag, {
      props: { simple: true }
    })
    expect(wrapper.find('.f-tag').classes()).toContain('f-tag__simple')
  })

  test('block', () => {
    const wrapper = mount(FTag, {
      props: { block: true }
    })
    expect(wrapper.find('.f-tag').classes()).toContain('f-tag__block')
  })

  test('line', () => {
    const wrapper = mount(FTag, {
      props: { line: true }
    })
    expect(wrapper.find('.f-tag').classes()).toContain('f-tag__line')
  })

  test('onClose', () => {
    const onClose = vi.fn()
    const wrapper = mount(FTag, {
      props: { close: true, onClose }
    })
    wrapper.find('.f-close-btn').trigger('click')
    expect(onClose).toHaveBeenCalled()
  })

  test('onClick', () => {
    const onClick = vi.fn()
    const wrapper = mount(FTag, {
      props: { onClick }
    })
    wrapper.find('.f-tag').trigger('click')
    expect(onClick).toHaveBeenCalled()
  })
})
