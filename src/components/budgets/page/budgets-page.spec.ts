import { baseVue } from '@/tests/setup';
import BudgetsPage from '@/components/budgets/page/budgets-page.vue';
import { mount } from '@vue/test-utils';

describe('budgets-page', () => {
  it('contains a heading', () => {
    const base = baseVue();
    const component = mount(BudgetsPage, base);

    const headings = component.find('h1');

    expect(headings.text()).toBe('Budgets');
  });
});
