import Category from '@/components/category/store/category';
import { budgetMutations, BudgetState, BUDGET_CREATE } from '.';
import Budget from './budget';

describe('budgetMutations', () => {
  const category = new Category('Cinema');

  describe('BUDGET_CREATE', () => {
    it('adds the budget to the state', () => {
      const state = createState();
      const newBudget = new Budget(category, 13.37);

      budgetMutations[BUDGET_CREATE](state, newBudget);

      expect(state.budgets.length).toBe(1);
      expect(state.budgets[0].category).toEqual(category);
    });

    it('generates category ID', () => {
      const state = createState();
      const newBudget = new Budget(category, 13.37);

      budgetMutations[BUDGET_CREATE](state, newBudget);

      expect(state.budgets[0].id).not.toBeNull();
    });
  });
});

function createState(): BudgetState {
  return { budgets: [] };
}
