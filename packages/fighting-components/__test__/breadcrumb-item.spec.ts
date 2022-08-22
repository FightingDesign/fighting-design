import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import { FBreadcrumbItem } from '@fighting-design/fighting-components'

describe('FBreadcrumb', () => {
  test('class', () => {
    const wrapper = mount(FBreadcrumbItem)
    expect(wrapper.classes()).toContain('f-breadcrumb-item')
  })
})
