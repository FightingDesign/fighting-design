import { ref, defineComponent } from 'vue'
import { mount } from '@vue/test-utils'
import { describe, expect, test, afterEach } from 'vitest'
import { FRadio } from '../../radio'
import { FRadioGroup } from '../index'
import { FIGHTING_SIZE } from '../../_tokens'

const selectedRadio = ref('')
const labelList = ['备选项1', '备选项2', '备选项3']

afterEach(() => {
  selectedRadio.value = ''
})

const getWrapper = (props = '', options = {}) => {
  const App = defineComponent({
    components: {
      FRadio,
      FRadioGroup
    },
    setup () {
      return {
        labelList,
        selectedRadio,
        ...options
      }
    },
    template: `
      <f-radio-group v-model="selectedRadio" ${props}>
        <f-radio v-for="item of labelList" :key="item" :label="item" />
      </f-radio-group>
    `
  })
  const wrapper = mount(App, {
    attachTo: document.body
  })
  return wrapper
}

describe('RadioGroup', () => {
  test('create', () => {
    const wrapper = getWrapper()
    expect(wrapper.attributes('role')).toContain('radiogroup')
    expect(wrapper.classes()).toContain('f-radio-group')
    expect(wrapper.findAll('.f-radio').length).toBe(labelList.length)
  })

  test('v-model', async () => {
    const wrapper = getWrapper()
    const radioList = wrapper.findAll('.f-radio')
    await radioList[0].trigger('click')
    expect(selectedRadio.value).toBe(labelList[0])
    await radioList[1].trigger('click')
    expect(selectedRadio.value).toBe(labelList[1])
  })

  test('disabled', async () => {
    const wrapper = getWrapper('disabled')
    const radioList = wrapper.findAll('.f-radio')
    await radioList[0].trigger('click')
    expect(selectedRadio.value).toEqual('')
  })

  test('vertical', () => {
    const wrapper = getWrapper('vertical')
    expect(wrapper.classes()).toContain('f-radio-group__vertical')
  })

  test('background', () => {
    const wrapper = getWrapper('background')
    expect(wrapper.classes()).toContain('f-radio-group__background')
  })

  test('size', () => {
    FIGHTING_SIZE.forEach(item => {
      const wrapper = getWrapper(`size=${item}`)
      expect(wrapper.classes()).toContain(`f-radio-group__${item}`)
    })
  })

  test('columnGap', () => {
    const wrapper = getWrapper(':columnGap=50')
    expect(wrapper.get('.f-radio-group').attributes('style')).toContain(
      '--radio-group-column-gap: 50px'
    )
  })

  test('rowGap', () => {
    const wrapper = getWrapper(':rowGap=100')
    expect(wrapper.attributes('style')).toContain('--radio-group-row-gap: 100px')
  })

  test('onChange', async () => {
    const data = ref<string[]>([])
    const handleChange = (val: string[]) => {
      data.value = val
    }
    const wrapper = getWrapper(':onChange=handleChange', {
      handleChange
    })
    const radioList = wrapper.findAll('.f-radio')
    await radioList[0].trigger('click')
    expect(selectedRadio.value).toEqual(labelList[0])
  })
})
