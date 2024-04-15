import { markRaw } from 'vue'
import { mount } from '@vue/test-utils'
import { vi, describe, expect, test } from 'vitest'
import { FIconFaceSmile } from '@fighting-design/fighting-icon'
import { FLink } from '../index'
import { FIGHTING_TYPE, FIGHTING_TARGET } from '../../_tokens'
import type { LinkState, LinkTarget } from '../index'

describe('FLink', () => {
  test('should render slot', () => {
    const wrapper = mount(FLink, {
      slots: {
        default: '这是一个链接'
      }
    })
    expect(wrapper.text()).toContain('这是一个链接')
  })

  test('class', () => {
    const wrapper = mount(FLink)
    expect(wrapper.classes()).toContain('f-link')
  })

  test('type', () => {
    FIGHTING_TYPE.forEach(item => {
      const wrapper = mount(FLink, {
        props: { type: item }
      })
      expect(wrapper.classes()).toContain(`f-link__${item}`)
    })
  })

  test('href', () => {
    const wrapper = mount(FLink, {
      props: { href: 'https://tianyuhao.cn' }
    })
    expect(wrapper.find('.f-link__a').attributes('href')).toContain(
      'https://tianyuhao.cn'
    )
  })

  test('size', () => {
    const wrapper = mount(FLink, {
      props: { size: '20px' }
    })
    expect(wrapper.attributes('style')).toContain('--link-size: 20px')
  })

  test('size', () => {
    const wrapper = mount(FLink, {
      props: { size: 16 }
    })
    expect(wrapper.attributes('style')).toContain('--link-size: 16px')
  })

  test('state', () => {
    const state: LinkState[] = ['line', 'background']
    state.forEach((item: LinkState) => {
      const wrapper = mount(FLink, {
        props: { state: item }
      })
      expect(wrapper.classes()).toContain(`f-link__${item}`)
    })
  })

  test('disabled', () => {
    const wrapper = mount(FLink, {
      props: { disabled: true }
    })
    wrapper.find('.f-link__a').trigger('click')
    expect(wrapper.classes()).toContain('f-link__disabled')
    expect(wrapper.emitted()).not.toHaveProperty('click')
  })

  test('target', () => {
    FIGHTING_TARGET.forEach((item: LinkTarget) => {
      const wrapper = mount(FLink, {
        props: { target: item }
      })
      expect(wrapper.find('.f-link__a').attributes('target')).toContain(item)
    })
  })

  test('color', () => {
    const wrapper = mount(FLink, {
      props: { color: 'red' }
    })
    expect(wrapper.attributes('style')).toContain('red')
  })

  test('noCopy', () => {
    const wrapper = mount(FLink, {
      props: { noCopy: true }
    })
    expect(wrapper.classes()).toContain('f-link__no-copy')
  })

  test('noLink', () => {
    const wrapper = mount(FLink, {
      props: { noLink: true }
    })
    wrapper.find('.f-link__a').trigger('click')
    expect(wrapper.emitted()).not.toHaveProperty('click')
  })

  test('beforeIcon', () => {
    const wrapper = mount(FLink, {
      props: { beforeIcon: markRaw(FIconFaceSmile) }
    })
    expect(wrapper.findComponent(FIconFaceSmile).exists()).toBeTruthy()
  })

  test('afterIcon', () => {
    const wrapper = mount(FLink, {
      props: { afterIcon: markRaw(FIconFaceSmile) }
    })
    expect(wrapper.findComponent(FIconFaceSmile).exists()).toBeTruthy()
  })

  test('onClick', () => {
    const onClick = vi.fn()
    const wrapper = mount(FLink, {
      props: { onClick }
    })
    wrapper.find('.f-link__a').trigger('click')
    expect(onClick).toHaveBeenCalled()
  })
})
