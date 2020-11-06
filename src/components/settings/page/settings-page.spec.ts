import { mount } from '@vue/test-utils';
import SettingsPage from '@/components/settings/page/settings-page.vue';
import { baseVue } from '@/tests/setup';
import CategoryList from '@/components/category/list/category-list.vue';
import CreateCategory from '@/components/category/create/create-category.vue';
import SettingsElement from '@/components/settings/element/settings-element.vue';

describe('settings-page', () => {
  it('contains the category section as first element', () => {
    const { base } = baseVue();

    const component = mount(SettingsPage, base);
    const categorySection = component.findAll('[data-test="categorySection"]').at(0);

    expect(categorySection.props('heading')).toEqual('Categories');
    expect(categorySection.findAllComponents(CategoryList).length).toBe(1);
    expect(categorySection.findAllComponents(CreateCategory).length).toBe(1);
  });
});
