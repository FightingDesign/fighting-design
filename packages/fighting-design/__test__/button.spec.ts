import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import { FButton } from '../index'
import { ChangeColor } from '../_utils'

describe('FButton', () => {
  test('class', () => {
    const wrapper = mount(FButton)
    expect(wrapper.classes()).toContain('f-button')
    expect(wrapper.attributes('role')).toContain('button')
    expect(wrapper.attributes('name')).toContain('f-button')
    expect(wrapper.attributes('tabindex')).toContain('0')
  })

  test('bold', () => {
    const wrapper = mount(FButton, {
      props: { bold: true }
    })
    expect(wrapper.classes()).toContain('f-button__bold')
  })

  test('circle', () => {
    const wrapper = mount(FButton, {
      props: { circle: true }
    })
    expect(wrapper.classes()).toContain('f-button__circle')
  })

  test('round', () => {
    const wrapper = mount(FButton, {
      props: { round: true }
    })
    expect(wrapper.classes()).toContain('f-button__round')
  })

  test('fontSize', () => {
    const wrapper = mount(FButton, {
      props: { fontSize: '20px' }
    })
    expect(wrapper.attributes('style')).toContain('20px')
  })

  test('fontSize', () => {
    const wrapper = mount(FButton, {
      props: { fontSize: 17 }
    })
    expect(wrapper.attributes('style')).toContain('17px')
  })

  test('font-color', () => {
    const wrapper = mount(FButton, {
      props: { fontColor: 'red' }
    })
    expect(wrapper.attributes('style')).toContain('red')
  })

  test('size', () => {
    const size = ['large', 'middle', 'small', 'mini'] as const
    size.forEach((item) => {
      const wrapper = mount(FButton, {
        props: { size: item }
      })
      expect(wrapper.classes()).toContain(`f-button__${item}`)
    })
  })

  test('block', () => {
    const wrapper = mount(FButton, {
      props: { block: true }
    })
    expect(wrapper.classes()).toContain('f-button__block')
  })

  test('href', () => {
    const wrapper = mount(FButton, {
      props: { href: 'https://tianyuhao.cn' }
    })
    expect(wrapper.attributes('href')).toContain('https://tianyuhao.cn')
  })

  test('target', () => {
    const target = ['_blank', '_self', '_parent', '_top'] as const
    target.forEach((item) => {
      const wrapper = mount(FButton, {
        props: { href: 'https://tianyuhao.cn', target: item }
      })
      expect(wrapper.attributes('target')).toContain(item)
    })
  })

  test('loading', () => {
    const wrapper = mount(FButton, {
      props: { loading: true }
    })
    expect(wrapper.classes()).toContain('f-button__disabled')
    expect(wrapper.attributes('disabled')).toContain(true)
    // expect(wrapper.find('i').classes()).toContain('f-icon')
    // expect(wrapper.find('i').classes()).toContain('f-icon-loading')
    // expect(wrapper.find('i').classes()).toContain('f-loading-animation')
  })

  // test('loading-icon', () => {
  //   const wrapper = mount(FButton, {
  //     props: { loading: true, loadingIcon: 'f-icon-suoxiao' }
  //   })
  //   expect(wrapper.find('i').classes()).toContain('f-icon-suoxiao')
  // })

  test('disabled', () => {
    const wrapper = mount(FButton, {
      props: { disabled: true }
    })
    expect(wrapper.classes()).toContain('f-button__disabled')
    expect(wrapper.attributes('disabled')).toContain(true)
  })

  // test('before-icon', () => {
  //   const wrapper = mount(FButton, {
  //     props: { beforeIcon: 'f-icon-Customermanagement' }
  //   })
  //   expect(wrapper.find('.f-icon').classes()).toContain(
  //     'f-icon-Customermanagement'
  //   )
  // })

  // test('before-icon', () => {
  //   const wrapper = mount(FButton, {
  //     props: { beforeIcon: 'f-icon-Customermanagement', loading: true }
  //   })
  //   expect(wrapper.find('.f-icon').classes()).toContain(
  //     'f-icon-loading'
  //   )
  // })

  // test('after-icon', () => {
  //   const wrapper = mount(FButton, {
  //     props: { afterIcon: 'f-icon-Customermanagement' }
  //   })
  //   expect(wrapper.find('.f-icon').classes()).toContain(
  //     'f-icon-Customermanagement'
  //   )
  // })

  test('type', () => {
    const type = ['default', 'primary', 'success', 'danger', 'warning'] as const
    type.forEach((item) => {
      const wrapper = mount(FButton, {
        props: { type: item }
      })
      expect(wrapper.classes()).toContain(`f-button__${item}`)
    })
  })

  test('autofocus', () => {
    const wrapper = mount(FButton, {
      props: { autofocus: true }
    })
    expect(wrapper.attributes('autofocus')).toContain('true')
  })

  test('name', () => {
    const wrapper = mount(FButton, {
      props: { name: 'my-button' }
    })
    expect(wrapper.attributes('name')).toContain('my-button')
  })

  test('shadow', () => {
    const wrapper = mount(FButton, {
      props: { shadow: '7px 7px 15px #dcdcdc,-7px -7px 15px #e4e4e4' }
    })
    expect(wrapper.attributes('style')).toContain(
      '--f-button-box-shadow: 7px 7px 15px #dcdcdc,-7px -7px 15px #e4e4e4'
    )
  })

  test('text', () => {
    const wrapper = mount(FButton, {
      props: { text: true }
    })
    expect(wrapper.classes()).toContain('f-button__text')
  })

  test('simple', () => {
    const wrapper = mount(FButton, {
      props: { simple: true }
    })
    expect(wrapper.classes()).toContain('f-button__simple')
  })

  test('native-type', () => {
    const nativeType = ['button', 'submit', 'reset'] as const
    nativeType.forEach((item) => {
      const wrapper = mount(FButton, {
        props: { nativeType: item }
      })
      expect(wrapper.attributes('type')).toContain(item)
    })
  })

  test('color', () => {
    const color = '#eeeeee'
    const changeColor: ChangeColor = new ChangeColor(color)
    const light: string = changeColor.getLightColor(0.4)
    const dark: string = changeColor.getDarkColor(0.2)
    const wrapper = mount(FButton, {
      props: { color }
    })
    expect(wrapper.attributes('style')).toContain(`--f-button-default-color: ${color}`)
    expect(wrapper.attributes('style')).toContain(`--f-button-hover-color: ${light}`)
    expect(wrapper.attributes('style')).toContain(`--f-button-active-color: ${dark}`)
  })

  test('default slot', () => {
    const wrapper = mount(FButton, {
      slots: { default: '这是按钮' }
    })
    expect(wrapper.text()).toContain('这是按钮')
  })

  test('on click', async () => {
    const wrapper = mount(FButton, {
      slots: { default: '点击测试' }
    })
    await wrapper.trigger('click')
    expect(wrapper.emitted()).toBeDefined()
  })

  test('disabled click', async () => {
    const wrapper = mount(FButton, {
      slots: { default: '点击测试' },
      props: { disabled: true }
    })
    await wrapper.trigger('click')
    expect(wrapper.emitted('click')).toBeUndefined()
  })

  test('loading click', async () => {
    const wrapper = mount(FButton, {
      slots: { default: '点击测试' },
      props: { loading: true }
    })
    await wrapper.trigger('click')
    expect(wrapper.emitted('click')).toBeUndefined()
  })
})
