import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import {
  FAside,
  FFooter,
  FHeader,
  FMain,
  FLayout
} from '../index'

describe('f-aside', () => {
  test('class', () => {
    const wrapper = mount(FAside)
    expect(wrapper.classes()).toContain('f-aside')
  })

  test('width', () => {
    const wrapper = mount(FAside, {
      props: { width: '200px' }
    })
    expect(wrapper.attributes('style')).toContain('--f-aside-width: 200px')
  })

  test('width', () => {
    const wrapper = mount(FAside, {
      props: { width: 200 }
    })
    expect(wrapper.attributes('style')).toContain('--f-aside-width: 200px')
  })
})

describe('f-footer', () => {
  test('class', () => {
    const wrapper = mount(FFooter)
    expect(wrapper.classes()).toContain('f-footer')
  })

  test('height', () => {
    const wrapper = mount(FFooter, {
      props: { height: '200px' }
    })
    expect(wrapper.attributes('style')).toContain('--f-footer-height: 200px')
  })

  test('height', () => {
    const wrapper = mount(FFooter, {
      props: { height: 200 }
    })
    expect(wrapper.attributes('style')).toContain('--f-footer-height: 200px')
  })

  test('padding', () => {
    const wrapper = mount(FFooter, {
      props: { padding: 200 }
    })
    expect(wrapper.attributes('style')).toContain('--f-footer-padding: 200px')
  })

  test('padding', () => {
    const wrapper = mount(FFooter, {
      props: { padding: '200px' }
    })
    expect(wrapper.attributes('style')).toContain('--f-footer-padding: 200px')
  })
})

describe('f-header', () => {
  test('class', () => {
    const wrapper = mount(FHeader)
    expect(wrapper.classes()).toContain('f-header')
  })

  test('height', () => {
    const wrapper = mount(FHeader, {
      props: { height: '20px' }
    })
    expect(wrapper.attributes('style')).toContain('--f-header-height: 20px')
  })

  test('height', () => {
    const wrapper = mount(FHeader, {
      props: { height: 20 }
    })
    expect(wrapper.attributes('style')).toContain('--f-header-height: 20px')
  })

  test('padding', () => {
    const wrapper = mount(FHeader, {
      props: { padding: 20 }
    })
    expect(wrapper.attributes('style')).toContain('--f-header-padding: 20px')
  })

  test('padding', () => {
    const wrapper = mount(FHeader, {
      props: { padding: '20px' }
    })
    expect(wrapper.attributes('style')).toContain('--f-header-padding: 20px')
  })
})

describe('f-main', () => {
  test('class', () => {
    const wrapper = mount(FMain)
    expect(wrapper.classes()).toContain('f-main')
  })

  test('padding', () => {
    const wrapper = mount(FMain, {
      props: { padding: '20px' }
    })
    expect(wrapper.attributes('style')).toContain('--f-main-padding: 20px')
  })

  test('padding', () => {
    const wrapper = mount(FMain, {
      props: { padding: 20 }
    })
    expect(wrapper.attributes('style')).toContain('--f-main-padding: 20px')
  })
})

describe('f-layout', () => {
  test('class', () => {
    const wrapper = mount(FLayout)
    expect(wrapper.classes()).toContain('f-layout')
  })
})
