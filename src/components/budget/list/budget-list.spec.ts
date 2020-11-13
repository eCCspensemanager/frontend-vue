import { mount } from '@vue/test-utils';
import Category from '@/components/category/store/category';
import BudgetList from '@/components/budget/list/budget-list.vue';
import { baseVue } from '@/tests/setup';
import Budget from '../store/budget';

describe('budget-list.vue', () => {
  it('should render the names of all categories', () => {
    const { base } = baseVue();
    base.store.getters.getBudgets.mockImplementation(() => [new Budget(new Category('Entertainment'), 100), new Budget(new Category('Food'), 200)]);
    const list = mount(BudgetList, base);

    let listItems = list.findAll('.v-list-item__content');
    expect(listItems.length).toBe(2);
    expect(listItems.at(0).text()).toBe('Entertainment - 100');
    expect(listItems.at(1).text()).toBe('Food - 200');
  });
});
