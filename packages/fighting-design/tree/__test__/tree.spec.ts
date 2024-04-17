import { mount } from '@vue/test-utils'
import { vi, describe, expect, test } from 'vitest'
import { FTree } from '../index'
import { FTreeItem } from '../components'
import type { TreeData } from '../src/interface'

const getAllNodeCount = (data: TreeData): number => {
  let count = 0
  data.forEach(item => {
    count++
    if (item.children) {
      count += getAllNodeCount(item.children)
    }
  })
  return count
}

const data: TreeData = [
  {
    label: 'Node 1',
    children: [
      {
        label: 'Node 1-1',
        children: [
          { label: 'Node 1-1-1' },
          { label: 'Node 1-1-2' },
          { label: 'Node 1-1-3' }
        ]
      },
      { label: 'Node 1-2' },
      { label: 'Node 1-3' }
    ]
  }
]

describe('Tree', () => { 
  test('create', async () => {
    const wrapper = mount(FTree, {
      props: {
        data
      }
    })
    const nodeCount = getAllNodeCount(data)
    expect(wrapper.find('.f-tree').exists()).toBeTruthy()
    expect(wrapper.findAll('.f-tree > .f-tree-item').length).toBe(1)
    expect(wrapper.findAll('.f-tree .f-tree-item').length).toBe(nodeCount)
    await wrapper.setProps({ data: data.concat({ label: 'Node 2' }) })
    expect(wrapper.findAll('.f-tree > .f-tree-item').length).toBe(2)
    expect(wrapper.findAll('.f-tree .f-tree-item').length).toBe(nodeCount + 1)
  })

  test('tree node is checked when click checkbox', async () => {
    let checkLabels: string[] = []
    const wrapper = mount(FTree, {
      attachTo: document.body,
      props: {
        data,
        check: checkLabels,
        isCheck: true,
        'onUpdate:check': async (value: string[]) => {
          checkLabels = checkLabels.concat(value)
          wrapper.setProps({ check: checkLabels })
        }
      }
    })
    const wrapperList = wrapper.findAllComponents(FTreeItem)
    const labelList = wrapperList.map(wrapperItem => wrapperItem.vm.model.label)

    await Promise.all([wrapperList.map(wrapperItem => wrapperItem.find('.f-checkbox').trigger('click'))])
    expect(checkLabels).toEqual(labelList)
  })

  test('offset', () => {
    const offset = 60
    const wrapper = mount(FTree, {
      props: {
        data,
        offset
      }
    })
    wrapper.findAllComponents(FTreeItem).forEach(wrapperItem => {
      const level = wrapperItem.vm.model.__level
      if (level > 0) {
        expect(wrapperItem.find('.f-tree-item__label').attributes('style')).toContain(`--tree-item-level-padding: ${level * offset}px`)
      }
    })
  })

  test('onClickLabel', async () => {
    const onClickLabel = vi.fn((evt, model, isOpen, tree) => ({ evt, model, isOpen, tree }))
    const wrapper = mount(FTree, {
      props: {
        data,
        onClickLabel
      }
    })
    await wrapper.find('.f-tree .f-tree-item__label').trigger('click')
    expect(onClickLabel).toHaveBeenCalled()
    expect(onClickLabel).toHaveReturned()
  })

  test('tree node is disabled', async () => {
    const onClickLabel = vi.fn()
    const wrapper = mount(FTree, {
      attachTo: document.body,
      props: {
        onClickLabel,
        isCheck: true,
        check: [],
        'onUpdate:check': async (value: string[]) => {
          wrapper.setProps({ check: value })
        },
        data: [
          {
            label: 'Node 1',
            disabled: true,
            children: [
              {
                label: 'Node 1-1'
              }
            ]
          }
        ]
      }
    })
    expect(wrapper.find('.f-tree-item__label-disabled').exists()).toBeTruthy()
    expect(wrapper.find('.f-checkbox').classes()).toContain('f-checkbox__disabled')
    // click label
    await wrapper.find('.f-tree .f-tree-item__label').trigger('click')
    expect(onClickLabel).not.toHaveBeenCalled()
    // click checkbox
    await wrapper.findComponent(FTreeItem).find('.f-checkbox').trigger('click')
    expect(wrapper.props('check')).toEqual([])
  })
})
