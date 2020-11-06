import { mount } from '@vue/test-utils';
import CreateCategory from '@/components/category/create/create-category.vue';
import { baseVue } from '@/tests/setup';
import { CATEGORY_CREATE } from '../store';

describe('create-category.vue', () => {
  it('disables the button if no text is entered', async () => {
    const { base } = baseVue();
    base.store.getters.categoryExists.mockImplementation((value: string) => value == 'Entertainment');

    const component = mount(CreateCategory, base);
    const textfield = component.find('[data-test="categoryText"]');
    const createBtn = component.find('button');

    expect(createBtn.props('disabled')).toBe(true);
    await textfield.setValue('Some input');
    expect(createBtn.props('disabled')).toBe(false);

    await textfield.setValue('');
    expect(createBtn.props('disabled')).toBe(true);
  });

  it('disables the button if category already existing', async () => {
    const { base } = baseVue();
    base.store.getters.categoryExists.mockImplementation(() => true);

    const component = mount(CreateCategory, base);
    const textfield = component.find('[data-test="categoryText"]');
    const createBtn = component.find('button');

    await textfield.setValue('Entertainment');
    expect(createBtn.props('disabled')).toBe(true);
  });

  it('creates category and clears textfield on button click', async () => {
    const { base, spies } = baseVue();
    const component = mount(CreateCategory, base);
    const textfield = component.find('[data-test="categoryText"]');
    const createBtn = component.find('button');

    base.store.getters.categoryExists.mockImplementation(() => false);

    await textfield.setValue('Insurance');
    await createBtn.trigger('click');

    expect(spies.category[CATEGORY_CREATE]).toHaveBeenCalled();
    expect(spies.category[CATEGORY_CREATE].mock.calls[0][1]).toBe('Insurance');
    expect(textfield.text()).toBe('');
  });
});
