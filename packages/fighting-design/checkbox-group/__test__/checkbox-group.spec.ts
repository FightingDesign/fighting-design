import { ref, defineComponent } from 'vue'
import { mount } from '@vue/test-utils'
import { describe, expect, test, afterEach } from 'vitest'
import { FCheckboxGroup } from '../index'
import FCheckbox from '../../checkbox'
import { FIGHTING_SIZE } from '../../_tokens'
import type { FightingSize } from '../../_interface'

const checkList = ref([])
const labelList = ['鸡肉卷', '鸡排', '汉堡']

afterEach(() => {
  checkList.value = []
})

const getWrapper = (props = '', options = {}) => {
  const App = defineComponent({
    components: {
      FCheckbox,
      FCheckboxGroup
    },
    setup() {
      return {
        labelList,
        checkList,
        ...options
      }
    },
    template: `
      <f-checkbox-group v-model="checkList" ${props}>
        <f-checkbox v-for="item of labelList" :key="item" :label="item" />
      </f-checkbox-group>
    `
  })
  const wrapper = mount(App, {
    attachTo: document.body
  })
  return wrapper
}

describe('FCheckboxGroup', () => { 
  test('create', () => {
    const wrapper = getWrapper()
    expect(wrapper.classes()).toContain('f-checkbox-group')
    expect(wrapper.findAll('.f-checkbox').length).toBe(labelList.length)
  })

  test('v-model', async () => {
    const wrapper = getWrapper()
    const checkboxList = wrapper.findAll('.f-checkbox')
    await checkboxList[0].trigger('click')
    await checkboxList[1].trigger('click')
    await checkboxList[2].trigger('click')
    expect(checkList.value).toEqual(labelList)
  })

  test('disabled', async () => {
    const wrapper = getWrapper('disabled')
    const checkboxList = wrapper.findAll('.f-checkbox')
    await checkboxList[0].trigger('click')
    await checkboxList[1].trigger('click')
    await checkboxList[2].trigger('click')
    expect(checkList.value).toEqual([])
  })

  test('vertical', () => {
    const wrapper = getWrapper('vertical')
    expect(wrapper.classes()).toContain('f-checkbox-group__vertical')
  })

  test('background', () => {
    const wrapper = getWrapper('background')
    expect(wrapper.classes()).toContain('f-checkbox-group__background')
  })

  test('size', () => {
    FIGHTING_SIZE.forEach((size: FightingSize) => {
      const wrapper = getWrapper(`size=${size}`)
      expect(wrapper.classes()).toContain(`f-checkbox-group__${size}`)
    })
  })

  test('columnGap', () => {
    const wrapper = getWrapper(':columnGap=50')
    expect(wrapper.get('.f-checkbox-group').attributes('style')).toContain('--checkbox-group-column-gap: 50px')
  })

  test('rowGap', () => {
    const wrapper = getWrapper(':rowGap=100')
    expect(wrapper.attributes('style')).toContain('--checkbox-group-row-gap: 100px')
  })

  test('onChange', async () => {
    const data = ref<string[]>([])
    const handleChange = (val: string[]) => {
      data.value = val
    }
    const wrapper = getWrapper(':onChange=handleChange', {
      handleChange
    })
    const checkboxList = wrapper.findAll('.f-checkbox')
    await checkboxList[0].trigger('click')
    await checkboxList[1].trigger('click')
    await checkboxList[2].trigger('click')
    expect(checkList.value).toEqual(labelList)
  })
})
