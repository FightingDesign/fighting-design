import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import { FTree } from '../index'

const data = [
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
  test('class', () => {
    const wrapper = mount(FTree, {
      props: { data }
    })
    expect(wrapper.find('.f-tree').classes()).toContain('f-tree')
  })
})
