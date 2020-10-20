import { mount } from '@vue/test-utils';
import Category from '@/components/category/category';
import CategoryList from '@/components/category/category-list.vue';
import { baseVueWithCategories } from '../../../setup';

describe('category-list.vue', () => {
  it('should render the names of all categories', () => {
    const testCategories = [new Category('One'), new Category('Two')];
    const list = mount(CategoryList, baseVueWithCategories(testCategories));

    // Q1: simply test what user will see => text?
    // text() returns whitespaces between items in list
    let renderedText = list.text().replace(/\s+/g, '');
    expect(renderedText).toBe('OneTwo');

    // Q2: or test deeper html structure?
    let listItems = list.findAll('.v-list-item__content');
    expect(listItems.length).toBe(2);
    expect(listItems.at(0).text()).toBe('One');
    expect(listItems.at(1).text()).toBe('Two');
  });
});
