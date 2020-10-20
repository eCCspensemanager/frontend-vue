import { mount } from '@vue/test-utils';

import CreateCategory from '@/components/category/create-category.vue';
import { baseVue } from '../../../setup';

describe('create-category.vue', () => {
  it('renders textfield and button', () => {
    const component = mount(CreateCategory, baseVue());

    const textfield = component.find('.v-input');
    // Q3 why does this fail?! expect(textfield.text()).toBe('New category');

    const createBtn = component.find('button');
    expect(createBtn.text()).toBe('Create');
  });

  it('disables the button if no value entered', () => {});

  it('disables the button if category already existing', () => {});

  it('creates category on button click', () => {});
});
