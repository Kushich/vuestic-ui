import { shallowMount } from '@vue/test-utils'
import { testIsFormComponent } from './testIsFormComponent'

export function testIsSelectableComponent (componentOptions) {
  const wrapper = shallowMount(componentOptions)
  // Test mixin applied
  if (!wrapper.vm.isSelectableComponent) {
    throw new Error('SelectableMixin is not added')
  }
  expect(() => testIsFormComponent(wrapper)).not.toThrow()
}
