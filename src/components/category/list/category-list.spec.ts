import { mount } from '@vue/test-utils';
import Category from '@/components/category/store/category';
import CategoryList from '@/components/category/list/category-list.vue';
import { baseVue } from '@/tests/setup';

describe('category-list.vue', () => {
  it('should render the names of all categories', () => {
    const list = mount(
      CategoryList,
      baseVue({
        categories: [new Category('One'), new Category('Two')],
      }),
    );

    let listItems = list.findAll('.v-list-item__content');
    expect(listItems.length).toBe(2);
    expect(listItems.at(0).text()).toBe('One');
    expect(listItems.at(1).text()).toBe('Two');
  });
});
