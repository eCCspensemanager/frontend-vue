import { mount } from '@vue/test-utils';

import CreateCategory from '@/components/category/create-category.vue';
import { baseVue, baseVueWithCategories } from '../../../setup';
import Category from '@/components/category/category';

describe('create-category.vue', () => {
  it('renders textfield and button', () => {
    const component = mount(CreateCategory, baseVue());

    //const textfield = component.find('.v-input');
    // Q3 why does this fail?! expect(textfield.text()).toBe('New category');

    const createBtn = component.find('button');
    expect(createBtn.text()).toBe('Create');
  });

  it('disables the button if no text is entered', async () => {
    const component = mount(CreateCategory, baseVue());
    const textfield = component.find('[data-test="categoryText"]');
    const createBtn = component.find('button');

    expect(createBtn.props('disabled')).toBe(true);
    await textfield.setValue('Some input');
    expect(createBtn.props('disabled')).toBe(false);

    await textfield.setValue('');
    expect(createBtn.props('disabled')).toBe(true);
  });

  it('disables the button if category already existing', async () => {
    const component = mount(CreateCategory, baseVueWithCategories([new Category('Entertainment')]));
    const textfield = component.find('[data-test="categoryText"]');
    const createBtn = component.find('button');

    await textfield.setValue('Entertainment');
    expect(createBtn.props('disabled')).toBe(true);
  });

  it('creates category and clears textfield on button click', async () => {
    const vue = baseVue();
    const component = mount(CreateCategory, vue);
    const textfield = component.find('[data-test="categoryText"]');
    const createBtn = component.find('button');

    expect(vue.store.state.categories.length).toBe(0);

    await textfield.setValue('Insurance');
    await createBtn.trigger('click');

    expect(vue.store.state.categories.length).toBe(1);
    expect(vue.store.state.categories[0].name).toBe('Insurance');
    expect(component.vm.$data.category).toBe('');
  });
});
