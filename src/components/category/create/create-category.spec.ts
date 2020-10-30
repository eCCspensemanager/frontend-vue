import { mount } from '@vue/test-utils';

import CreateCategory from '@/components/category/create/create-category.vue';
import { baseVue, baseVue2 } from '@/tests/setup';
import Category from '@/components/category/store/category';
import { CategoryState, CATEGORY_CREATE } from '../store';
import store from '@/store';

describe('create-category.vue', () => {
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
    const component = mount(
      CreateCategory,
      baseVue({
        categories: [new Category('Entertainment')],
      }),
    );
    const textfield = component.find('[data-test="categoryText"]');
    const createBtn = component.find('button');

    await textfield.setValue('Entertainment');
    expect(createBtn.props('disabled')).toBe(true);
  });

  it('creates category and clears textfield on button click', async () => {
    const { base, spies } = baseVue2();
    const component = mount(CreateCategory, base);
    const textfield = component.find('[data-test="categoryText"]');
    const createBtn = component.find('button');

    base.store.getters.categoryExists.mockImplementation(() => false);

    await textfield.setValue('Insurance');
    await createBtn.trigger('click');

    expect(spies[CATEGORY_CREATE]).toHaveBeenCalled();
    expect(spies[CATEGORY_CREATE].mock.calls[0][1]).toBe('Insurance');
    expect(textfield.text()).toBe('');
  });
});
