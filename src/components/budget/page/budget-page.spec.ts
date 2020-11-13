import { baseVue } from '@/tests/setup';
import BudgetPage from '@/components/budget/page/budget-page.vue';
import BudgetList from '@/components/budget/list/budget-list.vue';
import { mount } from '@vue/test-utils';

describe('budget-page', () => {
  it('contains correct subcomponents', () => {
    const { base } = baseVue();
    const page = mount(BudgetPage, base);

    expect(page.findAllComponents(BudgetList).length).toBe(1);
  });
});
